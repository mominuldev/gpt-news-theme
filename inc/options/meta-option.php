<?php

// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = 'pps_page_options';

	//
	// Create a metabox
	CSF::createMetabox( $prefix, array(
		'title'     => esc_html__( 'Page Option', 'pps-passport' ),
		'context'   => 'normal',
		'post_type' => array( 'page' ),
		'theme'     => 'dark',

	) );

	// Header Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Header', 'pps-passport' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_header_type',
				'type'     => 'switcher',
				'title'    => __( 'Header Style', 'pps-passport' ),
				'text_on'  => __( 'Yes', 'pps-passport' ),
				'text_off' => __( 'No', 'pps-passport' ),
				'default'  => false
			),

			array(
				'id'      => 'meta_header_layout',
				'type'    => 'select',
				'title'   => esc_html__( 'Select Header Style', 'pps-passport' ),
				'desc'    => esc_html__( 'Select header style', 'pps-passport' ),
				'options' => array(
					'options' => [
						'header-one' => esc_html__( 'Header 1', 'pps-passport' ),
						'header-two' => esc_html__( 'Header 2', 'pps-passport' ),
					],
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_transparent_menu',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Transparent Menu', 'pps-passport' ),
				'default'    => true,
				'dependency' => array( 'meta_header_type|meta_header_layout', '==', 'true|default' ),
			),

//			array(
//				'id'         => 'meta_header_color',
//				'type'       => 'button_set',
//				'title'      => __( 'Transparent Header Color', 'pps-passport' ),
//				'options'    => array(
//					'header_dark'  => __( 'Dark (For light background)', 'pps-passport' ),
//					'header_light' => __( 'Light (For dark Background)', 'pps-passport' ),
//				),
//				'default'    => 'header_dark',
//				'dependency' => array( 'meta_header_type|meta_transparent_menu', '==', 'true|true' ),
//			),

			array(
				'id'         => 'meta_main_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Logo Upload', 'pps-passport' ),
				'add_title'  => esc_html__( 'Upload', 'pps-passport' ),
				'desc'       => esc_html__( 'Upload logo for Header', 'pps-passport' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'retina_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Retina Logo Upload @2x', 'pps-passport' ),
				'add_title'  => esc_html__( 'Upload', 'pps-passport' ),
				'desc'       => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'pps-passport' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_sticky_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Logo', 'pps-passport' ),
				'desc'       => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'pps-passport' ),
				'add_title'  => esc_html__( 'Upload', 'pps-passport' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'retina_logo_sticky',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Retina Logo @2x', 'pps-passport' ),
				'desc'       => esc_html__( 'Upload Retina logo for Header Sticky.', 'pps-passport' ),
				'add_title'  => esc_html__( 'Upload', 'pps-passport' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Menu Style', 'pps-passport' ),
			),


			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output' => array(
					'color' => '.site-header:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:after'
				),
				// 'output_important' => true
			),
			array(
				'id'        => 'menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'pps-passport' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'add_title' => esc_html__( 'Upload', 'pps-passport' ),
                'output' => array(
                    'color' => '.site-header:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:hover:after'
                ),
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output' => '.site-header .site-main-menu li .sub-menu li a, .menu-transperant .site-header .site-main-menu li .sub-menu li a, .site-header .site-main-menu li > a'
			),

			array(
				'id'     => 'menu_color_hover_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Hover Color', 'pps-passport' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'output' => array(
					'color' => '.site-header .site-main-menu li.menu-item-has-children .sub-menu li a:hover',
				)
			),

            // Bg Color
            array(
                'id'               => 'menu_bg_color',
                'type'             => 'color',
                'title'            => esc_html__( 'Menu Hover BG Color', 'pps-passport' ),
                'desc'             => esc_html__( 'You can change menu background color.', 'pps-passport' ),
                'output_important' => true,
                'output'           => [
                    'background-color' => '.site-header .site-main-menu li.menu-item-has-children .sub-menu li a:hover',
                ]
            ),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'pps-passport' ),
			),

			array(
				'id'               => 'sticky_menu_color',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Text Color', 'pps-passport' ),
				'desc'             => esc_html__( 'You can change menu text color.', 'pps-passport' ),
				'output_important' => true,
				'output'           => [
                    'color' => '.site-header.showed .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:after'
                ]
			),

			array(
				'id'               => 'sticky_menu_color_hover',
				'type'             => 'color',
				'output_important' => true,
				'title'            => esc_html__( 'Menu Text Hover Color', 'pps-passport' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'pps-passport' ),
				'add_title'        => esc_html__( 'Upload', 'pps-passport' ),
                'output'           => [
                    'color' => '.site-header.showed .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:hover:after, .site-header.showed .site-main-menu li.menu-item-has-children > a:hover:after'
                ]
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Button Style', 'pps-passport' ),
			),

            // Nav Button On/Off
            array(
                'id'         => 'meta_nav_button',
                'type'       => 'switcher',
                'title'      => esc_html__( 'Nav Button', 'pps-passport' ),
                'default'    => true,
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

			// Button Style
			array(
				'id'         => 'meta_button_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Color', 'pps-passport' ),
				'des'        => esc_html__( 'Choose button color', 'pps-passport' ),
				'output'     => array(
					'color' => '.site-header:not(.showed)  .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'BG Color', 'pps-passport' ),
				'des'        => esc_html__( 'Choose button background color', 'pps-passport' ),
				'output'     => array(
					'background' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_transparent.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn, .site-header.header_light:not(.showed) .nav-right .nav-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_border',
				'type'       => 'border',
				'title'      => __( 'Border', 'pps-passport' ),
				'output'     => array( 'border-color'=> '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_transparent.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn, .site-header.header_light:not(.showed) .nav-right .nav-btn'),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'     => 'meta-btn-border-radius',
				'type'   => 'number',
				'title'  => __( 'Border Radius', 'pps-passport' ),
				'unit'   => 'px',
				'output' => [
					'border-radius' => '.site-header .nav-right .nav-btn, .site-header.header_light .nav-right .nav-btn',
				],
			),

			array(
				'id'         => 'meta_button_hover_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Color', 'pps-passport' ),
				'des'        => esc_html__( 'Choose button color', 'pps-passport' ),
				'output'     => array(
					'color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_hover_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Hover BG Color', 'pps-passport' ),
				'des'        => esc_html__( 'Choose button background color', 'pps-passport' ),
				'output'     => array(
					'background-color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_button_hover',
				'type'       => 'border',
				'title'      => __( 'Hover Border', 'pps-passport' ),
				'output'     => array( 'border-color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

            array(
                'type'    => 'subheading',
                'content' => esc_html__( 'Header Sticky Button Style', 'pps-passport' ),
            ),

            array(
                'id'         => 'meta_sticky_button_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose button color', 'pps-passport' ),
                'output'     => array(
                    'color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'         => 'meta_sticky_button_bg_color',
                'type'       => 'color',
                'title'      => esc_html__( 'BG Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose button background color', 'pps-passport' ),
                'output'     => array(
                    'background-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'     => 'meta_sticky__border',
                'type'   => 'color',
                'title'  => __( 'Border Color', 'pps-passport' ),
                'output' => array('border-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover'),
                'des'        => esc_html__( 'Choose button border color', 'pps-passport' ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),


            array(
                'id'         => 'meta_sticky_button_hover_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Hover Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose button color', 'pps-passport' ),
                'output'     => array(
                    'color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'         => 'meta_sticky_button_hover_bg_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Hover BG Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose button background color', 'pps-passport' ),
                'output'     => array(
                    'background-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'     => 'meta_sticky__hover_border',
                'type'   => 'color',
                'title'  => __( 'Hover Border Color', 'pps-passport' ),
                'output' => array('border-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover'),
                'des'        => esc_html__( 'Choose button border color', 'pps-passport' ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            // Burger Menu Style
            array(
                'type'    => 'subheading',
                'content' => esc_html__( 'Burger Menu Style', 'pps-passport' ),
            ),

            array(
                'id'         => 'meta_burger_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'pps-passport' ),
                'des'        => esc_html__( 'Choose burger menu color', 'pps-passport' ),
                'output'     => array(
                    'background' => '.site-header .pps-hamburger .bar',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),


		)
	) );

	// Page Header
	CSF::createSection( $prefix, array(
		'title'  => 'Page Header',
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'id'      => 'meta_page_header',
				'type'    => 'button_set',
				'title'   => esc_html__( 'Page Header Option', 'pps-passport' ),
				'options' => array(
					'default'  => esc_html__( 'Default', 'pps-passport' ),
					'enabled'  => esc_html__( 'Enabled', 'pps-passport' ),
					'disabled' => esc_html__( 'Disabled', 'pps-passport' ),
				),
				'default' => 'default'
			),


			array(
				'id'               => 'header_image',
				'type'             => 'background',
				'title'            => esc_html__( 'Header Image', 'pps-passport' ),
				'desc'             => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'pps-passport' ),
				'dependency'       => array( 'meta_page_header', '==', 'enabled' ),
				'output'           => '.page-header',
				'output_important' => true,
			),

			array(
				'id'         => 'custom_title',
				'type'       => 'text',
				'title'      => esc_html__( 'Custom Title', 'pps-passport' ),
				'desc'       => esc_html__( 'Set custom title for the page header. Default: The post title.', 'pps-passport' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_typography',
				'type'       => 'typography',
				'title'      => esc_html__( 'Title Typography', 'pps-passport' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Title Color', 'pps-passport' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),

			array(
				'id'         => 'breadcrumbs',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Header Breadcrumbs', 'pps-passport' ),
				'desc'       => esc_html__( 'Display breadcrumbs on the page header', 'pps-passport' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
				'default'    => true,
			),

		),
	) );

	// Footer Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'pps-passport' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_footer_type',
				'type'     => 'switcher',
				'title'    => __( 'Footer Style', 'pps-passport' ),
				'text_on'  => __( 'Yes', 'pps-passport' ),
				'text_off' => __( 'No', 'pps-passport' ),
				'default'  => false
			),


			array(
				'id'         => 'meta_footer_color',
				'type'       => 'button_set',
				'title'      => __( 'Switch Footer Dark or Light', 'pps-passport' ),
				'options'    => array(
					'footer_dark'  => __( 'Dark', 'pps-passport' ),
					'footer_light' => __( 'Light', 'pps-passport' ),
				),
				'default'    => 'footer_dark',
				'dependency' => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'          => 'meta_footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top', 'pps-passport' ),
				'output'      => '.site-footer .footer-wrapper',
				'output_mode' => 'padding', //
				'left'        => false,
				'right'       => false,
				'dependency'  => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'               => 'meta_footer_bg',
				'type'             => 'color',
				'title'            => esc_html__( 'Footer Background', 'pps-passport' ),
				'desc'             => esc_html__( 'Choose footer background color', 'pps-passport' ),
				'output'           => [
					'background-color' => '.site-footer',
				],
				'dependency'       => array( 'meta_footer_type', '==', 'true' ),
				'output_important' => true,
			),

		)
	) );
}