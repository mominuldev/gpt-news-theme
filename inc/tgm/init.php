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

add_action( 'tgmpa_register', 'gpt_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 */
function gpt_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(


		array(
			'name'     => __('GPT News Core', 'mominul'),
			'slug'     => 'gpt-news-core',
			'source'   => 'https://demo.gptheme.com/plugins/gpt-news-core.zip',
            'version'  => '1.0.0',
			'required' => true,
		),

		array(
			'name'     => esc_attr__( 'Elementor', 'mominul' ),
			'slug'     => 'elementor',
			'required' => true,
		),

		array(
			'name'     => __('Contact Form 7', 'mominul'),
			'slug'     => 'contact-form-7',
			'required' => false,
		),

        array(
            'name'     => esc_attr__( 'Codestar Framework', 'mominul' ),
            'slug'     => 'codestar-framework',
            'source'   => ( 'https://demo.gptheme.com/plugins/codestar-framework.zip' ),
            'required' => true,
        ),

	);

	/*
	 * Config for TGMPA
	 */
	$config = array(
		'id'           => 'mominul',
		'default_path' => '',
		'menu'         => 'mominul-install-plugins',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );
}