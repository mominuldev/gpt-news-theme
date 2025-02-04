<?php
/**
 * Gpt functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Gpt
 */

/**
 * Path Define
 */

define( 'MP_THEME_DIR', get_template_directory() );
define( 'MP_THEME_URI', get_template_directory_uri() );
// Is WooCommerce active?
define( 'GPT_WOOCOMMERCE_IS_ACTIVE', class_exists( 'WooCommerce' ) );

// A Custom function for get an option
if ( ! function_exists( 'pps_option' ) ) {
	function pps_option( $option = '', $default = null ) {
		$options = get_option( 'mp_theme_options' ); // Attention: Set your unique id of the framework

		return ( isset( $options[ $option ] ) ) ? $options[ $option ] : $default;
	}
}

/**
 * Implement the Custom Header feature.
 */
require MP_THEME_DIR . '/inc/custom-header.php';

/**
 * Load All Classes.
 */
require_once MP_THEME_DIR . '/inc/class/theme-autoload.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require MP_THEME_DIR . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require MP_THEME_DIR . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require MP_THEME_DIR . '/inc/jetpack.php';
}

/**
 * Filter the categories archive widget to add a span around post count
 */
function pps_cat_count_span( $links ) {
	$links = str_replace( '</a> (', ' <span class="post-count">', $links );
	$links = str_replace( ')', '</span></a>', $links );

	return $links;
}

add_filter( 'wp_list_categories', 'pps_cat_count_span' );

/**
 * Filter the archives widget to add a span around post count
 */
function pps_archive_count_span( $links ) {
	$links = str_replace( '</a>&nbsp;(', '<span class="post-count">', $links );
	$links = str_replace( ')', '</span></a>', $links );

	return $links;
}

add_filter( 'get_archives_link', 'pps_archive_count_span' );

add_filter( 'get_archives_link', 'pps_archive_count_span' );

if ( ! function_exists( 'pps_reorder_comment_fields' ) ) {
	function pps_reorder_comment_fields( $fields ) {
		$new_fields = array();

		$myorder = array( 'author', 'email', 'url', 'comment' );

		foreach ( $myorder as $key ) {
			$new_fields[ $key ] = isset( $fields[ $key ] ) ? $fields[ $key ] : '';
			unset( $fields[ $key ] );
		}

		if ( $fields ) {
			foreach ( $fields as $key => $val ) {
				$new_fields[ $key ] = $val;
			}
		}

		return $new_fields;
	}
}

add_filter( 'comment_form_fields', 'pps_reorder_comment_fields' );

// Codestar Framework Welcome page disable
add_filter( 'csf_welcome_page', '__return_false' );


function custom_remove_archive_title( $title ) {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_post_type_archive() ) {
		$title = post_type_archive_title( '', false );
	}

	return $title;
}

add_filter( 'get_the_archive_title', 'custom_remove_archive_title' );


// Register a meta box to track post views count
function register_post_views_count_meta_box() {
	add_meta_box(
		'post_views_count', // ID of the meta box
		'Post Views Count', // Title of the meta box
		'post_views_count_meta_box_callback', // Callback function
		'post', // Screen (post type)
		'side', // Context (where to show the meta box)
		'high' // Priority (priority of the meta box)
	);
}

add_action( 'add_meta_boxes', 'register_post_views_count_meta_box' );

// Callback function to display the meta box content
function post_views_count_meta_box_callback( $post ) {
	// Use nonce for verification
	wp_nonce_field( 'post_views_count_nonce', 'post_views_count_nonce_field' );

	// Get the current view count
	$views_count = get_post_meta( $post->ID, 'post_views_count', true );

	echo '<label for="post_views_count">Views Count:</label>';
	echo '<input type="number" id="post_views_count" name="post_views_count" value="' . esc_attr( $views_count ) . '" style="width: 100%;"/>';
}


// Save the meta box data
function save_post_views_count_meta_box( $post_id ) {
	// Check if nonce is set
	if ( ! isset( $_POST['post_views_count_nonce_field'] ) ) {
		return;
	}

	// Verify the nonce
	if ( ! wp_verify_nonce( $_POST['post_views_count_nonce_field'], 'post_views_count_nonce' ) ) {
		return;
	}

	// Check if the user has permission to save the data
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	// Save the views count
	if ( isset( $_POST['post_views_count'] ) ) {
		update_post_meta( $post_id, 'post_views_count', sanitize_text_field( $_POST['post_views_count'] ) );
	}
}

add_action( 'save_post', 'save_post_views_count_meta_box' );


function increment_post_views( $post_id ) {
	// Get the current views count
	$views_count = get_post_meta( $post_id, 'post_views_count', true );
	$views_count = $views_count ? intval( $views_count ) : 0; // Ensure it's an integer

	// Increment the views count
	$views_count ++;

	// Update the views count in the database
	update_post_meta( $post_id, 'post_views_count', $views_count );
}

// Hook into the 'wp' action to increment views count on post view
add_action( 'wp', function () {
	if ( is_single() ) {
		global $post;
		increment_post_views( $post->ID );
	}
} );


// Ajax Search
function ajax_search() {
	$search_term = sanitize_text_field( $_POST['search'] );

	// Custom query for search
	$args = array(
		'post_type'      => 'post', // Search in posts (change if needed)
		's'              => $search_term,
		'posts_per_page' => 5 // Limit the number of results
	);

	$query = new WP_Query( $args );

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();

			echo '<div class="blog-search-result">';
			if ( has_post_thumbnail() ) {
				echo '<div class="blog-search-result-image">';
				the_post_thumbnail( 'thumbnail' );
				echo '</div>';
			}
			echo '<div class="blog-search-result-content">';
			echo '<h3><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h3>';
			echo '<div class="date-meta">';
			echo '<i class="ri-calendar-2-line"></i>';
			echo PPS_Theme_Helper::pps_posted_on();
			echo '</div>';
			echo '</div>';
			echo '</div>';
		}
	} else {
		echo '<p>No results found</p>';
	}

	wp_die(); // Required to terminate immediately and return the proper result
}

add_action( 'wp_ajax_ajax_search', 'ajax_search' ); // If logged in
add_action( 'wp_ajax_nopriv_ajax_search', 'ajax_search' ); // If logged out


function insert_google_ads_after_paragraph( $content ) {
	// Get ad code from options, or default to an empty string if not set
	$ad_code = pps_option( 'google_ads_content' );
	if ( ! $ad_code ) {
		return $content; // Exit if ad code is empty
	}

	// Define ad display settings
	$ad_paragraph_interval = 3; // Interval to insert ads (e.g., every 3rd paragraph)
	$min_word_count        = 30; // Minimum words per paragraph to qualify for ad insertion

	// Split content into paragraphs
	$paragraphs       = explode( '</p>', $content );
	$total_paragraphs = count( $paragraphs );

	// Process each paragraph if conditions are met
	if ( is_single() ) {
		for ( $i = 0; $i < $total_paragraphs; $i ++ ) {
			$paragraph = trim( $paragraphs[ $i ] );

			// Continue only if paragraph is not empty and has sufficient words
			if ( $paragraph && str_word_count( strip_tags( $paragraph ) ) >= $min_word_count ) {
				// Insert ad after every specified interval
				if ( ( $i + 1 ) % $ad_paragraph_interval === 0 ) {
					$paragraphs[ $i ] .= '</p>' . wp_kses_post( $ad_code );
				} else {
					$paragraphs[ $i ] .= '</p>'; // Close paragraph tag if no ad
				}
			} else {
				$paragraphs[ $i ] .= '</p>'; // Close paragraph for non-qualifying sections
			}
		}
	}

	// Return content with ads included
	return implode( '', $paragraphs );
}

add_filter( 'the_content', 'insert_google_ads_after_paragraph' );


function visa_check_redirect_shortcode() {
	ob_start();
	?>
    <form id="visa-check-form" method="get" action="https://www.epassport.gov.bd/authorization/application-status" target="_blank">
        <div class="pps-form-header">
            <div class="pps-form-group">
                <label for="registration_id">Online Registration ID</label>
                <input type="text" id="registration_id" name="id" placeholder="OIDXXXXXXXXXX" maxlength="13" required>
            </div>

            <span class="or">OR</span>
            <!-- /.or -->

            <div class="pps-form-group">
                <label for="application_id">Application ID</label>
                <input type="text" id="application_id" name="application_id" placeholder="XXXX-XXXXXXXXXX" maxlength="13">
            </div>
        </div>
        <!-- /.pps-form-header -->

        <div class="pps-form-group">
            <label for="application">Application ID / Online Registration ID</label>
            <input type="text" id="application" name="id" readonly maxlength="13" required>
        </div>

        <div class="pps-form-group">
            <label for="dob">Select date of birth</label>
            <input type="date" id="dob" name="dob" placeholder="DD/MM/YYYY" required>
        </div>

        <button type="submit" class="pps-btn">Check</button>
    </form>

    <script>
        // Event listener for updating the readonly application field
        document.getElementById('registration_id').addEventListener('input', function () {
            const registrationValue = this.value;
            const applicationField = document.getElementById('application');
            applicationField.value = registrationValue;
        });

        // Submit logic with dynamic action URL
        document.getElementById('visa-check-form').addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get input values
            const applicationId = document.getElementById('application').value;
            const dob = document.getElementById('dob').value;

            // Validate the input values
            if (!applicationId || !dob) {
                alert('Please fill in all required fields.');
                return;
            }

            // Update the form's action URL
            const baseUrl = 'https://www.epassport.gov.bd/authorization/application-status';
            const newAction = `${baseUrl}?id=${encodeURIComponent(applicationId)}&dob=${encodeURIComponent(dob)}`;
            this.action = newAction;

            // Submit the form
            this.submit();
        });
    </script>
	<?php
	return ob_get_clean();
}


add_shortcode( 'visa_check_redirect', 'visa_check_redirect_shortcode' );



