<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Gpt Theme Helper
 * @class        PPS_Theme_Helper
 * @version      1.0
 * @category     Class
 * @author       GptIslam
 */

if ( ! class_exists( 'PPS_Theme_Helper' ) ) {
	class PPS_Theme_Helper {

		/**
		 * Constructor
		 */
		function __construct() {
			add_action( 'wp_body_open', array( $this, 'pps_preloader_markup' ), 1 );
			add_action( 'pps_after_footer', [ $this, 'pps_backtotop' ] );
			add_action( 'wp_head', [ $this, 'pps_google_analytics' ] );
		}

		public function pps_backtotop() {
			$backtotop = pps_option( 'back_to_top_switch' );
			if ( $backtotop == '1' ) { ?>
                <div class="pps-scroll-top progress-done">
                    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                              style="transition: stroke-dashoffset 10ms linear 0s;
                        stroke-dasharray: 307.919px, 307.919px;
                        stroke-dashoffset: 71.1186px;"></path>
                    </svg>
                    <div class="pps-scroll-top-icon">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                data-icon="mdi:arrow-up"
                                class="iconify iconify--mdi"
                        >
                            <path
                                    fill="currentColor"
                                    d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                            ></path>
                        </svg>
                    </div>
                </div>
			<?php }
		}

		/**
		 * Settings Compare function
		 *
		 * @param [type] $name
		 * @param boolean $check_key
		 * @param boolean $check_value
		 *
		 * @return void
		 */
		public static function options_compare( $name, $check_key = false, $check_value = false ) {
			$option = pps_option( $name );
			$meta   = get_post_meta( get_the_ID(), 'pps_page_options', true );

			//Check if check_key exist
			if ( $check_key ) {
				if ( $meta[ $check_key ] == $check_value ) {
					$option = $meta[ $name ];
				}

			} else {
				$var    = $meta[ $name ];
				$option = ! empty( $var ) ? $meta[ $name ] : pps_option( $name );
			}

			return $option;
		}

		/**
		 * Utility methods
		 * ---------------
		 */
		//Add breadcrumbs
		static function pps_breadcrumb() {
			global $post;
			$pps_opt     = get_option( 'pps_opt' );
			$brseparator = '<span class="separator"></span>';
			if ( ! is_home() ) {
				echo '<div class="breadcrumbs">';
				echo '<a href="';
				echo esc_url( home_url( '/' ) );
				echo '">';
				echo esc_html__( 'Home', 'pps-passport' );
				echo '</a>' . $brseparator;
				if ( is_category() || is_single() ) {
					$categories = get_the_category();
					if ( count( $categories ) > 0 ) {
						echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a>';
					}
					if ( is_single() ) {
						if ( count( $categories ) > 0 ) {
							echo '' . $brseparator;
						}
						the_title();
					}
				} elseif ( is_page() ) {
					if ( $post->post_parent ) {
						$anc   = get_post_ancestors( $post->ID );
						$title = get_the_title();
						foreach ( $anc as $ancestor ) {
							$output = '<a href="' . get_permalink( $ancestor ) . '" title="' . get_the_title( $ancestor ) . '">' . get_the_title( $ancestor ) . '</a>' . $brseparator;
						}
						echo wp_kses( $output, array(
							'a'    => array(
								'href'  => array(),
								'title' => array()
							),
							'span' => array(
								'class' => array()
							)
						) );
						echo '<span title="' . $title . '">' . $title . '</span>';
					} else {
						echo '<span>' . get_the_title() . '</span>';
					}
				} elseif ( is_tag() ) {
					single_tag_title();
				} elseif ( is_day() ) {
					printf( esc_html__( 'Archive for: %s', 'pps-passport' ), '<span>' . get_the_date() . '</span>' );
				} elseif ( is_month() ) {
					printf( esc_html__( 'Archive for: %s', 'pps-passport' ),
						'<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'pps-passport' ) ) . '</span>' );
				} elseif ( is_year() ) {
					printf( esc_html__( 'Archive for: %s', 'pps-passport' ),
						'<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'pps-passport' ) ) . '</span>' );
				} elseif ( is_author() ) {
					echo "<span>" . esc_html__( 'Archive for', 'pps-passport' );
					echo '</span>';
				} elseif ( isset( $_GET['paged'] ) && ! empty( $_GET['paged'] ) ) {
					echo "<span>" . esc_html__( 'Blog Archives', 'pps-passport' );
					echo '</span>';
				} elseif ( is_search() ) {
					echo "<span>" . esc_html__( 'Search Results', 'pps-passport' );
					echo '</span>';
				} elseif ( is_post_type_archive( 'tribe_events' ) ) {
					echo "<span>" . esc_html__( 'Events', 'pps-passport' );
				}
				echo '</div>';
			} else {
				echo '<div class="breadcrumbs">';
				echo '<a href="';
				echo esc_url( home_url( '/' ) );
				echo '">';
				echo esc_html__( 'Home', 'pps-passport' );
				echo '</a>' . $brseparator;
				if ( isset( $pps_opt['blog_header_text'] ) && $pps_opt['blog_header_text'] != "" ) {
					echo esc_html( $pps_opt['blog_header_text'] );
				} else {
					echo esc_html__( 'Blog', 'pps-passport' );
				}
				echo '</div>';
			}
		}

		/**
		 * Google Analytics
		 */
		public function pps_google_analytics() {
			$pps_opt = pps_option( 'google_analytics_code' );

			if ( $pps_opt ) : ?>
                <script async
                        src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr( $pps_opt ); ?>"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        dataLayer.push(arguments);
                    }

                    gtag('js', new Date());
                    gtag('config', '<?php echo esc_attr( $pps_opt ); ?>');
                </script>
			<?php endif;

		}


		/* Pagination */

		static function pps_post_pagination( $nav_query = false ) {

			global $wp_query, $wp_rewrite;

			// Don't print empty markup if there's only one page.
			if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
				return;
			}

			// Prepare variables
			$query        = $nav_query ? $nav_query : $wp_query;
			$max          = $query->max_num_pages;
			$current_page = max( 1, get_query_var( 'paged' ) );
			$big          = 999999;
			?>
            <nav id="post-pagination">
				<?php
				echo '' . paginate_links( array(
						'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format'    => '?paged=%#%',
						'current'   => $current_page,
						'total'     => $max,
						'type'      => 'list',
						'prev_text' => '<i class="fa fa-angle-left"></i>',
						'next_text' => '<i class="fa fa-angle-right"></i>'
					) ) . ' ';
				?>
            </nav><!-- .page-nav -->
			<?php
		}


		/*
		 * Post Author By
		 */
		static function pps_posted_author_avatar() {
			printf( '<div class="author-meta"><span class="author-avatar">%2$s</span>  <a class="url fn n post-author" href="%1$s">%3$s</a></div>',
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
				get_avatar( get_the_author_meta( 'ID' ), 24 ),
				esc_html( get_the_author() )
			);

		}

		/*
		 * Post Author By
		 */
		static function pps_posted_on() {
			$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
			if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
				$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
			}

			$time_string = sprintf( $time_string, esc_attr( get_the_date( DATE_W3C ) ), esc_html( get_the_date( 'M j, Y' ) ),
				esc_attr( get_the_modified_date( DATE_W3C ) ), esc_html( get_the_modified_date( 'M j, Y' ) ) );

			$posted_on = $time_string;

			echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

		}

		/**
		 * Display the post reading time.
		 *
		 * @param string $word
		 *
		 * @return string
		 */
		public static function pps_content_reading_time( $word ) {
			$strip_content = strip_tags( (string) $word );
			$word_count    = str_word_count( $strip_content );
			$reading_minit = floor( $word_count / 200 );
			$reading_sec   = floor( $word_count % 200 / ( 200 / 60 ) );
			$label         = sprintf( __( '%1$s min read', 'pps-passport' ), $reading_minit, $reading_sec );

			return '<span class="reading-time">' . $label . '</span>';
		}

		/**
		 * Display the post reading time.
		 *
		 * @param string $word
		 *
		 * @return string
		 */
		static function pps_entry_cat() {
			// Hide category and tag text for pages.
			if ( 'post' === get_post_type() ) {
				/* translators: used between list items, there is a space after the comma */
				$categories_list = get_the_category_list( esc_html__( ' ', 'pps-passport' ) );
				if ( $categories_list ) {
					/* translators: 1: list of categories. */
					printf( esc_html__( ' %1$s', 'pps-passport' ), $categories_list ); // WPCS: XSS OK.
				}

			}

		}

		/**
		 * Display the post Tags
		 *
		 * @param string $word
		 *
		 * @return string
		 */
		static function pps_posted_tag() {
			// Hide category and tag text for pages.
			if ( 'post' === get_post_type() ) {

				/* translators: used between list items, there is a space after the comma */
				$tags_list = get_the_tag_list( '', esc_html_x( ' ', 'list item separator', 'pps-passport' ) );
				if ( $tags_list ) {
					/* translators: 1: list of tags. */
					printf( '<div class="single-tagcloud"><h3 class="post-share-title">' . esc_html( 'Tags:', 'pps-passport' ) . '</h3>' . esc_html__( '%1$s',
							'pps-passport' ) . '</div>', $tags_list ); // WPCS: XSS OK.
				}
			}
		}

		/**
		 * Trim text
		 */
		static function pps_substring( $string, $limit, $afterlimit = '[...]' ) {
			if ( empty( $string ) ) {
				return $string;
			}
			$string = explode( ' ', strip_tags( $string ), $limit );

			if ( count( $string ) >= $limit ) {
				array_pop( $string );
				$string = implode( " ", $string ) . ' ' . $afterlimit;
			} else {
				$string = implode( " ", $string );
			}
			$string = preg_replace( '`[[^]]*]`', '', $string );

			return strip_shortcodes( $string );
		}


		/**
		 * Render sidebars.
		 * All Page Sidebar Control.
		 * @since pps-passport 1.0
		 */

		public static function render_sidebars( $args = 'blog' ) {
			$output        = [];
			$sidebar_style = '';

			$layout        = pps_option( $args . '_sidebar_layout' ) ? pps_option( $args . '_sidebar_layout' ) : 'right';
			$sidebar       = 'sidebar_main-sidebar';
			$sidebar_width = pps_option( $args . '_sidebar_def_width', '8' );
			$sidebar_gap   = pps_option( $args . '_sidebar_gap', '45' );
			$sidebar_class = $sidebar_style = '';

			if ( isset( $sidebar_gap ) && $sidebar_gap != 'def' && $layout != 'default' ) {
				$layout_pos    = $layout == 'left' ? 'right' : 'left';
				$sidebar_style = 'style="padding-' . $layout_pos . ': ' . $sidebar_gap . 'px;"';
			}

			$column = 12;

			if ( $layout == 'left' || $layout == 'right' ) {
				$column = (int) $sidebar_width;
			} else {
				$sidebar = '';
			}


			if ( ! is_active_sidebar( $sidebar ) ) {
				$column  = 12;
				$sidebar = '';
				$layout  = 'none';
			}


			$output['column']    = $column;
			$output['row_class'] = $layout != 'none' ? ' sidebar_' . esc_attr( $layout ) : '';
			$output['layout']    = $layout;
			$output['content']   = '';

			if ( $layout == 'left' || $layout == 'right' ) {
				$output['content'] .= '<div class="sidebar-container ' . $sidebar_class . 'col-lg-' . ( 12 - (int) $column ) . '" ' . $sidebar_style . '>';
				if ( is_active_sidebar( $sidebar ) ) {

					$output['content'] .= "<aside class='sidebar'>";

					ob_start();
					dynamic_sidebar( $sidebar );
					$output['content'] .= ob_get_clean();
					$output['content'] .= "</aside>";
				}
				$output['content'] .= "</div>";
			}

			return $output;
		}


		// Post Author By
		public static function post_author_by() {

			$author      = get_the_author();
			$author_id   = get_the_author_meta( 'ID' );
			$author_url  = get_author_posts_url( $author_id );
			$author_name = get_the_author_meta( 'display_name' );
			$author_link = '<a href="' . esc_url( $author_url ) . '">' . esc_html( $author_name ) . '</a>';
			echo '<span class="post_author">' . esc_html__( "by", 'pps-passport' ) . ' ' . $author_link . '</span>';
		}

		// Post view count
		public static function post_view_count( $id ) {
			$post_id   = get_the_ID();
			$count_key = 'post_views_count';
			$count     = get_post_meta( $post_id, $count_key, true );
			if ( $count == '' ) {
				$count = 0;
				delete_post_meta( $post_id, $count_key );
				add_post_meta( $post_id, $count_key, '0' );
			} else {
				$count ++;
				update_post_meta( $post_id, $count_key, $count );
			}

			return '<p class="post_view_count">' . esc_html( $count ) . '<span>' . esc_html__( " Views", 'pps-passport' ) . '</span></p>';

		}

		/**
		 * Display Post Thumbnail.
		 */
		static function pps_post_thumbnail() {
			if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
				return;
			}

			if ( is_singular() ) : ?>

                <div class="feature-image">
					<?php the_post_thumbnail( 'full' ); ?>
                </div><!-- .post-thumbnail -->

			<?php else : ?>
                <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
					<?php the_post_thumbnail( 'full', array( 'alt' => the_title_attribute( array( 'echo' => false, ) ) ) ); ?>
                </a>
			<?php
			endif; // End is_singular().
		}


		static function render_author_info() {
			$user_email       = get_the_author_meta( 'user_email' );
			$user_avatar      = get_avatar( $user_email, 100 );
			$user_first       = get_the_author_meta( 'first_name' );
			$user_last        = get_the_author_meta( 'last_name' );
			$user_description = get_the_author_meta( 'description' );
			$designation      = get_the_author_meta( 'designation' );

			$avatar_html = ! empty( $user_avatar ) ? '<div class="author-info_avatar">' . $user_avatar . '</div>' : '';
			$name_html   = ! empty( $user_first ) || ! empty( $user_last ) ? '<h5 class="author-info_name">' . $user_first . ' ' . $user_last . '</h5>' : '';

			$description = ! empty( $user_description ) ? '<div class="author-info_description">' . $user_description . '</div>' : '';

			$social_array = array(
				'facebook-f'  => get_the_author_meta( 'facebook' ),
				'twitter'     => get_the_author_meta( 'twitter' ),
				'linkedin-in' => get_the_author_meta( 'linkedin' ),
				'instagram'   => get_the_author_meta( 'instagram' ),
			);
			$social_html  = '';
			foreach ( $social_array as $key => $value ) {
				$social_html .= ! empty( $value ) ? '<a href="' . esc_url( $value ) . '" class="author-info_social-link fab fa-' . esc_attr( $key ) . '"></a>' : '';
			}
			$social_html = ! empty( $social_html ) ? '<div class="author-info_social-wrapper">' . $social_html . '</div>' : '';

			if ( (bool) $name_html || (bool) $description || (bool) $social_html ) {
				echo '<h3 class="author-info_title">' . esc_html__( 'About Author', 'pps-passport' ) . '</h3>';
				echo '<div class="author-info_wrapper">' . $avatar_html . '<div class="author-info">' . $name_html . $social_html . '</div><div class="author-info_content">' . $description . '</div></div>';
			}

		}

		/**
		 * Preloader.
		 * Preloader Init.
		 * @since pps-passport 1.0
		 */

		public function pps_preloader_markup() {
			$preloader_switch = pps_option( 'preloader_switch' );
			$preloader_opt    = pps_option( 'preloader' );
			$preloader_type   = pps_option( 'preloader-type' );
			$preloader_img    = pps_option( 'preloader-images' );
			$preloader_text   = pps_option( 'preloader_text' );

			if ( $preloader_switch ) : ?>
                <div id="preloader" class="preloader">
					<?php if ( $preloader_type == 'text' ) :
						$preloader_text = ! empty( $preloader_text ) ? strtoupper( $preloader_text ) : strtoupper( get_bloginfo( 'name' ) );
						$preloader_text = str_split( $preloader_text );
						?>
                        <div class="page-loading-wrapper">
                            <div class="loading loading07">
								<?php if ( is_array( $preloader_text ) ) {
									foreach ( $preloader_text as $single ) { ?>
                                        <span data-text="<?php echo esc_attr( $single ) ?>" class="letters-loading">
												<?php echo esc_html( $single ) ?>
											</span>
										<?php
									}
								}
								?>
                            </div>
                        </div>
					<?php elseif ( $preloader_type == 'css' ) :
						if ( ! empty( $preloader_opt ) ) :
							$style_name = substr( $preloader_opt, 0, - 2 );
							$style_div = substr( $preloader_opt, - 1 );
							?>
                            <div id="loader">
                                <div class="loader-inner <?php echo esc_attr( $style_name ); ?>">
									<?php for ( $div = 0; $div < $style_div; $div ++ ) : ?>
                                        <div></div>
									<?php endfor; ?>
                                </div>
                            </div><!-- /#loader -->
						<?php endif; ?>
					<?php elseif ( $preloader_type == 'preloader-img' ) : ?>
						<?php $img = wp_get_attachment_image_src( $preloader_img, 'full', true ); ?>

                        <img class="pr" src="<?php echo esc_url( $img[0] ); ?>"
                             width="<?php echo esc_attr( $img[1] ); ?>" height="<?php echo
						esc_attr( $img[2] ); ?>" alt="<?php get_bloginfo( 'name' ); ?>"/>
					<?php endif; ?>
                </div><!-- /#preloader -->
			<?php endif;
		}

		public static function render_html( $args ) {
			return isset( $args ) ? $args : '';
		}

		static function pps_entry_comments( $post_id, $no_comments = 'No Comment' ) {

			$comments_number = get_comments_number( $post_id );
			if ( $comments_number == 0 ) {
				$comment_text = $no_comments;
			} elseif ( $comments_number == 1 ) {
				$comment_text = esc_html__( '1 Comment', 'pps-passport' );
			} elseif ( $comments_number > 1 ) {
				$comment_text = $comments_number . '<span class="comment-text">' . esc_html__( ' Comments', 'pps-passport' ) . '</span>';
			}

			$allowed_html = array(
				'span' => array(
					'class' => array(),
				),
			);

			echo wp_kses( $comment_text, $allowed_html );

		}

		static function pps_excerpt( $limit ) {
			$excerpt = get_the_excerpt();
			$excerpt = wp_trim_words( $excerpt, $limit, '...' );

			return $excerpt;

		}

		/**
		 * Logo
		 */
		public static function branding_logo() {

			$logo_main        = pps_option( 'main_logo' );
			$sticky           = pps_option( 'sticky_logo' );
			$retina_logo      = pps_option( 'retina_logo' );
			$retina_sticky    = pps_option( 'retina_logo_sticky' );
			$is_sticky_header = pps_option( 'header_sticky' );
			$transparent_logo = pps_option( 'transparent_main_logo' );
			$transparent_menu = pps_option( 'transparent_menu' );

			// Logo Callback
			$logo               = ! empty( $logo_main['url'] ) ? $logo_main['url'] : '';
			$logo_contrast      = ! empty( $sticky['url'] ) ? $sticky['url'] : '';
			$transparent_logo   = ! empty( $transparent_logo['url'] ) ? $transparent_logo['url'] : '';
			$retina_logo        = ! empty( $retina_logo['url'] ) ? $retina_logo['url'] : '';
			$retina_logo_sticky = ! empty( $retina_sticky ['url'] ) ? $retina_sticky ['url'] : '';

			// Logo Meta Callback
			$meta = get_post_meta( get_the_ID(), 'pps_page_options', true );

			$meta_true = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '0';

			if ( $meta_true ) {
				$logo               = ! empty( $meta['meta_main_logo']['url'] ) ? $meta['meta_main_logo']['url'] : $logo;
				$logo_contrast      = ! empty( $meta['meta_sticky_logo']['url'] ) ? $meta['meta_sticky_logo']['url'] : $logo_contrast;
				$retina_logo        = ! empty( $meta['retina_logo']['url'] ) ? $meta['retina_logo']['url'] : $retina_logo;
				$retina_logo_sticky = ! empty( $meta['retina_logo_sticky']['url'] ) ? $meta['retina_logo_sticky']['url'] : $retina_logo_sticky;
			}

			?>

            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<?php if ( ! empty( $logo ) ) { ?>
                    <img <?php if ( ! empty( $retina_logo ) ) {
						echo 'srcset="' . esc_attr( $retina_logo ) . ' 2x"';
					} ?> src="<?php echo esc_url( $logo ); ?>" alt="<?php esc_attr( bloginfo( 'name' ) ); ?>"
                         class="main-logo"/>

					<?php if ( $logo_contrast !== '' && $is_sticky_header == true ): ?>
                        <img <?php if ( ! empty( $retina_logo_sticky ) ) {
							echo 'srcset="' . esc_attr( $retina_logo_sticky ) . ' 2x"';
						} ?> src="<?php echo esc_url( $logo_contrast ); ?>"
                             alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="logo-sticky">
					<?php endif; ?>

				<?php } elseif ( $transparent_menu == true && $transparent_logo !== '' ) { ?>
                    <img <?php if ( ! empty( $retina_logo ) ) {
						echo 'srcset="' . esc_attr( $retina_logo ) . ' 2x"';
					} ?> src="<?php echo esc_url( $transparent_logo ); ?>"
                         alt="<?php esc_attr( bloginfo( 'name' ) ); ?>"
                         class="main-logo transparent-logo"/>

					<?php if ( $logo_contrast !== '' && $is_sticky_header == true ): ?>
                        <img <?php if ( ! empty( $retina_logo_sticky ) ) {
							echo 'srcset="' . esc_attr( $retina_logo_sticky ) . ' 2x"';
						} ?> src="<?php echo esc_url( $logo_contrast ); ?>"
                             alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="logo-sticky">
					<?php endif; ?>

				<?php } else { ?>
                    <h3><?php bloginfo( 'name' ); ?></h3>
				<?php } ?>
            </a>
			<?php
		}

		static function render_post_list_share() { ?>

            <div class="share_social-wpapper">
                <h3 class="post-share-title"><?php echo esc_html__( 'Share This Post:', 'pps-passport' ) ?></h3>

                <ul class="social-share-link">
                    <li>
                        <a class="share_post share_facebook" target="_blank"
                           href="<?php echo esc_url( 'https://www.facebook.com/share.php?u=' . get_permalink() ); ?>">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a class="share_post share_twitter" target="_blank"
                           href="<?php echo esc_url( 'https://x.com/intent/tweet?text=' . get_the_title() . '&amp;url=' . get_permalink() ); ?>">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </li>
					<?php
					$img_url = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'single-post-thumbnail' );
					if ( ! empty( $img_url ) ) {
						echo '<li>';
						echo '<a class="share_post share_pinterest" target="_blank" href="' . esc_url( 'https://pinterest.com/pin/create/button/?url=' . get_permalink() . '&media=' . $img_url[0] ) . '"><i class="fab fa-pinterest-p"></i></a>';
						echo '</li>';
					}
					?>
                    <li>
                        <a class="share_post share_linkedin" target="_blank"
                           href="<?php echo esc_url( 'http://www.linkedin.com/shareArticle?mini=true&url=' . substr( urlencode( get_permalink() ), 0,
								   1024 ) ); ?>&title=<?php echo esc_attr( substr( urlencode( html_entity_decode( get_the_title() ) ), 0,
							   200 ) ); ?>">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>

			<?php
		}

		static function related_post() { ?>
            <div class="related-post-wrapper">
                <h2 class="related-title"><?php echo esc_html( pps_option( 'related_title' ) ); ?></h2>
                <div class="swiper-container related-post-slider">
                    <div class="swiper-wrapper">
						<?php
						global $post;
						$post_id    = get_the_ID();
						$cat_ids    = array();
						$categories = get_the_category( $post_id );

						if ( ! empty( $categories ) && is_wp_error( $categories ) ):
							foreach ( $categories as $category ):
								array_push( $cat_ids, $category->term_id );
							endforeach;
						endif;

						$query_args = array(
							'category__in'   => wp_get_post_categories( $post->ID ),
							'post_not_in'    => array( $post_id ),
							'posts_per_page' => '2'
						);

						$related_cats_post = new WP_Query( $query_args );

						if ( $related_cats_post->have_posts() ):
							while ( $related_cats_post->have_posts() ): $related_cats_post->the_post(); ?>

                                <div class="swiper-slide">
                                    <div class="pps-post-item">
                                        <div class="pps-post-item__content-inner">
											<?php if ( has_post_thumbnail() ): ?>
                                                <div class="pps-post-item__feature-image">
                                                    <a href="<?php echo the_permalink(); ?>">
														<?php the_post_thumbnail( 'genesis_blog_grid_410x290', array( 'class' => 'img-fluid' ) ) ?>
                                                    </a>

                                                </div>
											<?php endif; ?>

                                            <div class="pps-post-item__blog-content">
                                                <div class="pps-post-item__meta">
                                                    <div class="pps-post-item__category">
														<?php
														$terms = get_the_terms( get_the_ID(), 'category' );
														if ( $terms && ! is_wp_error( $terms ) ) :
															$cat_temp = '';
															foreach ( $terms as $term ) {
																$cat_temp .= '<a href="' . get_category_link( $term->term_id ) . '"   class="category" rel="category">' . esc_html( $term->name ) . '</a>';
															}
														endif;

														echo $cat_temp;
														?>
                                                    </div>

                                                    <div class="pps-post-item__date-meta">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.6">
                                                                <path d="M19 10.0039C19 14.9719 14.968 19.0039 10 19.0039C5.032 19.0039 1 14.9719 1 10.0039C1 5.03591 5.032 1.00391 10 1.00391C14.968 1.00391 19 5.03591 19 10.0039Z"
                                                                      stroke="black" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M13.3391 12.8659L10.5491 11.2009C10.0631 10.9129 9.66705 10.2199 9.66705 9.65289V5.96289"
                                                                      stroke="black" stroke-width="2"
                                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                            </g>
                                                        </svg>

														<?php PPS_Theme_Helper::pps_posted_on(); ?>
                                                    </div>
                                                </div>

                                                <h3 class="pps-post-item__entry-title"><a
                                                            href="<?php echo get_the_permalink(); ?>"><?php the_title(); ?></a>
                                                </h3>

                                                <p class="pps-post-item__entry-content">
													<?php echo PPS_Theme_Helper::pps_excerpt( 15 ); ?>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

							<?php endwhile;

							// Restore original Post Data
							wp_reset_postdata();
						endif; ?>
                    </div>

                    <div class="post-slider-pagination swiper-pagination"></div>
                </div>
            </div>
            <!-- /.related-post-wrapper -->
		<?php }

		/**
		 * @return void
		 * Trending News
		 */
		static function trending_news() {
			$trending_news = new WP_Query( array(
				'posts_per_page' => 5,
				'meta_key'       => 'post_views_count',
				'orderby'        => 'meta_value_num',
				'order'          => 'DESC',
			) );

			if ( $trending_news->have_posts() ) : ?>
                <div class="trending-news-wrapper">
                    <div class=" swiper-container trending-news-slider">
                        <div class="swiper-wrapper">
							<?php while ( $trending_news->have_posts() ) : $trending_news->the_post(); ?>
                                <div class="swiper-slide">
                                    <div class="trending-post-item">
                                        <h3 class="trending-post-title">
                                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                        </h3>
                                    </div>
                                </div>
							<?php endwhile; ?>
                        </div>
                    </div>
                </div>
			<?php endif;
			wp_reset_postdata();

		}

		static function pps_post_nav() {
			// Don't print empty markup if there's nowhere to navigate.
			$pre_post  = $next_post = '';
			$next_post = get_next_post();
			$pre_post  = get_previous_post();
			if ( ! $next_post && ! $pre_post ) {
				return;
			}
			if ( $pre_post ):
				$pre_img = wp_get_attachment_url( get_post_thumbnail_id( $pre_post->ID ) );
			endif;
			if ( $next_post ):
				$next_img = wp_get_attachment_url( get_post_thumbnail_id( $next_post->ID ) );
			endif;

			echo '<div class="single-post-navigation">
				<div class="row no-gutters"><div class="col-md-6"><div class="post-previous">';
			if ( ! empty( $pre_post ) ):
				?>
                <a href="<?php echo get_the_permalink( $pre_post->ID ); ?>" class="single-post-nav">

					<?php if ( ! empty( $pre_img ) ): ?>
                        <div class="post-nav-thumbnail">
                            <img src="<?php echo esc_url( $pre_img ); ?>"
                                 alt="<?php echo esc_attr( $pre_post->post_title ); ?>" width="70"
                                 height="70">
                        </div>
					<?php endif; ?>

                    <div class="post-nav-wrapper">
                        <p class="post-nav-title"><i
                                    class="ri-arrow-left-s-line"></i><?php esc_html_e( 'Previous', 'pps-passport' ) ?></p>
                        <h4 class="post-title"><?php echo get_the_title( $pre_post->ID ) ?></h4>
                    </div>

                </a>

			<?php
			endif;
			echo '</div></div><div class="col-md-6"><div class="post-next">';

			if ( ! empty( $next_post ) ):
				?>
                <a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="single-post-nav">

                    <div class="post-nav-wrapper">
                        <p class="post-nav-title"><?php esc_html_e( 'Next', 'pps-passport' ) ?><i
                                    class="ri-arrow-right-s-line"></i></p>
                        <h4 class="post-title"><?php echo get_the_title( $next_post->ID ) ?></h4>
                    </div>

					<?php if ( ! empty( $next_img ) ): ?>
                        <div class="post-nav-thumbnail">
                            <img src="<?php echo esc_url( $next_img ); ?>"
                                 alt="<?php echo esc_attr( $next_img->post_title ); ?>" width="70"
                                 height="70">
                        </div>
					<?php endif; ?>
                </a>

			<?php
			endif;
			echo '</div></div></div></div>';
		}

		static function social_link() {
			$social_links = pps_option( 'social_links' );

			if ( ! empty( $social_links ) ) {
				echo '<ul class="pps-social-link">';
				foreach ( $social_links as $social_link ) {
					echo '<li><a href="' . esc_url( $social_link['url'] ) . '" target="_blank" aria-label="' . esc_attr( $social_link['name'] ) . '"><i class="fab fa-' . esc_attr( $social_link['icon'] ) . '"></i></a></li>';
				}
				echo '</ul>';
			}

		}
	}

	// Instantiate theme
	new PPS_Theme_Helper();
}


