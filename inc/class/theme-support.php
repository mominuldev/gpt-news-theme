<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Gpt Theme Support
 *
 *
 * @class        Gpt_Theme_Support
 * @version      1.0
 * @category     Class
 * @author       GptIslam
 */

if ( ! class_exists( 'Gpt_Theme_Support' ) ) {
	class Gpt_Theme_Support {

		private static $instance = null;

		public static function get_instance() {
			if ( null == self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		public function __construct() {
			//Register Nav Menu
			add_action( 'init', array( $this, 'pps_register_nav_menus' ) );
			//Add translation file
			add_action( 'init', array( $this, 'pps_enqueue_translation_files' ) );
			//Add widget support
			add_action( 'widgets_init', array( $this, 'pps_sidebar_register' ) );

			add_action( 'after_setup_theme', array( $this, 'pps_setup' ) );
			add_action( 'after_setup_theme', array( $this, 'pps_content_width' ) );

			add_theme_support( 'align-wide' );
			add_theme_support( 'wp-block-styles' );
			add_theme_support( "responsive-embeds" );
			add_theme_support( 'editor-styles' );
			add_editor_style( 'style-editor.css' );
		}


		function pps_setup() {

			if ( function_exists( 'add_theme_support' ) ) {
				add_theme_support( 'post-thumbnails' );
				set_post_thumbnail_size( 770, 465, array( 'center', 'center' ) ); // Hard crop center center

				add_theme_support( 'automatic-feed-links' );
				add_theme_support( 'revisions' );
				add_theme_support( 'title-tag' );
				add_theme_support( 'post-formats', array( 'gallery', 'video', 'quote', 'audio', 'link' ) );
				add_theme_support( 'html5', array(
					'search-form',
					'comment-form',
					'comment-list',
					'gallery',
					'caption'
				) );


				// Set up the WordPress core custom background feature.
				add_theme_support( 'custom-background', apply_filters( 'pps_custom_background_args', array(
					'default-color' => 'ffffff',
					'default-image' => '',
				) ) );

				/**
				 * Add support for core custom logo.
				 *
				 * @link https://codex.wordpress.org/Theme_Logo
				 */
				add_theme_support( 'custom-logo', array(
					'height'      => 50,
					'width'       => 200,
					'flex-width'  => true,
					'flex-height' => true,
				) );

				//Image Size
                add_image_size('pps_hero_grid_800x550', 900, 520, true);
                add_image_size('pps_hero_large_960x520', 960, 520, true);
                add_image_size('pps_hero_thumbnail_220x175', 220, 175, true);
                add_image_size('pps_hero_thumbnail_420x270', 420, 270, true);
                add_image_size('pps_hero_grid_two_436x300', 436, 300, true);
                add_image_size('pps-blog-list_300x185', 300, 185, true);
                add_image_size('pps-blog-list_180x150', 180, 120, true);
                add_image_size('pps-hero_four_600x750', 600, 750, true);

			}
		}


		public function pps_register_nav_menus() {
			register_nav_menus(
				array(
					'primary' => esc_html__( 'Primary Menu', 'pps-passport' ),
                    'footer_menu'  => esc_html__( 'Footer Menu', 'pps-passport' ),
				)
			);
		}

		public function pps_enqueue_translation_files() {
			load_theme_textdomain( 'pps-passport', get_template_directory() . '/languages/' );
		}

		public function pps_sidebar_register() {

			// Default wrapper for widget and title
			$wrapper_before = '<div id="%1$s" class="widget pps_widget %2$s">';
			$wrapper_after  = '</div>';
			$title_before   = '<h3 class="widget-title">';
			$title_after    = '</h3>';

			register_sidebar( array(
				'name'          => esc_html( 'Sidebar Main', 'pps-passport' ),
				'id'            => "sidebar_main-sidebar",
				'description'   => esc_html__( 'Add widget here to appear it in sidebar.', 'pps-passport' ),
				'before_widget' => $wrapper_before,
				'after_widget'  => $wrapper_after,
				'before_title'  => $title_before,
				'after_title'   => $title_after,
			) );


			// Register Footer Sidebar
			$footer_columns = array(
				array(
					'name' => esc_html__( 'Footer Column 1', 'pps-passport' ),
					'id'   => 'footer_column_1'
				),
				array(
					'name' => esc_html__( 'Footer Column 2', 'pps-passport' ),
					'id'   => 'footer_column_2'
				),
				array(
					'name' => esc_html__( 'Footer Column 3', 'pps-passport' ),
					'id'   => 'footer_column_3'
				),
				array(
					'name' => esc_html__( 'Footer Column 4', 'pps-passport' ),
					'id'   => 'footer_column_4'
				),
			);


			foreach ( $footer_columns as $key => $footer_column ) {
				register_sidebar( array(
					'name'          => $footer_column['name'],
					'id'            => $footer_column['id'],
					'description'   => esc_html__( 'This area will display in footer like a column. Add widget here to appear it in footer column.', 'pps-passport' ),
					'before_widget' => $wrapper_before,
					'after_widget'  => $wrapper_after,
					'before_title'  => $title_before,
					'after_title'   => $title_after,
				) );
			}

		}

		/**
		 * Set the content width in pixels, based on the theme's design and stylesheet.
		 *
		 * Priority 0 to make it available to lower priority callbacks.
		 *
		 * @global int $content_width
		 */
		function pps_content_width() {
			// This variable is intended to be overruled from themes.
			// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
			$GLOBALS['content_width'] = apply_filters( 'pps_content_width', 1170 );
		}

	}

	new Gpt_Theme_Support();
}
