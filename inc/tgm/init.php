<?php
/**
 * @see http://tgmpluginactivation.com/configuration/ for detailed documentation.
 *
 * @package    TGM-Plugin-Activation
 * @subpackage Gpt
 * @version    2.6.1 for parent theme corid for publication on ThemeForest
 * @author     Thomas Griffin, Gary Jones, Juliette Reinders Folmer
 * @copyright  Copyright (c) 2011, Thomas Griffin
 * @license    http://opensource.org/licenses/gpl-2.0.php GPL v2 or later
 * @link       https://github.com/TGMPA/TGM-Plugin-Activation
 */

/**
 * Include the TGM_Plugin_Activation class.
 */

require get_parent_theme_file_path( '/inc/tgm/class-tgm-plugin-activation.php' );

add_action( 'tgmpa_register', 'pps_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 */
function pps_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(


		array(
			'name'     => __('PPS Passport Core', 'pps-passport'),
			'slug'     => 'pps-passport-core',
			'source'   => 'https://demo.ppsheme.com/plugins/pps-passport-core.zip',
            'version'  => '1.0.0',
			'required' => true,
		),

		array(
			'name'     => esc_attr__( 'Elementor', 'pps-passport' ),
			'slug'     => 'elementor',
			'required' => true,
		),

		array(
			'name'     => __('Contact Form 7', 'pps-passport'),
			'slug'     => 'contact-form-7',
			'required' => false,
		),

        array(
            'name'     => esc_attr__( 'Codestar Framework', 'pps-passport' ),
            'slug'     => 'codestar-framework',
            'source'   => ( 'https://demo.ppsheme.com/plugins/codestar-framework.zip' ),
            'required' => true,
        ),

	);

	/*
	 * Config for TGMPA
	 */
	$config = array(
		'id'           => 'pps-passport',
		'default_path' => '',
		'menu'         => 'pps-install-plugins',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );
}