<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	// Set a unique slug-like ID
	$prefix = 'mp_theme_options';

	// Create options
	CSF::createOptions( $prefix, array(
		'menu_title'      => esc_html__( 'Theme Option', 'mominul' ),
		'menu_slug'       => 'mominul-theme-option',
		'framework_title' => esc_html__( 'Theme Settings', 'mominul' ),
		'theme'           => 'dark',
		'sticky_header'   => 'true',
		'menu_position' => 50,
	) );

	// General Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'General', 'mominul' ),
		'icon'   => 'fa fa-building-o',
		'fields' => array(
			array(
				'id'    => 'preloader_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Enable Preloader', 'mominul' ),
			),
			array(
				'id'         => 'preloader-type',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader type', 'mominul' ),
				'options'    => array(
					'text'   => esc_html__( 'Animated Text', 'mominul' ),
					'css'    => esc_html__( 'CSS', 'mominul' ),
					'images' => esc_html__( 'Media', 'mominul' )
				),
				'dependency' => array( 'preloader_switch', '==', true ),
			),
			array(
				'id'         => 'preloader-images',
				'type'       => 'media',
				'title'      => esc_html__( 'Preloader Image', 'mominul' ),
				'add_title'  => esc_html__( 'Upload Your Image', 'mominul' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|images' ),
			),
			array(
				'id'         => 'preloader',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader Style', 'mominul' ),
				'class'      => 'chosen',
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|css' ),
				'options'    => array(
					'ball-pulse-3'                 => esc_html__( 'Ball Pulse', 'mominul' ),
					'ball-grid-pulse-9'            => esc_html__( 'Ball Grid Pulse', 'mominul' ),
					'ball-clip-rotate-1'           => esc_html__( 'Ball Clip Rotate', 'mominul' ),
					'ball-clip-rotate-pulse-2'     => esc_html__( 'Ball Clip Rotate Pulse', 'mominul' ),
					'ball-clip-rotate-multiple-2'  => esc_html__( 'Ball Clip Rotate Multiple', 'mominul' ),
					'ball-pulse-rise-6'            => esc_html__( 'Ball Pulse Rise', 'mominul' ),
					'ball-pulse-sync-3'            => esc_html__( 'Ball Pulse Sync', 'mominul' ),
					'ball-beat-3'                  => esc_html__( 'Ball Beat', 'mominul' ),
					'ball-grid-beat-9'             => esc_html__( 'Ball Gird Beat', 'mominul' ),
					'ball-rotate-1'                => esc_html__( 'Ball Rotate', 'mominul' ),
					'ball-zig-zag-2'               => esc_html__( 'Ball Zig-Zag', 'mominul' ),
					'ball-zig-zag-deflect-2'       => esc_html__( 'Ball-Zig-Zag Deflect', 'mominul' ),
					'ball-triangle-path-3'         => esc_html__( 'Ball Triangle Path', 'mominul' ),
					'ball-scale-1'                 => esc_html__( 'Ball Scale', 'mominul' ),
					'ball-scale-ripple-1'          => esc_html__( 'Ball Scale Ripple', 'mominul' ),
					'ball-scale-multiple-3'        => esc_html__( 'Ball Scale Multiple', 'mominul' ),
					'ball-scale-ripple-multiple-3' => esc_html__( 'Ball Scale Ripple Multiple', 'mominul' ),
					'ball-spin-fade-loader-8'      => esc_html__( 'Ball Spin Fade Loader', 'mominul' ),
					'square-spin-1'                => esc_html__( 'Square Spin', 'mominul' ),
					'cube-transition-2'            => esc_html__( 'Cube Transition', 'mominul' ),
					'line-scale-5'                 => esc_html__( 'Line Scale', 'mominul' ),
					'line-scale-party-4'           => esc_html__( 'Line Scale Party', 'mominul' ),
					'line-scale-pulse-out-5'       => esc_html__( 'Line Scale Pulse Out', 'mominul' ),
					'line-scale-pulse-out-rapid-5' => esc_html__( 'Line Scale Pulse Out Rapid', 'mominul' ),
					'line-spin-fade-loader-8'      => esc_html__( 'Line Spin Fade Loader', 'mominul' ),
					'triangle-skew-spin-1'         => esc_html__( 'Triangle Skew Spin', 'mominul' ),
					'pacman-5'                     => esc_html__( 'Pacman', 'mominul' ),
					'semi-circle-spin-5'           => esc_html__( 'Semi Circle Spin', 'mominul' ),
				),
			),

			array(
				'id'         => 'preloader_text',
				'type'       => 'text',
				'title'      => esc_html__( 'Preloader Text', 'mominul' ),
				'default'    => esc_html__( 'POLLIX', 'mominul' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'         => 'preloader_color',
				'title'      => esc_html__( 'Preloader background', 'mominul' ),
				'type'       => 'color',
				'default'    => '#fff',
				'dependency' => array( 'preloader_switch', '==', 'true' ),
			),

			array(
				'id'         => 'preloader_text_color',
				'title'      => esc_html__( 'Text Color', 'mominul' ),
				'type'       => 'color',
				'output'     => array( '.loading span:after' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'      => 'smooth_scroll',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Enable/Disable Smooth Scroll', 'mominul' ),
				'default' => false
			),

			array(
				'id'    => 'back_to_top_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Show Back To Top', 'mominul' ),
			),

			// Button Style

			array(
				'id'     => 'back_button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button color', 'mominul' ),
				'output' => array(
					'color' => '.return-to-top',
				)
			),

			array(
				'id'     => 'back_button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button background color', 'mominul' ),
				'output' => array(
					'background' => '.return-to-top',
				)
			),

			array(
				'id'     => 'button_bg_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button hover background color', 'mominul' ),
				'output' => array(
					'background' => '.return-to-top:hover:after',
				)
			),

			// Enable Body Background and line
			array(
				'id'      => 'body_bg_line',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Body Background and Line', 'mominul' ),
				'default' => false,
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

	// Header Setting
	CSF::createSection( $prefix, array(
		'id'    => 'header_section',
		'title' => esc_html__( 'Header', 'mominul' ),
		'icon'  => 'fa fa-home',
	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Settings', 'mominul' ),
		'fields' => array(

			// Header Style
//			array(
//				'id'      => 'header_layout',
//				'type'    => 'select',
//				'title'   => esc_html__( 'Header Style', 'mominul' ),
//				'desc'    => esc_html__( 'Select header style', 'mominul' ),
//				'options' => array(
//					'default' => __('Header Default', 'mominul'),
//					'canvas' => __('Header Canvas', 'mominul')
//				)
//			),

			array(
				'id'      => 'header_sticky',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Header Sticky', 'mominul' ),
				'default' => false,
			),

//			array(
//				'id'      => 'transparent_menu',
//				'type'    => 'switcher',
//				'title'   => esc_html__( 'Transparent Menu', 'mominul' ),
//				'default' => false,
//				'desc'    => esc_html__( 'Enable transparent menu', 'mominul' ),
//				'dependency' => array( 'header_layout', '==', 'default' ),
//			),

//			array(
//				'id'         => 'header_color',
//				'type'       => 'button_set',
//				'title'      => __( 'Transparent Header Color', 'mominul' ),
//				'options'    => array(
//					'header_dark'  => __( 'Dark (For light background)', 'mominul' ),
//					'header_light' => __( 'Light (For dark Background)', 'mominul' ),
//				),
//				'default'    => 'header_light',
//				'dependency' => array( 'transparent_menu', '==', 'true' ),
//			),

//			array(
//				'type'    => 'text',
//				'title'   => esc_html__( 'Responsive Menu', 'mominul' ),
//				'id'      => 'mobile_resolution',
//				'default' => '992',
//				'desc'    => esc_html__( 'Responsive Menu Resolution', 'mominul' ),
//				'dependency' => array( 'header_layout', '==', 'default' ),
//			),

		// Ad
			array(
				'id'      => 'header_ad',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Header Ad On/Off', 'mominul' ),
				'default' => false,
			),

			// Google Add
			array(
				'id'       => 'header_google_ad',
				'type'     => 'code_editor',
				'title'    => 'HTML Editor',
				'sanitize' => false,
				'dependency' => array( 'header_ad', '==', 'true' ),
			),


			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Nav Right', 'mominul' ),
			),

			array(
				'id'      => 'header_search',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Search On/Off', 'mominul' ),
				'default' => false,
			),

			// Canvas Menu
			array(
				'id'      => 'canvas_menu',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Canvas Menu On/Off', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'nav_btn',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Button On/Off', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'button_label',
				'type'    => 'text',
				'title'   => esc_html__( 'Button Label', 'mominul' ),
				'default' => __( 'Let’s Talk', 'mominul' ),
				'dependency' => array( 'nav_btn', '==', 'true' ),
			),

			array(
				'id'      => 'button_link',
				'type'    => 'text',
				'title'   => esc_html__( 'Button Link', 'mominul' ),
				'default' => '#',
				'dependency' => array( 'nav_btn', '==', 'true' ),
			),

			// Button Style
			array(
				'id'     => 'button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button color', 'mominul' ),
				'output' => array(
					'color' => '.site-header .gpt-btn',
				)
			),

			array(
				'id'     => 'button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button background color', 'mominul' ),
				'output' => array(
					'background-color' => '.site-header .gpt-btn',
				)
			),

			array(
				'id'     => 'button_border',
				'type'   => 'border',
				'title'  => __( 'Button Border', 'mominul' ),
				'output' => array( '.site-header .gpt-btn' ),
			),

			array(
				'id'     => 'btn-border-radius',
				'type'   => 'number',
				'title'  => __( 'Button Border Radius', 'mominul' ),
				'unit'   => 'px',
				'output' => [
					'border-radius' => '.site-header .gpt-btn',
				],
			),

			array(
				'id'     => 'button_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button color', 'mominul' ),
				'output' => array(
					'color' => '.site-header .gpt-btn:hover',
				)
			),

			array(
				'id'     => 'button_hover_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'mominul' ),
				'des'    => esc_html__( 'Choose button background color', 'mominul' ),
				'output' => array(
					'background-color' => '.site-header .gpt-btn:hover',
				)
			),

			array(
				'id'     => 'button_button_hover',
				'type'   => 'border',
				'title'  => __( 'Button Hover Border', 'mominul' ),
				'output' => array( '.site-header .gpt-btn:hover' ),
			),

			// Header Nav menu style
			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Menu Style', 'mominul' ),
			),

			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'mominul' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'mominul' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a',

				)
			),

			array(
				'id'     => 'menu_color_hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Hover Color', 'mominul' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'mominul' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a:hover',

				)
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Color', 'mominul' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'mominul' ),
				'output' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.gpt-btn-link)'
			),

			array(
				'id'               => 'menu_color_hover_dropdown',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Dropdown Text Hover Color', 'mominul' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'mominul' ),
				'output'           => array(
					'color' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.gpt-btn-link):hover',
				),
				'output_important' => true
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'mominul' ),
			),

			array(
				'id'     => 'sticky_menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'mominul' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'mominul' ),
				'output' => '.site-header.header-fixed.showed .site-main-menu li a, .site-header.mobile-header.showed .site-main-menu li a'
			),

			array(
				'id'        => 'sticky_menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'mominul' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'output'    => array(
					'color' => '.site-header.header-fixed.showed .site-main-menu li a:hover, .site-header.mobile-header.showed .site-main-menu li a:hover',

				)
			),

            array(
                'id'         => 'burger_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'mominul' ),
                'des'        => esc_html__( 'Choose burger menu color', 'mominul' ),
                'output'     => array(
                    'background' => '.site-header .gpt-hamburger .bar',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),
		),

	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Logo', 'mominul' ),
		'fields' => array(

			array(
				'id'        => 'main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'mominul' ),
			),

			array(
				'id'        => 'transparent_main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Transparent Header Logo', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'mominul' ),
			),

			array(
				'id'        => 'retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Retina Logo Upload @2x', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'mominul' ),
			),

			array(
				'id'        => 'sticky_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Logo', 'mominul' ),
				'desc'      => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
			),

			array(
				'id'        => 'retina_logo_sticky',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Retina Logo @2x', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload Retina logo for sticky header. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'mominul' ),
			),

			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Sidebar Menu Logo', 'mominul' ),
			),

			array(
				'id'        => 'sidebar_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sidebar Menu Logo', 'mominul' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
			),


			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Mobile Logo', 'mominul' ),
			),

			array(
				'id'        => 'mobile_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Logo', 'mominul' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
			),

			array(
				'id'        => 'mobile_retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Retina Logo @2x', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload Retina logo for  mobile menu. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'mominul' ),
			),
		),

	) );

	// Offcanvas Sidebar
	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Offcanvas Sidebar', 'mominul' ),
		'fields' => array(

			array(
				'id'        => 'offcanvas_sidebar_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
				'desc'      => esc_html__( 'Upload your Logo for the off canvas sidebar', 'mominul' ),
			),


			// Description textarea field
			array(
				'id'    => 'offcanvas_sidebar_description',
				'type'  => 'textarea',
				'title' => esc_html__( 'Description Textarea', 'mominul' ),
				'desc'  => esc_html__( 'Enter your description', 'mominul' ),
				'default' => esc_html__( 'Gpt is a experience Agency & our Team provide digital solution', 'mominul' ),
			),

			// Contact Info Title
			array(
				'id'    => 'offcanvas_sidebar_contact_info_title',
				'type'  => 'text',
				'title' => esc_html__( 'Contact Info Title', 'mominul' ),
				'desc'  => esc_html__( 'Enter your contact info title', 'mominul' ),
				'default' => esc_html__( 'Contact us', 'mominul' ),
			),

			// Repeatable field groups for contact info
			array(
				'id'          => 'offcanvas_sidebar_contact_info',
				'type'        => 'group',
				'title'       => esc_html__( 'Contact Info', 'mominul' ),
				'button_title'=> esc_html__( 'Add New', 'mominul' ),
				'accordion_title'=> esc_html__( 'Add New Contact Info', 'mominul' ),
				'fields'      => array(
					array(
						'id'    => 'contact_info_text',
						'type'  => 'text',
						'title' => esc_html__( 'Text', 'mominul' ),
					),
				),
				'default'     => array(
					array(
						'contact_info_text' => esc_html__( 'Melbone st, Australia, Ny 12099', 'mominul' ),
					),
					array(
						'contact_info_text' => esc_html__( '+01 800 123 400 55', 'mominul' ),
					),
					array(
						'contact_info_text' => esc_html__( 'pollexmail@gmail.com', 'mominul' ),
					),

				),
			),

			// Newsletter Form in on offcanvas sidebar switcher field

			array(
				'id'      => 'offcanvas_sidebar_newsletter_form_switcher',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Newsletter Form', 'mominul' ),
				'default' => true,
			),

			// Newsletter Title
			array(
				'id'    => 'offcanvas_sidebar_newsletter_info_title',
				'type'  => 'text',
				'title' => esc_html__( 'Newsletter Title', 'mominul' ),
				'desc'  => esc_html__( 'Enter your newsletter info title', 'mominul' ),
				'default' => esc_html__( 'Get Update', 'mominul' ),
				'dependency' => array( 'offcanvas_sidebar_newsletter_form_switcher', '==', 'true' ),
			),

		)

	) );

	//Footer Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'mominul' ),
		'icon'   => 'fa fa-support',
		'fields' => array(

			array(
				'id'      => 'footer_style',
				'type'    => 'select',
				'title'   => __( 'Select Footer Style', 'mominul' ),
				'options' => Gpt_Theme_Helper::get_footers_types(),
			),

			array(
				'id'      => 'footer_color',
				'type'    => 'button_set',
				'title'   => __( 'Switch Footer Dark or Light', 'mominul' ),
				'options' => array(
					'footer_dark'  => __( 'Dark', 'mominul' ),
					'footer_light' => __( 'Light', 'mominul' ),
				),
				'default' => 'footer_dark',
			),

			array(
				'id'      => 'footer_social',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Footer Social Show/Hide', 'mominul' ),
				'default' => true,
			),

			array(
				'id'          => 'footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top/Bottom', 'mominul' ),
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
				'title' => esc_html__( 'Copyright Text', 'mominul' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Footer Style', 'mominul' ),
			),

			array(
				'id'          => 'footer_bg_color',
				'type'        => 'color',
				'title'       => esc_html__( 'Footer Background Color', 'mominul' ),
				'output'      => '.site-footer',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'footer-widget',
				'type'   => 'color',
				'title'  => esc_html__( 'Widget Title Color', 'mominul' ),
				'output' => '.site-footer .widget-title',
			),

			array(
				'id'                    => 'footer_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'mominul' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'mominul' ),
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
				'title'  => esc_html__( 'Link Color', 'mominul' ),
				'output' => '.site-footer .widget ul li a',
			),
			array(
				'id'     => 'footer-link-hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color Hover', 'mominul' ),
				'output' => array(
					'background' => '.site-footer .widget_nav_menu .menu li a:after',
					'color'      => '.site-footer .widget ul li a:hover',
				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Social Link', 'mominul' ),
			),

			array(
				'id'     => 'footer-social-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Icon Color', 'mominul' ),
				'output' => '.site-footer .widget .footer-social-link li a',
			),
			array(
				'id'     => 'footer-social-link-border',
				'type'   => 'color',
				'title'  => esc_html__( 'Border Color', 'mominul' ),
				'output' => array(
					'border-color' => '.site-footer .widget .footer-social-link li a'
				)
			),
			array(
				'id'     => 'footer-link-hover-bg',
				'type'   => 'color',
				'title'  => esc_html__( 'Hover Background Color', 'mominul' ),
				'output' => array(
					'background'   => '.site-footer .widget .footer-social-link li a:hover',
					'border-color' => '.site-footer .widget .footer-social-link li a:hover'
				)
			),
			array(
				'id'               => 'footer-link-hover-icon',
				'type'             => 'color',
				'title'            => esc_html__( 'Hover Icon Color', 'mominul' ),
				'output'           => '.site-footer .widget .footer-social-link li a:hover',
				'output_important' => true
			),
		)
	) );

	//Page Header
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page Header', 'mominul' ),
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Page Header Settings', 'mominul' ),
			),
			array(
				'id'      => 'page_header',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Page Header Enable', 'mominul' ),
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
				'title'   => __( 'Banner Height', 'mominul' ),
				'min'     => 250,
				'max'     => 550,
				'step'    => 1,
				'unit'    => 'px',
				'default' => 350,
				'output'  => [
					'min-height' => '.page-header',
				]
			),

			array(
				'id'    => 'page_header_default_title',
				'type'  => 'text',
				'title' => esc_html__( 'Default Title', 'mominul' ),
				'desc'  => esc_html__( 'Set the default title for the page header', 'mominul' ),
			),
			array(
				'id'     => 'custom_title_typography',
				'type'   => 'typography',
				'title'  => esc_html__( 'Title Typography', 'mominul' ),
				'output' => array(
					'color' => '.page-banner .page-title-wrapper .page-title, .page-banner .saaspik_breadcrumbs li a',
				),
			),
			array(
				'id'                    => 'page_header_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'mominul' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'mominul' ),
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
		'title' => esc_html__( 'Blog', 'mominul' ),
		'icon'   => 'fa fa-file-text-o',
	) );

	// Blog Archive
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Archive', 'mominul' ),
		'parent' => 'blog_section',
		'fields' => array(

			array(
				'id'         => 'blog-masonry-column',
				'type'       => 'image_select',
				'title'      => esc_html__( 'Columns', 'mominul' ),
				'desc'       => esc_html__( 'Display number of post per row', 'mominul' ),
				'radio'      => true,
				'options'    => array(
					'6' => MP_THEME_URI . '/assets/images/layout/2cols.png',
					'4' => MP_THEME_URI . '/assets/images/layout/3cols.png',
				),
				'default'    => '6',
				'dependency' => array( 'blog-style_masonry', '==', true ),
			),

			array(
				'id'      => 'blog_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'mominul' ),
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
				'title'    => esc_html__( 'Blog Archive Sidebar Width', 'mominul' ),
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
				'title'    => esc_html__( 'Blog Archive Sidebar Side Gap', 'mominul' ),
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


			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'mominul' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'mominul' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'mominul' ),
				'default' => false,
			),



		)
	) );

	//	Blog Single
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Single', 'mominul' ),
		'parent' => 'blog_section',
		'fields' => array(


			array(
				'id'      => 'single_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'mominul' ),
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
				'title'    => esc_html__( 'Sidebar Width', 'mominul' ),
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
				'title'    => esc_html__( 'Blog Sidebar Side Gap', 'mominul' ),
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
				'title'   => esc_html__( 'Display Author Bio Box', 'mominul' ),
				'default' => false
			),

			array(
				'id'      => 'share_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Share On Post', 'mominul' ),
				'default' => false
			),

			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'mominul' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'mominul' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'single_post_nav',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Post Navigation?', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'single_related_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Related Post?', 'mominul' ),
				'default' => false,
			),

			array(
				'id'      => 'related_title',
				'type'    => 'text',
				'title'   => esc_html__( 'Related Post Title', 'mominul' ),
				'default' => __( 'Related Posts', 'mominul' ),
			),

		)
	) );

	// Page Layout Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page', 'mominul' ),
		'icon'   => 'fa fa-file-text-o',
		'fields' => array(

			array(
				'id'      => 'page_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'mominul' ),
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
		'title'  => __( 'Project', 'mominul' ),
		'fields' => array(

			// A Switcher field
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header', 'mominul' ),
			),

			array(
				'id'      => 'wc-enable-page-title',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Page Header', 'mominul' ),
				'default' => true
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Page Title', 'mominul' ),
				'id'      => 'project-page-title',
				'default' => __( 'Case Details', 'mominul' ),
			),

			// Page Header Background
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header Background', 'mominul' ),
			),

			array(
				'id'      => 'project-page-header-bg',
				'type'    => 'background',
				'title'   => esc_html__( 'Page Header Background', 'mominul' ),
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
		'title'  => esc_html__( 'Social Link', 'mominul' ),
		'icon'   => 'fa fa-globe',
		'desc'   => esc_html__( 'This social profiles will display in your whole site.', 'mominul' ),
		'fields' => array(

			array(
				'id'           => 'social_links',
				'type'         => 'group',
				'title'        => esc_html__( 'Social links', 'mominul' ),
				'desc'         => esc_html__( 'This social profiles will display in your whole site.', 'mominul' ),
				'button_title' => esc_html__( 'Add New', 'mominul' ),
				'fields'       => array(

					array(
						'id'    => 'name',
						'type'  => 'text',
						'title' => esc_html__( 'Name', 'mominul' ),
					),
					array(
						'id'    => 'url',
						'type'  => 'text',
						'title' => esc_html__( 'Url', 'mominul' )
					),
					array(
						'id'    => 'icon',
						'type'  => 'icon',
						'title' => esc_html__( 'Icon', 'mominul' )
					)

				),

				'default' => array(
					array(
						'name' => esc_html__( 'Facebook', 'mominul' ),
						'url'  => esc_url( 'http://facebook.com' ),
						'icon' => 'fab fa-facebook-f'
					),

					array(
						'name' => esc_html__( 'Twitter', 'mominul' ),
						'url'  => esc_url( 'http://twitter.com' ),
						'icon' => 'fab fa-twitter'
					),

					array(
						'name' => esc_html__( 'Dribbble', 'mominul' ),
						'url'  => esc_url( 'http://dribbble.com' ),
						'icon' => 'fab fa-dribbble'
					)

				),
				array(
					'type'    => 'notice',
					'class'   => 'info',
					'content' => esc_html__( 'This social profiles will display in your whole site.', 'mominul' ),
				),
			),
		)
	) );

	//Error Page
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( '404 Page', 'mominul' ),
		'icon'   => 'fa fa-exclamation',
		'fields' => array(

			array(
				'id'        => 'error_image',
				'type'      => 'media',
				'title'     => esc_html__( 'Image', 'mominul' ),
				'add_title' => esc_html__( 'Upload', 'mominul' ),
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Error Title', 'mominul' ),
				'id'      => 'error_title',
				'default' => esc_html__( 'The page you’ re looking for fly away', 'mominul' ),
			),

			array(
				'type'    => 'textarea',
				'title'   => esc_html__( 'Description', 'mominul' ),
				'id'      => 'error_description',
				'default' => esc_html__( 'Tell us what you are looking for:', 'mominul' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Style', 'mominul' ),
			),

			array(
				'id'                    => 'error_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'mominul' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'mominul' ),
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
				'title'  => esc_html__( 'Error Text Color', 'mominul' ),
				'output' => '.error_page .error-page-content .error-text',
			),

			array(
				'id'     => 'error-heading',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'mominul' ),
				'output' => '.error_page .error-page-content .error-title',
			),

			array(
				'id'     => 'error-content',
				'type'   => 'color',
				'title'  => esc_html__( 'Content Color', 'mominul' ),
				'output' => '.error_page .error-page-content p',
			),

		)
	) );

	//Typography
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Typography', 'mominul' ),
		'icon'   => 'fa fa-font',
		'fields' => array(
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Body Font Settings', 'mominul' ),
			),

			array(
				'id'      => 'body-font',
				'type'    => 'typography',
				'title'   => esc_html__( 'Body', 'mominul' ),
				'output'  => 'body',
				'default' => array(
					'unit' => 'px',
					'type' => 'google',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Heading Font Settings', 'mominul' ),
			),
			array(
				'id'      => 'heading-h1',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H1', 'mominul' ),
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
				'title'   => esc_html__( 'Heading H2', 'mominul' ),
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
				'title'   => esc_html__( 'Heading H3', 'mominul' ),
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
				'title'   => esc_html__( 'Heading H4', 'mominul' ),
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
				'title'   => esc_html__( 'Heading H5', 'mominul' ),
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
				'title'   => esc_html__( 'Heading H6', 'mominul' ),
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
		'title'  => esc_html__( 'Color Scheme', 'mominul' ),
		'icon'   => 'fa fa-star',
		'icon'   => 'fa fa-paint-brush',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'General Color', 'mominul' ),
			),

			array(
				'id'     => 'body-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Color', 'mominul' ),
				'output' => 'body'
			),

			// Body BG Color
			array(
				'id'     => 'body-bg-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Background Color', 'mominul' ),
				'output' => 'body',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'main_heading-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'mominul' ),
				'output' => 'h1,h2,h3,h4,h5,h6, .blog-content .entry-title a',
			),

			array(
				'id'     => 'main_primary-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Primary Color', 'mominul' ),
				'desc'   => esc_html__( 'Main Color Scheme', 'mominul' ),
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
		'title'  => esc_html__( 'Backup', 'mominul' ),
		'icon'   => 'fa fa-download',
		'fields' => array(
			array(
				'type' => 'backup',
			),
		)
	) );
}