<?php
/**
 * Gpt Theme Customizer
 *
 * @package WordPress
 * @subpackage mominul
 * @since 1.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function gpt_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport          = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport   = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport  = 'postMessage';

	$wp_customize->selective_refresh->add_partial( 'blogname', array(
		'selector' => '.site-title a',
		'render_callback' => 'gpt_customize_partial_blogname',
	) );
	$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
		'selector' => '.site-description',
		'render_callback' => 'gpt_customize_partial_blogdescription',
	) );


	/**
	 * Header options.
	 */
	$wp_customize->add_section( 'gpt_header_options', array(
		'title'    => esc_html__( 'Header Settings', 'gpt-news' ),
		'priority' => 45, // After colors
	) );

	/**
	 * Mailchimp.
	 */
	$wp_customize->add_panel( 'gpt_mailchimp_setting', array(
		'title'    => esc_html__( 'Mailchimp Settings', 'gpt-news' ),
		'priority' => 45, // After colors
	) );


	// Search Icon Settings
	$wp_customize->add_setting( 'header_menu_search', array(
		'default'			=> true,
		'transport'         => 'refresh',
		'sanitize_callback'	=> 'gpt_sanitize_checkbox'
	) );

	/**
	 * Footer Panel
	 */
	$column_classes = array(
		'col-lg-1' => '1/12',
		'col-lg-2' => '2/12',
		'col-lg-3' => '3/12',
		'col-lg-4' => '4/12',
		'col-lg-5' => '5/12',
		'col-lg-6' => '6/12',
		'col-lg-7' => '7/12',
		'col-lg-8' => '8/12',
		'col-lg-9' => '9/12',
		'col-lg-10' => '10/12',
		'col-lg-11' => '11/12',
		'col-lg-12' => '12/12'
	);
	$wp_customize->add_panel( 'gpt_footer_settings', array(
		'title' => esc_html__( 'Footer Settings', 'gpt-news' ),
		'description' => esc_html__( 'Manage your footer widget position sizes and Copyright information.', 'gpt-news' ), // Include html tags such as <p>.
		'priority' => 160, // Mixed with top-level-section hierarchy.
	) );

	// Widget Settings
	for ($i=1; $i < 6; $i++) {
		$wp_customize->add_section( 'gpt_widget_area_' . $i , array(
			'title' => 'Widget Area - '. $i,
			'panel' => 'gpt_footer_settings',
		) );
		$wp_customize->add_setting( 'gpt_widget_area_' . $i . '_display', array(
			'default'			=> true,
			'transport'         => 'refresh',
			'sanitize_callback' => 'gpt_sanitize_checkbox',
		) );
		$wp_customize->add_control( 'gpt_widget_area_' . $i . '_display', array(
			'label'       => esc_html__( 'Display on site', 'gpt-news' ),
			'section'     => 'gpt_widget_area_'. $i,
			'type'        => 'checkbox',
		) );
		$wp_customize->add_setting( 'gpt_widget_area_' . $i . '_column', array(
			'default'           => 'col-lg-3',
			'transport' 		=> 'refress',
			'sanitize_callback' => 'gpt_sanitize_widget_columns',
		) );
		$wp_customize->add_control( 'gpt_widget_area_' . $i . '_column' , array(
			'label'       => esc_html__( 'Header Style', 'gpt-news' ),
			'section'     => 'gpt_widget_area_'. $i,
			'type'        => 'select',
			'choices'     => $column_classes
		) );
	}

	/**
	 * Mailchimp API
	 */
	$wp_customize->add_section( 'gpt_mchimp_api_settings', array(
		'title' => esc_html__( 'MailChimp API', 'gpt-news' ),
		'panel' => 'gpt_mailchimp_setting',
	) );

	$wp_customize->add_setting( 'gpt_mailchimp_api_key', array(
		'transport'			=> 'postMessage',
		'sanitize_callback'	=> 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'gpt_mailchimp_api_key', array(
		'type'		=> 'text',
		'label'		=> esc_html__( 'API Key', 'gpt-news' ),
		'description'	=> esc_html__( 'Enter the mailchimp api key to use newsletter form. You can get the api here: http://bit.ly/2Vh4Opr', 'gpt-news' ),
		'section'	=> 'gpt_mchimp_api_settings',
	) );

	$wp_customize->add_setting( 'gpt_mailchimp_api_list', array(
		'transport'			=> 'postMessage',
		'sanitize_callback'	=> 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'gpt_mailchimp_api_list', array(
		'type'		=> 'text',
		'label'		=> esc_html__( 'List ID', 'gpt-news' ),
		'description'	=> esc_html__( 'Enter the mailchimp list id. You can found list here: http://bit.ly/2GzQMa7', 'gpt-news' ),
		'section'	=> 'gpt_mchimp_api_settings',
	) );


}
add_action( 'customize_register', 'gpt_customize_register' );



/**
 * Sanitize the widget columns.
 */
function gpt_sanitize_widget_columns( $input ) {
	$valid = array(
		'col-lg-1',
		'col-lg-2',
		'col-lg-3',
		'col-lg-4',
		'col-lg-5',
		'col-lg-6',
		'col-lg-7',
		'col-lg-8',
		'col-lg-9',
		'col-lg-10',
		'col-lg-11',
		'col-lg-12'
	);

	if ( in_array( $input, $valid ) ) {
		return $input;
	}

	return 'col-lg-3';
}

/**
 * Sanitize the checkbox
 */
function gpt_sanitize_checkbox( $input ) {
	if ( $input == true ) {
		return true;
	}
	return false;
}

/**
 * Sanitize the footer copyright text.
 */
function gpt_sanitize_footer_copyright( $input ) {
	$output = '';
	if ( ! empty( $input ) ) {
		$output = $input;
	} else {
		$output = sprintf(
				esc_html__( '&copy; %1$s %2$s - Designed by %3$s', 'gpt-news' ),
				date( 'Y' ),
				get_bloginfo( 'name' ),
				'<a href="' . esc_url( 'https://www.pixelsigns.art/' ) . '">' . esc_html__( 'PixelSigns', 'gpt-news' ) . '</a>'
			);
	}

	return $output;
}


/**
 * Render the site title for the selective refresh partial.
 *
 * @since mominul 1.0
 * @see _gpt_customize_register()
 *
 * @return void
 */
function gpt_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @since mominul 1.0
 * @see gpt_customize_register()
 *
 * @return void
 */
function gpt_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Bind JS handlers to instantly live-preview changes.
 */
function gpt_customize_preview_js() {
	wp_enqueue_script( 'gpt-customize-preview', get_parent_theme_file_uri( '/assets/js/customizer.js' ), array( 'customize-preview' ), '1.0', true );
}
add_action( 'customize_preview_init', 'gpt_customize_preview_js' );
