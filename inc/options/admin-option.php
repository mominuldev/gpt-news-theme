<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	// Set a unique slug-like ID
	$prefix = 'mp_theme_options';

	// Create options
	CSF::createOptions( $prefix, array(
		'menu_title'      => esc_html__( 'Theme Option', 'gpt-news' ),
		'menu_slug'       => 'gpt-theme-option',
		'framework_title' => esc_html__( 'Theme Settings', 'gpt-news' ),
		'theme'           => 'dark',
		'sticky_header'   => 'true',
		'menu_position' => 50,
	) );

	// General Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'General', 'gpt-news' ),
		'icon'   => 'fa fa-building-o',
		'fields' => array(
			array(
				'id'    => 'preloader_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Enable Preloader', 'gpt-news' ),
			),
			array(
				'id'         => 'preloader-type',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader type', 'gpt-news' ),
				'options'    => array(
					'text'   => esc_html__( 'Animated Text', 'gpt-news' ),
					'css'    => esc_html__( 'CSS', 'gpt-news' ),
					'images' => esc_html__( 'Media', 'gpt-news' )
				),
				'dependency' => array( 'preloader_switch', '==', true ),
			),
			array(
				'id'         => 'preloader-images',
				'type'       => 'media',
				'title'      => esc_html__( 'Preloader Image', 'gpt-news' ),
				'add_title'  => esc_html__( 'Upload Your Image', 'gpt-news' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|images' ),
			),
			array(
				'id'         => 'preloader',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader Style', 'gpt-news' ),
				'class'      => 'chosen',
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|css' ),
				'options'    => array(
					'ball-pulse-3'                 => esc_html__( 'Ball Pulse', 'gpt-news' ),
					'ball-grid-pulse-9'            => esc_html__( 'Ball Grid Pulse', 'gpt-news' ),
					'ball-clip-rotate-1'           => esc_html__( 'Ball Clip Rotate', 'gpt-news' ),
					'ball-clip-rotate-pulse-2'     => esc_html__( 'Ball Clip Rotate Pulse', 'gpt-news' ),
					'ball-clip-rotate-multiple-2'  => esc_html__( 'Ball Clip Rotate Multiple', 'gpt-news' ),
					'ball-pulse-rise-6'            => esc_html__( 'Ball Pulse Rise', 'gpt-news' ),
					'ball-pulse-sync-3'            => esc_html__( 'Ball Pulse Sync', 'gpt-news' ),
					'ball-beat-3'                  => esc_html__( 'Ball Beat', 'gpt-news' ),
					'ball-grid-beat-9'             => esc_html__( 'Ball Gird Beat', 'gpt-news' ),
					'ball-rotate-1'                => esc_html__( 'Ball Rotate', 'gpt-news' ),
					'ball-zig-zag-2'               => esc_html__( 'Ball Zig-Zag', 'gpt-news' ),
					'ball-zig-zag-deflect-2'       => esc_html__( 'Ball-Zig-Zag Deflect', 'gpt-news' ),
					'ball-triangle-path-3'         => esc_html__( 'Ball Triangle Path', 'gpt-news' ),
					'ball-scale-1'                 => esc_html__( 'Ball Scale', 'gpt-news' ),
					'ball-scale-ripple-1'          => esc_html__( 'Ball Scale Ripple', 'gpt-news' ),
					'ball-scale-multiple-3'        => esc_html__( 'Ball Scale Multiple', 'gpt-news' ),
					'ball-scale-ripple-multiple-3' => esc_html__( 'Ball Scale Ripple Multiple', 'gpt-news' ),
					'ball-spin-fade-loader-8'      => esc_html__( 'Ball Spin Fade Loader', 'gpt-news' ),
					'square-spin-1'                => esc_html__( 'Square Spin', 'gpt-news' ),
					'cube-transition-2'            => esc_html__( 'Cube Transition', 'gpt-news' ),
					'line-scale-5'                 => esc_html__( 'Line Scale', 'gpt-news' ),
					'line-scale-party-4'           => esc_html__( 'Line Scale Party', 'gpt-news' ),
					'line-scale-pulse-out-5'       => esc_html__( 'Line Scale Pulse Out', 'gpt-news' ),
					'line-scale-pulse-out-rapid-5' => esc_html__( 'Line Scale Pulse Out Rapid', 'gpt-news' ),
					'line-spin-fade-loader-8'      => esc_html__( 'Line Spin Fade Loader', 'gpt-news' ),
					'triangle-skew-spin-1'         => esc_html__( 'Triangle Skew Spin', 'gpt-news' ),
					'pacman-5'                     => esc_html__( 'Pacman', 'gpt-news' ),
					'semi-circle-spin-5'           => esc_html__( 'Semi Circle Spin', 'gpt-news' ),
				),
			),

			array(
				'id'         => 'preloader_text',
				'type'       => 'text',
				'title'      => esc_html__( 'Preloader Text', 'gpt-news' ),
				'default'    => esc_html__( 'ALL RESULT BD', 'gpt-news' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'         => 'preloader_color',
				'title'      => esc_html__( 'Preloader background', 'gpt-news' ),
				'type'       => 'color',
				'default'    => '#fff',
				'dependency' => array( 'preloader_switch', '==', 'true' ),
			),

			array(
				'id'         => 'preloader_text_color',
				'title'      => esc_html__( 'Text Color', 'gpt-news' ),
				'type'       => 'color',
				'output'     => array( '.loading span:after' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'    => 'back_to_top_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Show Back To Top', 'gpt-news' ),
			),

			// Button Style

			array(
				'id'     => 'back_button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'gpt-news' ),
				'des'    => esc_html__( 'Choose button color', 'gpt-news' ),
				'output' => array(
					'color' => '.return-to-top',
				)
			),

			array(
				'id'     => 'back_button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'gpt-news' ),
				'des'    => esc_html__( 'Choose button background color', 'gpt-news' ),
				'output' => array(
					'background' => '.return-to-top',
				)
			),

			array(
				'id'     => 'button_bg_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'gpt-news' ),
				'des'    => esc_html__( 'Choose button hover background color', 'gpt-news' ),
				'output' => array(
					'background' => '.return-to-top:hover:after',
				)
			),

			array(
				'id'       => 'custom-css',
				'type'     => 'code_editor',
				'title'    => 'CSS Editor',
				'settings' => array(
					'theme' => 'mbo',
					'mode'  => 'css',
				),
				'default'  => '.element{ color: #ffbc00; }',
			),



		)
	) );

	// Google Ads and analytics
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Google Ads', 'gpt-news' ),
		'icon'   => 'fa fa-google',
		'fields' => array(

			// Topbar Ad
			array(
				'id'      => 'header_ad',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Header Ad On/Off', 'gpt-news' ),
				'default' => false,
			),

			// Google Add
			array(
				'id'       => 'header_google_ad',
				'type'     => 'textarea',
				'title'    => 'Header Ad Code',
				'sanitize' => false,
				'dependency' => array( 'header_ad', '==', 'true' ),
			),


			// Blog Content google ad
			array(
				'id'       => 'google_ads_content',
				'type'     => 'textarea',
				'title'    => 'Blog Content Ad',
				'sanitize' => false,
			),


			//single_adsense
			array(
				'id'      => 'single_adsense',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Single Post Footer Adsense On/Off', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'       => 'single_adsense_code',
				'type'     => 'textarea',
				'title'    => 'Single Post Footer Adsense Code',
				'sanitize' => false,
				'dependency' => array( 'single_adsense', '==', 'true' ),
			),

			// Google Analytics
			array(
				'id'       => 'google_analytics_code',
				'type'     => 'TEXT',
				'title'    => 'Google Analytics Code',
				'sanitize' => false,
				'desc'     => __( 'Enter your Google Analytics code here. EX: G-XXXXXXXXXX', 'gpt-news' ),
			),
		)
	) );

	// Header Setting
	CSF::createSection( $prefix, array(
		'id'    => 'header_section',
		'title' => esc_html__( 'Header', 'gpt-news' ),
		'icon'  => 'fa fa-home',
	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Settings', 'gpt-news' ),
		'fields' => array(

			array(
				'id'      => 'header_sticky',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Header Sticky', 'gpt-news' ),
				'default' => false,
			),

			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Nav Right', 'gpt-news' ),
			),

			array(
				'id'      => 'header_search',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Search On/Off', 'gpt-news' ),
				'default' => false,
			),

			// Header Nav menu style
			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Menu Style', 'gpt-news' ),
			),

			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a',

				)
			),

			array(
				'id'     => 'menu_color_hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Hover Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a:hover',

				)
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.gpt-btn-link)'
			),

			array(
				'id'               => 'menu_color_hover_dropdown',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Dropdown Text Hover Color', 'gpt-news' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'output'           => array(
					'color' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.gpt-btn-link):hover',
				),
				'output_important' => true
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'gpt-news' ),
			),

			array(
				'id'     => 'sticky_menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output' => '.site-header.header-fixed.showed .site-main-menu li a, .site-header.mobile-header.showed .site-main-menu li a'
			),

			array(
				'id'        => 'sticky_menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'gpt-news' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
				'output'    => array(
					'color' => '.site-header.header-fixed.showed .site-main-menu li a:hover, .site-header.mobile-header.showed .site-main-menu li a:hover',

				)
			),

            array(
                'id'         => 'burger_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose burger menu color', 'gpt-news' ),
                'output'     => array(
                    'background' => '.site-header .gpt-hamburger .bar',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),
		),

	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Logo', 'gpt-news' ),
		'fields' => array(

			array(
				'id'        => 'main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'gpt-news' ),
			),

//			array(
//				'id'        => 'transparent_main_logo',
//				'type'      => 'media',
//				'title'     => esc_html__( 'Transparent Header Logo', 'gpt-news' ),
//				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
//				'desc'      => esc_html__( 'Upload your Logo for the header', 'gpt-news' ),
//			),

			array(
				'id'        => 'retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Retina Logo Upload @2x', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'gpt-news' ),
			),

			array(
				'id'        => 'sticky_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Logo', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
			),

			array(
				'id'        => 'retina_logo_sticky',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Retina Logo @2x', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload Retina logo for sticky header. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'gpt-news' ),
			),

//			array(
//				'type'    => 'heading',
//				'content' => esc_html__( 'Sidebar Menu Logo', 'gpt-news' ),
//			),
//
//			array(
//				'id'        => 'sidebar_logo',
//				'type'      => 'media',
//				'title'     => esc_html__( 'Sidebar Menu Logo', 'gpt-news' ),
//				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'gpt-news' ),
//				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
//			),


			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Mobile Logo', 'gpt-news' ),
			),

			array(
				'id'        => 'mobile_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Logo', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
			),

			array(
				'id'        => 'mobile_retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Retina Logo @2x', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
				'desc'      => esc_html__( 'Upload Retina logo for  mobile menu. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'gpt-news' ),
			),
		),

	) );


	//Footer Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'gpt-news' ),
		'icon'   => 'fa fa-support',
		'fields' => array(

			array(
				'id'      => 'footer_style',
				'type'    => 'select',
				'title'   => __( 'Select Footer Style', 'gpt-news' ),
				'options' => Gpt_Theme_Helper::get_footers_types(),
			),

			array(
				'id'      => 'footer_color',
				'type'    => 'button_set',
				'title'   => __( 'Switch Footer Dark or Light', 'gpt-news' ),
				'options' => array(
					'footer_dark'  => __( 'Dark', 'gpt-news' ),
					'footer_light' => __( 'Light', 'gpt-news' ),
				),
				'default' => 'footer_dark',
			),

			array(
				'id'      => 'footer_social',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Footer Social Show/Hide', 'gpt-news' ),
				'default' => true,
			),

			array(
				'id'          => 'footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top/Bottom', 'gpt-news' ),
				'output'      => '.site-footer .footer-wrapper',
				'output_mode' => 'padding', //
				'left'        => false,
				'right'       => false,
				'default'     => array(
					'unit' => 'px',
				),
			),

			array(
				'id'    => 'copyright_text',
				'type'  => 'textarea',
				'title' => esc_html__( 'Copyright Text', 'gpt-news' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Footer Style', 'gpt-news' ),
			),

			array(
				'id'          => 'footer_bg_color',
				'type'        => 'color',
				'title'       => esc_html__( 'Footer Background Color', 'gpt-news' ),
				'output'      => '.site-footer',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'footer-widget',
				'type'   => 'color',
				'title'  => esc_html__( 'Widget Title Color', 'gpt-news' ),
				'output' => '.site-footer .widget-title',
			),

			array(
				'id'                    => 'footer_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'gpt-news' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'gpt-news' ),
				'output'                => '.site-footer',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),

			array(
				'id'     => 'footer-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color', 'gpt-news' ),
				'output' => '.site-footer .widget ul li a',
			),
			array(
				'id'     => 'footer-link-hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color Hover', 'gpt-news' ),
				'output' => array(
					'background' => '.site-footer .widget_nav_menu .menu li a:after',
					'color'      => '.site-footer .widget ul li a:hover',
				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Social Link', 'gpt-news' ),
			),

			array(
				'id'     => 'footer-social-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Icon Color', 'gpt-news' ),
				'output' => '.site-footer .widget .footer-social-link li a',
			),
			array(
				'id'     => 'footer-social-link-border',
				'type'   => 'color',
				'title'  => esc_html__( 'Border Color', 'gpt-news' ),
				'output' => array(
					'border-color' => '.site-footer .widget .footer-social-link li a'
				)
			),
			array(
				'id'     => 'footer-link-hover-bg',
				'type'   => 'color',
				'title'  => esc_html__( 'Hover Background Color', 'gpt-news' ),
				'output' => array(
					'background'   => '.site-footer .widget .footer-social-link li a:hover',
					'border-color' => '.site-footer .widget .footer-social-link li a:hover'
				)
			),
			array(
				'id'               => 'footer-link-hover-icon',
				'type'             => 'color',
				'title'            => esc_html__( 'Hover Icon Color', 'gpt-news' ),
				'output'           => '.site-footer .widget .footer-social-link li a:hover',
				'output_important' => true
			),
		)
	) );

	//Page Header
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page Header', 'gpt-news' ),
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Page Header Settings', 'gpt-news' ),
			),
			array(
				'id'      => 'page_header',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Page Header Enable', 'gpt-news' ),
				'default' => true,
			),

			array(
				'id'     => 'header-background',
				'type'   => 'color',
				'title'  => 'Background Color',
				'output' => [
					'background' => '.page-header',
				]
			),

			array(
				'id'      => 'banner_height',
				'type'    => 'slider',
				'title'   => __( 'Banner Height', 'gpt-news' ),
				'min'     => 250,
				'max'     => 550,
				'step'    => 1,
				'unit'    => 'px',
				'default' => 240,
				'output'  => [
					'min-height' => '.page-header',
				]
			),

			array(
				'id'    => 'page_header_default_title',
				'type'  => 'text',
				'title' => esc_html__( 'Default Title', 'gpt-news' ),
				'desc'  => esc_html__( 'Set the default title for the page header', 'gpt-news' ),
			),
			array(
				'id'     => 'custom_title_typography',
				'type'   => 'typography',
				'title'  => esc_html__( 'Title Typography', 'gpt-news' ),
				'output' => array(
					'color' => '.page-banner .page-title-wrapper .page-title, .page-banner .saaspik_breadcrumbs li a',
				),
			),
			array(
				'id'                    => 'page_header_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'gpt-news' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'gpt-news' ),
				'output'                => '.page-header',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),
		)
	) );

	// Blog Setting
	CSF::createSection( $prefix, array(
		'id'    => 'blog_section',
		'title' => esc_html__( 'Blog', 'gpt-news' ),
		'icon'   => 'fa fa-file-text-o',
	) );

	// Blog Archive
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Archive', 'gpt-news' ),
		'parent' => 'blog_section',
		'fields' => array(

			// Blog Style
			array(
				'id'      => 'blog_style',
				'type'    => 'select',
				'title'   => esc_html__( 'Blog Style', 'gpt-news' ),
				'desc'    => esc_html__( 'Select blog style', 'gpt-news' ),
				'options' => array(
					'grid' => __('Grid', 'gpt-news'),
					'list' => __('List', 'gpt-news'),
					'masonry' => __('Masonry', 'gpt-news'),
				),
				'default' => 'grid',
			),

			array(
				'id'         => 'blog-masonry-column',
				'type'       => 'image_select',
				'title'      => esc_html__( 'Columns', 'gpt-news' ),
				'desc'       => esc_html__( 'Display number of post per row', 'gpt-news' ),
				'radio'      => true,
				'options'    => array(
					'6' => MP_THEME_URI . '/assets/images/layout/2cols.png',
					'4' => MP_THEME_URI . '/assets/images/layout/3cols.png',
				),
				'default'    => '6',
//				'dependency' => array( 'blog-style_masonry', '==', true ),
			),

			array(
				'id'      => 'blog_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'gpt-news' ),
				'radio'   => true,
				'options' => array(
					'left'       => MP_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => MP_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => MP_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'right',
			),

			array(
				'id'       => 'blog_sidebar_def_width',
				'type'     => 'button_set',
				'title'    => esc_html__( 'Blog Archive Sidebar Width', 'gpt-news' ),
				'options'  => array(
					'9' => '25%',
					'8' => '33%',
				),
				'default'  => '8',
				'required' => array( 'blog_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'       => 'blog_sidebar_gap',
				'type'     => 'select',
				'title'    => esc_html__( 'Blog Archive Sidebar Side Gap', 'gpt-news' ),
				'options'  => array(
					'def' => 'Default',
					'0'   => '0',
					'15'  => '15',
					'20'  => '20',
					'25'  => '25',
					'30'  => '30',
					'35'  => '35',
					'40'  => '40',
					'45'  => '45',
					'50'  => '50',
				),
				'default'  => '15',
				'required' => array( 'blog_sidebar_layout', '!=', 'none' ),
			),

			// Word Limit
			array(
				'id'      => 'blog_word_limit',
				'type'    => 'text',
				'title'   => esc_html__( 'Word Limit', 'gpt-news' ),
				'default' => '20',
			),

			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'gpt-news' ),
				'default' => false,
			),


			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'gpt-news' ),
				'default' => false,
			),

			// View Count
			array(
				'id'      => 'blog_list_meta_viewcount',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta view count?', 'gpt-news' ),
				'default' => false,
			),

		)
	) );

	//	Blog Single
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Single', 'gpt-news' ),
		'parent' => 'blog_section',
		'fields' => array(


			array(
				'id'      => 'single_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'gpt-news' ),
				'radio'   => true,
				'options' => array(
					'left'       => MP_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => MP_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => MP_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'right',
			),

			array(
				'id'       => 'single_sidebar_def_width',
				'type'     => 'button_set',
				'title'    => esc_html__( 'Sidebar Width', 'gpt-news' ),
				'options'  => array(
					'9' => '25%',
					'8' => '33%',
				),
				'default'  => '8',
				'required' => array( 'single_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'       => 'blog_sidebar_gap',
				'type'     => 'select',
				'title'    => esc_html__( 'Blog Sidebar Side Gap', 'gpt-news' ),
				'options'  => array(
					'def' => 'Default',
					'0'   => '0',
					'15'  => '15',
					'20'  => '20',
					'25'  => '25',
					'30'  => '30',
					'35'  => '35',
					'40'  => '40',
					'45'  => '45',
					'50'  => '50',
				),
				'default'  => '15',
				'required' => array( 'single_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'      => 'author_info',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Display Author Bio Box', 'gpt-news' ),
				'default' => false
			),

			array(
				'id'      => 'share_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Share On Post', 'gpt-news' ),
				'default' => false
			),

			//



			array(
				'id'      => 'blog_single_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'gpt-news' ),
				'default' => false,
			),

			// View Count
			array(
				'id'      => 'blog_single_meta_viewcount',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta view count?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'single_post_nav',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Post Navigation?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'single_related_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Related Post?', 'gpt-news' ),
				'default' => false,
			),

			array(
				'id'      => 'related_title',
				'type'    => 'text',
				'title'   => esc_html__( 'Related Post Title', 'gpt-news' ),
				'default' => __( 'Related Posts', 'gpt-news' ),
			),

		)
	) );

	// Page Layout Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page', 'gpt-news' ),
		'icon'   => 'fa fa-file-text-o',
		'fields' => array(

			array(
				'id'      => 'page_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'gpt-news' ),
				'radio'   => true,
				'options' => array(
					'left'       => MP_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => MP_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => MP_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'no-sidebar',
			),
		)
	) );

	// Portfolio Setting
	CSF::createSection( $prefix, array(
		'title'  => __( 'Project', 'gpt-news' ),
		'fields' => array(

			// A Switcher field
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header', 'gpt-news' ),
			),

			array(
				'id'      => 'wc-enable-page-title',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Page Header', 'gpt-news' ),
				'default' => true
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Page Title', 'gpt-news' ),
				'id'      => 'project-page-title',
				'default' => __( 'Case Details', 'gpt-news' ),
			),

			// Page Header Background
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header Background', 'gpt-news' ),
			),

			array(
				'id'      => 'project-page-header-bg',
				'type'    => 'background',
				'title'   => esc_html__( 'Page Header Background', 'gpt-news' ),
				'default' => array(
					'image'      => '',
					'repeat'     => 'no-repeat',
					'position'   => 'center center',
					'attachment' => 'fixed',
					'size'       => 'cover',
					'color'      => '#DDE6EB',
				),
				'output'  => array( '.single-project-details-banner' ),
			),


		)
	) );


	//Social Link
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Social Link', 'gpt-news' ),
		'icon'   => 'fa fa-globe',
		'desc'   => esc_html__( 'This social profiles will display in your whole site.', 'gpt-news' ),
		'fields' => array(

			array(
				'id'           => 'social_links',
				'type'         => 'group',
				'title'        => esc_html__( 'Social links', 'gpt-news' ),
				'desc'         => esc_html__( 'This social profiles will display in your whole site.', 'gpt-news' ),
				'button_title' => esc_html__( 'Add New', 'gpt-news' ),
				'fields'       => array(

					array(
						'id'    => 'name',
						'type'  => 'text',
						'title' => esc_html__( 'Name', 'gpt-news' ),
					),
					array(
						'id'    => 'url',
						'type'  => 'text',
						'title' => esc_html__( 'Url', 'gpt-news' )
					),
					array(
						'id'    => 'icon',
						'type'  => 'icon',
						'title' => esc_html__( 'Icon', 'gpt-news' )
					)

				),

				'default' => array(
					array(
						'name' => esc_html__( 'Facebook', 'gpt-news' ),
						'url'  => esc_url( 'http://facebook.com' ),
						'icon' => 'fab fa-facebook-f'
					),

					array(
						'name' => esc_html__( 'Twitter', 'gpt-news' ),
						'url'  => esc_url( 'http://twitter.com' ),
						'icon' => 'fab fa-twitter'
					),

					array(
						'name' => esc_html__( 'Dribbble', 'gpt-news' ),
						'url'  => esc_url( 'http://dribbble.com' ),
						'icon' => 'fab fa-dribbble'
					)

				),
				array(
					'type'    => 'notice',
					'class'   => 'info',
					'content' => esc_html__( 'This social profiles will display in your whole site.', 'gpt-news' ),
				),
			),
		)
	) );

	//Error Page
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( '404 Page', 'gpt-news' ),
		'icon'   => 'fa fa-exclamation',
		'fields' => array(

			array(
				'id'        => 'error_image',
				'type'      => 'media',
				'title'     => esc_html__( 'Image', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Error Title', 'gpt-news' ),
				'id'      => 'error_title',
				'default' => esc_html__( 'The page you’ re looking for fly away', 'gpt-news' ),
			),

			array(
				'type'    => 'textarea',
				'title'   => esc_html__( 'Description', 'gpt-news' ),
				'id'      => 'error_description',
				'default' => esc_html__( 'Tell us what you are looking for:', 'gpt-news' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Style', 'gpt-news' ),
			),

			array(
				'id'                    => 'error_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'gpt-news' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'gpt-news' ),
				'output'                => '.error_page',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),

			array(
				'id'     => 'error-text',
				'type'   => 'color',
				'title'  => esc_html__( 'Error Text Color', 'gpt-news' ),
				'output' => '.error_page .error-page-content .error-text',
			),

			array(
				'id'     => 'error-heading',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'gpt-news' ),
				'output' => '.error_page .error-page-content .error-title',
			),

			array(
				'id'     => 'error-content',
				'type'   => 'color',
				'title'  => esc_html__( 'Content Color', 'gpt-news' ),
				'output' => '.error_page .error-page-content p',
			),

		)
	) );

	//Typography
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Typography', 'gpt-news' ),
		'icon'   => 'fa fa-font',
		'fields' => array(
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Body Font Settings', 'gpt-news' ),
			),

			array(
				'id'      => 'body-font',
				'type'    => 'typography',
				'title'   => esc_html__( 'Body', 'gpt-news' ),
				'output'  => 'body',
				'default' => array(
					'unit' => 'px',
					'type' => 'google',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Heading Font Settings', 'gpt-news' ),
			),
			array(
				'id'      => 'heading-h1',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H1', 'gpt-news' ),
				'output'  => 'h1',
				'default' => array(
					'font-size' => '40',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h2',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H2', 'gpt-news' ),
				'output'  => 'h2',
				'default' => array(
					'font-size' => '32',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h3',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H3', 'gpt-news' ),
				'output'  => 'h3',
				'default' => array(
					'font-size' => '28',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h4',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H4', 'gpt-news' ),
				'output'  => 'h4',
				'default' => array(
					'font-size' => '24',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h5',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H5', 'gpt-news' ),
				'output'  => 'h5',
				'default' => array(
					'font-size' => '20',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),

			array(
				'id'      => 'heading-h6',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H6', 'gpt-news' ),
				'output'  => 'h6',
				'default' => array(
					'font-size' => '16',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),

		)
	) );

	//Color Scheme
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Color Scheme', 'gpt-news' ),
		'icon'   => 'fa fa-star',
		'icon'   => 'fa fa-paint-brush',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'General Color', 'gpt-news' ),
			),

			array(
				'id'     => 'body-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Color', 'gpt-news' ),
				'output' => 'body'
			),

			// Body BG Color
			array(
				'id'     => 'body-bg-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Background Color', 'gpt-news' ),
				'output' => 'body',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'main_heading-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'gpt-news' ),
				'output' => 'h1,h2,h3,h4,h5,h6, .blog-content .entry-title a',
			),

			array(
				'id'     => 'main_primary-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Primary Color', 'gpt-news' ),
				'desc'   => esc_html__( 'Main Color Scheme', 'gpt-news' ),
				'output' => array(
					'color' => 'a:hover, a:focus, a:active, .section-heading .section-title span, .gpt-testimonial__designation, .gpt-testimonial__avatar:before, .gpt-scroll-top-icon,
					.gpt-btn.btn-outline, .banner__social-links li a, .gpt-btn:hover',

					'background-color' => '.gpt-contact-info__icon, .gpt-service:hover .gpt-service__btn',

					'border-color' => '.gpt-btn, .gpt-btn.btn-outline, .gpt-btn.btn-outline:hover, .gpt-testimonial__control--prev:hover, .gpt-testimonial__control--next:hover, .gpt-service:hover,
					.gpt-service:hover .gpt-service__btn, .gpt-skill.gpt-skill--1:hover, .gpt-btn.btn-outline, .banner__social-links li a',

					'background' => '.gpt-testimonial__control--prev:hover, .gpt-testimonial__control--next:hover, .gpt-testimonial:hover .gpt-testimonial__avatar:before, .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active,
					.gpt-skill.gpt-skill--1:hover .gpt-skill__percent, .gpt-btn:before, .banner__social-links li a:hover',
					'stroke'            => '.gpt-scroll-top > svg.progress-circle path'
				),
			),

		)
	) );

	//Backup
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Backup', 'gpt-news' ),
		'icon'   => 'fa fa-download',
		'fields' => array(
			array(
				'type' => 'backup',
			),
		)
	) );
}