<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	// Set a unique slug-like ID
	$prefix = 'mp_theme_options';

	// Create options
	CSF::createOptions( $prefix, array(
		'menu_title'      => esc_html__( 'Theme Option', 'pps-passport' ),
		'menu_slug'       => 'pps-theme-option',
		'framework_title' => esc_html__( 'Theme Settings', 'pps-passport' ),
		'theme'           => 'dark',
		'sticky_header'   => 'true',
		'menu_position' => 50,
	) );

	// General Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'General', 'pps-passport' ),
		'icon'   => 'fa fa-building-o',
		'fields' => array(
			array(
				'id'    => 'preloader_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Enable Preloader', 'pps-passport' ),
			),
			array(
				'id'         => 'preloader-type',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader type', 'pps-passport' ),
				'options'    => array(
					'text'   => esc_html__( 'Animated Text', 'pps-passport' ),
					'images' => esc_html__( 'Media', 'pps-passport' )
				),
				'dependency' => array( 'preloader_switch', '==', true ),
			),
			array(
				'id'         => 'preloader-images',
				'type'       => 'media',
				'title'      => esc_html__( 'Preloader Image', 'pps-passport' ),
				'add_title'  => esc_html__( 'Upload Your Image', 'pps-passport' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|images' ),
			),

			array(
				'id'         => 'preloader_text',
				'type'       => 'text',
				'title'      => esc_html__( 'Preloader Text', 'pps-passport' ),
				'default'    => esc_html__( 'ALL RESULT BD', 'pps-passport' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'         => 'preloader_color',
				'title'      => esc_html__( 'Preloader background', 'pps-passport' ),
				'type'       => 'color',
				'default'    => '#fff',
				'dependency' => array( 'preloader_switch', '==', 'true' ),
			),

			array(
				'id'         => 'preloader_text_color',
				'title'      => esc_html__( 'Text Color', 'pps-passport' ),
				'type'       => 'color',
				'output'     => array( '.loading span:after' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'    => 'back_to_top_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Show Back To Top', 'pps-passport' ),
			),

			// Button Style

			array(
				'id'     => 'back_button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'pps-passport' ),
				'des'    => esc_html__( 'Choose button color', 'pps-passport' ),
				'output' => array(
					'color' => '.return-to-top',
				)
			),

			array(
				'id'     => 'back_button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'pps-passport' ),
				'des'    => esc_html__( 'Choose button background color', 'pps-passport' ),
				'output' => array(
					'background' => '.return-to-top',
				)
			),

			array(
				'id'     => 'button_bg_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'pps-passport' ),
				'des'    => esc_html__( 'Choose button hover background color', 'pps-passport' ),
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
		'title'  => esc_html__( 'Google Ads', 'pps-passport' ),
		'icon'   => 'fa fa-google',
		'fields' => array(

			// Topbar Ad
			array(
				'id'      => 'header_ad',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Header Ad On/Off', 'pps-passport' ),
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
				'title'   => esc_html__( 'Single Post Footer Adsense On/Off', 'pps-passport' ),
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
				'desc'     => __( 'Enter your Google Analytics code here. EX: G-XXXXXXXXXX', 'pps-passport' ),
			),
		)
	) );

	// Header Setting
	CSF::createSection( $prefix, array(
		'id'    => 'header_section',
		'title' => esc_html__( 'Header', 'pps-passport' ),
		'icon'  => 'fa fa-home',
	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Settings', 'pps-passport' ),
		'fields' => array(

			// Header Style
			array(
				'id'      => 'header_style',
				'type'    => 'select',
				'title'   => __( 'Select Header Style', 'pps-passport' ),
				'options' => [
					'header-one' => esc_html__( 'Header 1', 'pps-passport' ),
					'header-two' => esc_html__( 'Header 2', 'pps-passport' ),
					'header-three' => esc_html__( 'Header 3', 'pps-passport' ),
				],
				'default' => 'header-one',
				'desc'    => esc_html__( 'Select header style for your site.', 'pps-passport' ),
			),


			array(
				'id'      => 'header_sticky',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Header Sticky', 'pps-passport' ),
				'default' => false,
			),

			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Nav Right', 'pps-passport' ),
			),

			array(
				'id'      => 'header_search',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Search On/Off', 'pps-passport' ),
				'default' => false,
			),

			// Header Nav menu style
			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Menu Style', 'pps-passport' ),
			),

			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a',

				)
			),

			array(
				'id'     => 'menu_color_hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Hover Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a:hover',

				)
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.pps-btn-link)'
			),

			array(
				'id'               => 'menu_color_hover_dropdown',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Dropdown Text Hover Color', 'pps-passport' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'output'           => array(
					'color' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.pps-btn-link):hover',
				),
				'output_important' => true
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'pps-passport' ),
			),

			array(
				'id'     => 'sticky_menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output' => '.site-header.header-fixed.showed .site-main-menu li a, .site-header.mobile-header.showed .site-main-menu li a'
			),

			array(
				'id'        => 'sticky_menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'pps-passport' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
				'output'    => array(
					'color' => '.site-header.header-fixed.showed .site-main-menu li a:hover, .site-header.mobile-header.showed .site-main-menu li a:hover',

				)
			),

            array(
                'id'         => 'burger_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose burger menu color', 'pps-passport' ),
                'output'     => array(
                    'background' => '.site-header .pps-hamburger .bar',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),
		),

	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Logo', 'pps-passport' ),
		'fields' => array(

			array(
				'id'        => 'main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'pps-passport' ),
			),

//			array(
//				'id'        => 'transparent_main_logo',
//				'type'      => 'media',
//				'title'     => esc_html__( 'Transparent Header Logo', 'pps-passport' ),
//				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
//				'desc'      => esc_html__( 'Upload your Logo for the header', 'pps-passport' ),
//			),

			array(
				'id'        => 'retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Retina Logo Upload @2x', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'pps-passport' ),
			),

			array(
				'id'        => 'sticky_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Logo', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
			),

			array(
				'id'        => 'retina_logo_sticky',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Retina Logo @2x', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload Retina logo for sticky header. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'pps-passport' ),
			),

//			array(
//				'type'    => 'heading',
//				'content' => esc_html__( 'Sidebar Menu Logo', 'pps-passport' ),
//			),
//
//			array(
//				'id'        => 'sidebar_logo',
//				'type'      => 'media',
//				'title'     => esc_html__( 'Sidebar Menu Logo', 'pps-passport' ),
//				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'pps-passport' ),
//				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
//			),


			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Mobile Logo', 'pps-passport' ),
			),

			array(
				'id'        => 'mobile_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Logo', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
			),

			array(
				'id'        => 'mobile_retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Retina Logo @2x', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
				'desc'      => esc_html__( 'Upload Retina logo for  mobile menu. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'pps-passport' ),
			),
		),

	) );


	//Footer Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'pps-passport' ),
		'icon'   => 'fa fa-support',
		'fields' => array(

			array(
				'id'      => 'footer_color',
				'type'    => 'button_set',
				'title'   => __( 'Switch Footer Dark or Light', 'pps-passport' ),
				'options' => array(
					'footer_dark'  => __( 'Dark', 'pps-passport' ),
					'footer_light' => __( 'Light', 'pps-passport' ),
				),
				'default' => 'footer_dark',
			),

			array(
				'id'      => 'footer_social',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Footer Social Show/Hide', 'pps-passport' ),
				'default' => true,
			),

			array(
				'id'          => 'footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top/Bottom', 'pps-passport' ),
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
				'title' => esc_html__( 'Copyright Text', 'pps-passport' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Footer Style', 'pps-passport' ),
			),

			array(
				'id'          => 'footer_bg_color',
				'type'        => 'color',
				'title'       => esc_html__( 'Footer Background Color', 'pps-passport' ),
				'output'      => '.site-footer',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'footer-widget',
				'type'   => 'color',
				'title'  => esc_html__( 'Widget Title Color', 'pps-passport' ),
				'output' => '.site-footer .widget-title',
			),

			array(
				'id'                    => 'footer_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'pps-passport' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'pps-passport' ),
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
				'title'  => esc_html__( 'Link Color', 'pps-passport' ),
				'output' => '.site-footer .widget ul li a',
			),
			array(
				'id'     => 'footer-link-hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color Hover', 'pps-passport' ),
				'output' => array(
					'background' => '.site-footer .widget_nav_menu .menu li a:after',
					'color'      => '.site-footer .widget ul li a:hover',
				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Social Link', 'pps-passport' ),
			),

			array(
				'id'     => 'footer-social-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Icon Color', 'pps-passport' ),
				'output' => '.site-footer .widget .footer-social-link li a',
			),
			array(
				'id'     => 'footer-social-link-border',
				'type'   => 'color',
				'title'  => esc_html__( 'Border Color', 'pps-passport' ),
				'output' => array(
					'border-color' => '.site-footer .widget .footer-social-link li a'
				)
			),
			array(
				'id'     => 'footer-link-hover-bg',
				'type'   => 'color',
				'title'  => esc_html__( 'Hover Background Color', 'pps-passport' ),
				'output' => array(
					'background'   => '.site-footer .widget .footer-social-link li a:hover',
					'border-color' => '.site-footer .widget .footer-social-link li a:hover'
				)
			),
			array(
				'id'               => 'footer-link-hover-icon',
				'type'             => 'color',
				'title'            => esc_html__( 'Hover Icon Color', 'pps-passport' ),
				'output'           => '.site-footer .widget .footer-social-link li a:hover',
				'output_important' => true
			),
		)
	) );

	//Page Header
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page Header', 'pps-passport' ),
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Page Header Settings', 'pps-passport' ),
			),
			array(
				'id'      => 'page_header',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Page Header Enable', 'pps-passport' ),
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
				'title'   => __( 'Banner Height', 'pps-passport' ),
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
				'title' => esc_html__( 'Default Title', 'pps-passport' ),
				'desc'  => esc_html__( 'Set the default title for the page header', 'pps-passport' ),
			),
			array(
				'id'     => 'custom_title_typography',
				'type'   => 'typography',
				'title'  => esc_html__( 'Title Typography', 'pps-passport' ),
				'output' => array(
					'color' => '.page-banner .page-title-wrapper .page-title, .page-banner .saaspik_breadcrumbs li a',
				),
			),
			array(
				'id'                    => 'page_header_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'pps-passport' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'pps-passport' ),
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
		'title' => esc_html__( 'Blog', 'pps-passport' ),
		'icon'   => 'fa fa-file-text-o',
	) );

	// Blog Archive
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Archive', 'pps-passport' ),
		'parent' => 'blog_section',
		'fields' => array(

			// Blog Style
			array(
				'id'      => 'blog_style',
				'type'    => 'select',
				'title'   => esc_html__( 'Blog Style', 'pps-passport' ),
				'desc'    => esc_html__( 'Select blog style', 'pps-passport' ),
				'options' => array(
					'grid' => __('Grid', 'pps-passport'),
					'list' => __('List', 'pps-passport'),
//					'masonry' => __('Masonry', 'pps-passport'),
				),
				'default' => 'grid',
			),

			array(
				'id'         => 'blog-masonry-column',
				'type'       => 'image_select',
				'title'      => esc_html__( 'Columns', 'pps-passport' ),
				'desc'       => esc_html__( 'Display number of post per row', 'pps-passport' ),
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
				'title'   => esc_html__( 'Layout', 'pps-passport' ),
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
				'title'    => esc_html__( 'Blog Archive Sidebar Width', 'pps-passport' ),
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
				'title'    => esc_html__( 'Blog Archive Sidebar Side Gap', 'pps-passport' ),
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
				'title'   => esc_html__( 'Word Limit', 'pps-passport' ),
				'default' => '20',
			),


			array(
				'id'      => 'blog_title_font_size',
				'type'    => 'typography',
				'title'   => __( 'Title Typography', 'pps-passport' ),
//				'default' => array(
//					'color'       => '#ffbc00',
//					'font-family' => 'Open Sans',
//					'font-size'   => '16',
//					'line-height' => '20',
//					'unit'        => 'px',
//					'type'        => 'google',
//				),
				'output'  => array( '.blog-posts .blog-post-list .entry-title, .blog-post-list .entry-title'),
			),

			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'pps-passport' ),
				'default' => false,
			),


			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'pps-passport' ),
				'default' => false,
			),

			// View Count
			array(
				'id'      => 'blog_list_meta_viewcount',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta view count?', 'pps-passport' ),
				'default' => false,
			),

		)
	) );

	//	Blog Single
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Single', 'pps-passport' ),
		'parent' => 'blog_section',
		'fields' => array(


			array(
				'id'      => 'single_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'pps-passport' ),
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
				'title'    => esc_html__( 'Sidebar Width', 'pps-passport' ),
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
				'title'    => esc_html__( 'Blog Sidebar Side Gap', 'pps-passport' ),
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
				'title'   => esc_html__( 'Display Author Bio Box', 'pps-passport' ),
				'default' => false
			),

			array(
				'id'      => 'share_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Share On Post', 'pps-passport' ),
				'default' => false
			),

			//



			array(
				'id'      => 'blog_single_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'pps-passport' ),
				'default' => false,
			),

			// View Count
			array(
				'id'      => 'blog_single_meta_viewcount',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta view count?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_single_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'single_post_nav',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Post Navigation?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'single_related_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Related Post?', 'pps-passport' ),
				'default' => false,
			),

			array(
				'id'      => 'related_title',
				'type'    => 'text',
				'title'   => esc_html__( 'Related Post Title', 'pps-passport' ),
				'default' => __( 'Related Posts', 'pps-passport' ),
			),

		)
	) );

	// Page Layout Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page', 'pps-passport' ),
		'icon'   => 'fa fa-file-text-o',
		'fields' => array(

			array(
				'id'      => 'page_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'pps-passport' ),
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
		'title'  => __( 'Project', 'pps-passport' ),
		'fields' => array(

			// A Switcher field
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header', 'pps-passport' ),
			),

			array(
				'id'      => 'wc-enable-page-title',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Page Header', 'pps-passport' ),
				'default' => true
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Page Title', 'pps-passport' ),
				'id'      => 'project-page-title',
				'default' => __( 'Case Details', 'pps-passport' ),
			),

			// Page Header Background
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header Background', 'pps-passport' ),
			),

			array(
				'id'      => 'project-page-header-bg',
				'type'    => 'background',
				'title'   => esc_html__( 'Page Header Background', 'pps-passport' ),
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
		'title'  => esc_html__( 'Social Link', 'pps-passport' ),
		'icon'   => 'fa fa-globe',
		'desc'   => esc_html__( 'This social profiles will display in your whole site.', 'pps-passport' ),
		'fields' => array(

			array(
				'id'           => 'social_links',
				'type'         => 'group',
				'title'        => esc_html__( 'Social links', 'pps-passport' ),
				'desc'         => esc_html__( 'This social profiles will display in your whole site.', 'pps-passport' ),
				'button_title' => esc_html__( 'Add New', 'pps-passport' ),
				'fields'       => array(

					array(
						'id'    => 'name',
						'type'  => 'text',
						'title' => esc_html__( 'Name', 'pps-passport' ),
					),
					array(
						'id'    => 'url',
						'type'  => 'text',
						'title' => esc_html__( 'Url', 'pps-passport' )
					),
					array(
						'id'    => 'icon',
						'type'  => 'icon',
						'title' => esc_html__( 'Icon', 'pps-passport' )
					)

				),

				'default' => array(
					array(
						'name' => esc_html__( 'Facebook', 'pps-passport' ),
						'url'  => esc_url( 'http://facebook.com' ),
						'icon' => 'fab fa-facebook-f'
					),

					array(
						'name' => esc_html__( 'Twitter', 'pps-passport' ),
						'url'  => esc_url( 'http://twitter.com' ),
						'icon' => 'fab fa-twitter'
					),

					array(
						'name' => esc_html__( 'Dribbble', 'pps-passport' ),
						'url'  => esc_url( 'http://dribbble.com' ),
						'icon' => 'fab fa-dribbble'
					)

				),
				array(
					'type'    => 'notice',
					'class'   => 'info',
					'content' => esc_html__( 'This social profiles will display in your whole site.', 'pps-passport' ),
				),
			),
		)
	) );

	//Error Page
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( '404 Page', 'pps-passport' ),
		'icon'   => 'fa fa-exclamation',
		'fields' => array(

			array(
				'id'        => 'error_image',
				'type'      => 'media',
				'title'     => esc_html__( 'Image', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Error Title', 'pps-passport' ),
				'id'      => 'error_title',
				'default' => esc_html__( 'The page you’ re looking for fly away', 'pps-passport' ),
			),

			array(
				'type'    => 'textarea',
				'title'   => esc_html__( 'Description', 'pps-passport' ),
				'id'      => 'error_description',
				'default' => esc_html__( 'Tell us what you are looking for:', 'pps-passport' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Style', 'pps-passport' ),
			),

			array(
				'id'                    => 'error_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'pps-passport' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'pps-passport' ),
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
				'title'  => esc_html__( 'Error Text Color', 'pps-passport' ),
				'output' => '.error_page .error-page-content .error-text',
			),

			array(
				'id'     => 'error-heading',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'pps-passport' ),
				'output' => '.error_page .error-page-content .error-title',
			),

			array(
				'id'     => 'error-content',
				'type'   => 'color',
				'title'  => esc_html__( 'Content Color', 'pps-passport' ),
				'output' => '.error_page .error-page-content p',
			),

		)
	) );

	//Typography
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Typography', 'pps-passport' ),
		'icon'   => 'fa fa-font',
		'fields' => array(
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Body Font Settings', 'pps-passport' ),
			),

			array(
				'id'      => 'body-font',
				'type'    => 'typography',
				'title'   => esc_html__( 'Body', 'pps-passport' ),
				'output'  => 'body',
				'default' => array(
					'unit' => 'px',
					'type' => 'google',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Heading Font Settings', 'pps-passport' ),
			),
			array(
				'id'      => 'heading-h1',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H1', 'pps-passport' ),
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
				'title'   => esc_html__( 'Heading H2', 'pps-passport' ),
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
				'title'   => esc_html__( 'Heading H3', 'pps-passport' ),
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
				'title'   => esc_html__( 'Heading H4', 'pps-passport' ),
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
				'title'   => esc_html__( 'Heading H5', 'pps-passport' ),
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
				'title'   => esc_html__( 'Heading H6', 'pps-passport' ),
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
		'title'  => esc_html__( 'Color Scheme', 'pps-passport' ),
		'icon'   => 'fa fa-paint-brush',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'General Color', 'pps-passport' ),
			),

			array(
				'id'     => 'body-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Color', 'pps-passport' ),
				'output' => 'body'
			),

			// Body BG Color
			array(
				'id'     => 'body-bg-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Background Color', 'pps-passport' ),
				'output' => 'body',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'main_heading-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'pps-passport' ),
				'output' => 'h1,h2,h3,h4,h5,h6, .blog-content .entry-title a',
			),

			array(
				'id'     => 'main_primary-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Primary Color', 'pps-passport' ),
				'desc'   => esc_html__( 'Main Color Scheme', 'pps-passport' ),
				'output' => array(
					'color' => 'a:hover, a:focus, a:active, .section-heading .section-title span, .pps-testimonial__designation, .pps-testimonial__avatar:before, .pps-scroll-top-icon, .header-three ul.pps-social-link li a:hover,
					            .sidebar .widget ul.wp-block-categories li a:hover, .sidebar .widget ul.wp-block-archives li a:hover, .sidebar .widget ul:not(.wp-block-latest-posts) li a:hover, .sidebar .widget.widget_archive ul.wp-block-categories li a:hover, 
					            .sidebar .widget.widget_archive ul.wp-block-archives li a:hover, .sidebar .widget.widget_archive ul:not(.wp-block-latest-posts) li a:hover, .site-footer .site-info .copyright p a:hover, .single-post-nav:hover .post-title,
					            ul.entry-meta li a:hover, .pps-btn.btn-outline, .banner__social-links li a, .pps-btn:hover, .header-three .header-menu .site-main-menu > li > a:hover, .widget .wp-block-latest-posts li > a:hover, .blog-hero-item .entry-meta li a:hover',

					'background-color' => '.pps-contact-info__icon, .pps-service:hover .pps-service__btn, .comment-form #submit',

					'border-color' => '.pps-btn, .pps-btn.btn-outline, .pps-btn.btn-outline:hover, .pps-testimonial__control--prev:hover, .pps-testimonial__control--next:hover, .pps-service:hover, .blog-post-list .read-more .pps-btn.btn-sm:hover ,
										.pps-service:hover .pps-service__btn, .pps-skill.pps-skill--1:hover, .pps-btn.btn-outline, .banner__social-links li a, #post-pagination .page-numbers li a:hover, #post-pagination .page-numbers li a .current, 
										#post-pagination .page-numbers li span:hover, #post-pagination .page-numbers li span .current, #post-pagination .page-numbers li a.current, #post-pagination .page-numbers li span.current, .comment-form #submit',

					'background' => '.pps-testimonial__control--prev:hover, .pps-testimonial__control--next:hover, .pps-testimonial:hover .pps-testimonial__avatar:before, .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active,
									.pps-post-category a, .wp-block-search .wp-block-search__button, .blog-grid--three a.pps-blog__meta-category-two, #post-pagination .page-numbers li a.current, #post-pagination .page-numbers li span.current,
									.pps-skill.pps-skill--1:hover .pps-skill__percent, .pps-btn:before, .banner__social-links li a:hover, #post-pagination .page-numbers li a:hover, #post-pagination .page-numbers li a .current, #post-pagination .page-numbers li span:hover, #post-pagination .page-numbers li span .current',
					'stroke'            => '.pps-scroll-top > svg.progress-circle path',
					'fill' 			=> '.header-search-form button svg path'
				),
			),

		)
	) );

	//Backup
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Backup', 'pps-passport' ),
		'icon'   => 'fa fa-download',
		'fields' => array(
			array(
				'type' => 'backup',
			),
		)
	) );
}