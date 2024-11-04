<?php

// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = 'gpt_page_options';

	//
	// Create a metabox
	CSF::createMetabox( $prefix, array(
		'title'     => esc_html__( 'Page Option', 'gpt-news' ),
		'context'   => 'normal',
		'post_type' => array( 'page' ),
		'theme'     => 'dark',

	) );

	// Header Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Header', 'gpt-news' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_header_type',
				'type'     => 'switcher',
				'title'    => __( 'Header Style', 'gpt-news' ),
				'text_on'  => __( 'Yes', 'gpt-news' ),
				'text_off' => __( 'No', 'gpt-news' ),
				'default'  => false
			),

			array(
				'id'      => 'meta_header_layout',
				'type'    => 'select',
				'title'   => esc_html__( 'Header Style', 'gpt-news' ),
				'desc'    => esc_html__( 'Select header style', 'gpt-news' ),
				'options' => array(
					'default' => __('Header Default', 'gpt-news'),
					'canvas' => __('Header Canvas', 'gpt-news')
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_transparent_menu',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Transparent Menu', 'gpt-news' ),
				'default'    => true,
				'dependency' => array( 'meta_header_type|meta_header_layout', '==', 'true|default' ),
			),

			array(
				'id'         => 'meta_header_color',
				'type'       => 'button_set',
				'title'      => __( 'Transparent Header Color', 'gpt-news' ),
				'options'    => array(
					'header_dark'  => __( 'Dark (For light background)', 'gpt-news' ),
					'header_light' => __( 'Light (For dark Background)', 'gpt-news' ),
				),
				'default'    => 'header_dark',
				'dependency' => array( 'meta_header_type|meta_transparent_menu', '==', 'true|true' ),
			),

			array(
				'id'         => 'meta_main_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Logo Upload', 'gpt-news' ),
				'add_title'  => esc_html__( 'Upload', 'gpt-news' ),
				'desc'       => esc_html__( 'Upload logo for Header', 'gpt-news' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'retina_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Retina Logo Upload @2x', 'gpt-news' ),
				'add_title'  => esc_html__( 'Upload', 'gpt-news' ),
				'desc'       => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'gpt-news' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_sticky_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Logo', 'gpt-news' ),
				'desc'       => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'gpt-news' ),
				'add_title'  => esc_html__( 'Upload', 'gpt-news' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'retina_logo_sticky',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Retina Logo @2x', 'gpt-news' ),
				'desc'       => esc_html__( 'Upload Retina logo for Header Sticky.', 'gpt-news' ),
				'add_title'  => esc_html__( 'Upload', 'gpt-news' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Menu Style', 'gpt-news' ),
			),


			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output' => array(
					'color' => '.site-header:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:after'
				),
				// 'output_important' => true
			),
			array(
				'id'        => 'menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'gpt-news' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'add_title' => esc_html__( 'Upload', 'gpt-news' ),
                'output' => array(
                    'color' => '.site-header:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:hover:after'
                ),
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output' => '.site-header .site-main-menu li .sub-menu li a, .menu-transperant .site-header .site-main-menu li .sub-menu li a, .site-header .site-main-menu li > a'
			),

			array(
				'id'     => 'menu_color_hover_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Hover Color', 'gpt-news' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'output' => array(
					'color' => '.site-header .site-main-menu li.menu-item-has-children .sub-menu li a:hover',
				)
			),

            // Bg Color
            array(
                'id'               => 'menu_bg_color',
                'type'             => 'color',
                'title'            => esc_html__( 'Menu Hover BG Color', 'gpt-news' ),
                'desc'             => esc_html__( 'You can change menu background color.', 'gpt-news' ),
                'output_important' => true,
                'output'           => [
                    'background-color' => '.site-header .site-main-menu li.menu-item-has-children .sub-menu li a:hover',
                ]
            ),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'gpt-news' ),
			),

			array(
				'id'               => 'sticky_menu_color',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Text Color', 'gpt-news' ),
				'desc'             => esc_html__( 'You can change menu text color.', 'gpt-news' ),
				'output_important' => true,
				'output'           => [
                    'color' => '.site-header.showed .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:after'
                ]
			),

			array(
				'id'               => 'sticky_menu_color_hover',
				'type'             => 'color',
				'output_important' => true,
				'title'            => esc_html__( 'Menu Text Hover Color', 'gpt-news' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'gpt-news' ),
				'add_title'        => esc_html__( 'Upload', 'gpt-news' ),
                'output'           => [
                    'color' => '.site-header.showed .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li > a:hover, .site-header.header_transparent.header_light:not(.showed) .site-main-menu > li.menu-item-has-children > a:hover:after, .site-header.showed .site-main-menu li.menu-item-has-children > a:hover:after'
                ]
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Button Style', 'gpt-news' ),
			),

            // Nav Button On/Off
            array(
                'id'         => 'meta_nav_button',
                'type'       => 'switcher',
                'title'      => esc_html__( 'Nav Button', 'gpt-news' ),
                'default'    => true,
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

			// Button Style
			array(
				'id'         => 'meta_button_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Color', 'gpt-news' ),
				'des'        => esc_html__( 'Choose button color', 'gpt-news' ),
				'output'     => array(
					'color' => '.site-header:not(.showed)  .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'BG Color', 'gpt-news' ),
				'des'        => esc_html__( 'Choose button background color', 'gpt-news' ),
				'output'     => array(
					'background' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_transparent.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn, .site-header.header_light:not(.showed) .nav-right .nav-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_border',
				'type'       => 'border',
				'title'      => __( 'Border', 'gpt-news' ),
				'output'     => array( 'border-color'=> '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_transparent.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn, .site-header.header_light:not(.showed) .nav-right .nav-btn'),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'     => 'meta-btn-border-radius',
				'type'   => 'number',
				'title'  => __( 'Border Radius', 'gpt-news' ),
				'unit'   => 'px',
				'output' => [
					'border-radius' => '.site-header .nav-right .nav-btn, .site-header.header_light .nav-right .nav-btn',
				],
			),

			array(
				'id'         => 'meta_button_hover_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Color', 'gpt-news' ),
				'des'        => esc_html__( 'Choose button color', 'gpt-news' ),
				'output'     => array(
					'color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_hover_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Hover BG Color', 'gpt-news' ),
				'des'        => esc_html__( 'Choose button background color', 'gpt-news' ),
				'output'     => array(
					'background-color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_button_hover',
				'type'       => 'border',
				'title'      => __( 'Hover Border', 'gpt-news' ),
				'output'     => array( 'border-color' => '.site-header:not(.showed) .nav-right .nav-btn:hover, .site-header.header_light:not(.showed):not(.mobile-header) .nav-right .nav-btn:hover' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

            array(
                'type'    => 'subheading',
                'content' => esc_html__( 'Header Sticky Button Style', 'gpt-news' ),
            ),

            array(
                'id'         => 'meta_sticky_button_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose button color', 'gpt-news' ),
                'output'     => array(
                    'color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'         => 'meta_sticky_button_bg_color',
                'type'       => 'color',
                'title'      => esc_html__( 'BG Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose button background color', 'gpt-news' ),
                'output'     => array(
                    'background-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'     => 'meta_sticky__border',
                'type'   => 'color',
                'title'  => __( 'Border Color', 'gpt-news' ),
                'output' => array('border-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed:not(.mobile-header) .nav-right .nav-btn:hover'),
                'des'        => esc_html__( 'Choose button border color', 'gpt-news' ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),


            array(
                'id'         => 'meta_sticky_button_hover_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Hover Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose button color', 'gpt-news' ),
                'output'     => array(
                    'color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'         => 'meta_sticky_button_hover_bg_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Hover BG Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose button background color', 'gpt-news' ),
                'output'     => array(
                    'background-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover',
                ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            array(
                'id'     => 'meta_sticky__hover_border',
                'type'   => 'color',
                'title'  => __( 'Hover Border Color', 'gpt-news' ),
                'output' => array('border-color' => '.site-header.showed .nav-right .nav-btn:hover, .site-header.header_light.showed .nav-right .nav-btn:hover'),
                'des'        => esc_html__( 'Choose button border color', 'gpt-news' ),
                'dependency' => array( 'meta_header_type', '==', 'true' ),
            ),

            // Burger Menu Style
            array(
                'type'    => 'subheading',
                'content' => esc_html__( 'Burger Menu Style', 'gpt-news' ),
            ),

            array(
                'id'         => 'meta_burger_color',
                'type'       => 'color',
                'title'      => esc_html__( 'Color', 'gpt-news' ),
                'des'        => esc_html__( 'Choose burger menu color', 'gpt-news' ),
                'output'     => array(
                    'background' => '.site-header .gpt-hamburger .bar',
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
				'title'   => esc_html__( 'Page Header Option', 'gpt-news' ),
				'options' => array(
					'default'  => esc_html__( 'Default', 'gpt-news' ),
					'enabled'  => esc_html__( 'Enabled', 'gpt-news' ),
					'disabled' => esc_html__( 'Disabled', 'gpt-news' ),
				),
				'default' => 'default'
			),


			array(
				'id'               => 'header_image',
				'type'             => 'background',
				'title'            => esc_html__( 'Header Image', 'gpt-news' ),
				'desc'             => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'gpt-news' ),
				'dependency'       => array( 'meta_page_header', '==', 'enabled' ),
				'output'           => '.page-header',
				'output_important' => true,
			),

			array(
				'id'         => 'custom_title',
				'type'       => 'text',
				'title'      => esc_html__( 'Custom Title', 'gpt-news' ),
				'desc'       => esc_html__( 'Set custom title for the page header. Default: The post title.', 'gpt-news' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_typography',
				'type'       => 'typography',
				'title'      => esc_html__( 'Title Typography', 'gpt-news' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Title Color', 'gpt-news' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),

			array(
				'id'         => 'breadcrumbs',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Header Breadcrumbs', 'gpt-news' ),
				'desc'       => esc_html__( 'Display breadcrumbs on the page header', 'gpt-news' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
				'default'    => true,
			),

		),
	) );

	// Footer Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'gpt-news' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_footer_type',
				'type'     => 'switcher',
				'title'    => __( 'Footer Style', 'gpt-news' ),
				'text_on'  => __( 'Yes', 'gpt-news' ),
				'text_off' => __( 'No', 'gpt-news' ),
				'default'  => false
			),


			array(
				'id'         => 'meta_footer_color',
				'type'       => 'button_set',
				'title'      => __( 'Switch Footer Dark or Light', 'gpt-news' ),
				'options'    => array(
					'footer_dark'  => __( 'Dark', 'gpt-news' ),
					'footer_light' => __( 'Light', 'gpt-news' ),
				),
				'default'    => 'footer_dark',
				'dependency' => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'          => 'meta_footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top', 'gpt-news' ),
				'output'      => '.site-footer .footer-wrapper',
				'output_mode' => 'padding', //
				'left'        => false,
				'right'       => false,
				'dependency'  => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'               => 'meta_footer_bg',
				'type'             => 'color',
				'title'            => esc_html__( 'Footer Background', 'gpt-news' ),
				'desc'             => esc_html__( 'Choose footer background color', 'gpt-news' ),
				'output'           => [
					'background-color' => '.site-footer',
				],
				'dependency'       => array( 'meta_footer_type', '==', 'true' ),
				'output_important' => true,
			),

		)
	) );
}