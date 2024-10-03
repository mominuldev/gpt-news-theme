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
			add_action( 'init', array( $this, 'gpt_register_nav_menus' ) );
			//Add translation file
			add_action( 'init', array( $this, 'gpt_enqueue_translation_files' ) );
			//Add widget support
			add_action( 'widgets_init', array( $this, 'gpt_sidebar_register' ) );

			add_action( 'after_setup_theme', array( $this, 'gpt_setup' ) );
			add_action( 'after_setup_theme', array( $this, 'gpt_content_width' ) );

			add_theme_support( 'align-wide' );
			add_theme_support( 'wp-block-styles' );
			add_theme_support( "responsive-embeds" );
			add_theme_support( 'editor-styles' );
			add_editor_style( 'style-editor.css' );
		}


		function gpt_setup() {

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
				add_theme_support( 'custom-background', apply_filters( 'gpt_custom_background_args', array(
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
                add_image_size('mominul-team', 265, 300, true);
                add_image_size('gpt_project_grid_625x385', 625, 385, true);
                add_image_size('gpt_project_details_1300x600', 1300, 600, true);
                add_image_size('gpt_project_slider', 600, 470, true);
                add_image_size('gpt_blog_grid_410x290', 410, 290, true);
                add_image_size('gpt_blog_grid_370x400', 370, 390, true);
                add_image_size('gpt_blog_grid_400x182', 400, 182, true);
                add_image_size('mominul-thumbnail_90_90', 90, 90, true);
                add_image_size('mominul-service_740x275', 740, 275, true);
                add_image_size('mominul-blog-list_300x185', 300, 185, true);
                add_image_size('mominul-creative-slider_510x540', 510, 540, true);
                add_image_size('mominul-portfolio', 415, 480, true);
			}
		}


		public function gpt_register_nav_menus() {
			register_nav_menus(
				array(
					'primary' => esc_html__( 'Primary Menu', 'mominul' ),
                    'footer_menu'  => esc_html__( 'Footer Menu', 'mominul' ),
				)
			);
		}

		public function gpt_enqueue_translation_files() {
			load_theme_textdomain( 'mominul', get_template_directory() . '/languages/' );
		}

		public function gpt_sidebar_register() {

			// Default wrapper for widget and title
			$wrapper_before = '<div id="%1$s" class="widget gpt_widget %2$s">';
			$wrapper_after  = '</div>';
			$title_before   = '<h3 class="widget-title">';
			$title_after    = '</h3>';

			register_sidebar( array(
				'name'          => esc_html( 'Sidebar Main', 'mominul' ),
				'id'            => "sidebar_main-sidebar",
				'description'   => esc_html__( 'Add widget here to appear it in sidebar.', 'mominul' ),
				'before_widget' => $wrapper_before,
				'after_widget'  => $wrapper_after,
				'before_title'  => $title_before,
				'after_title'   => $title_after,
			) );


			// Register Footer Sidebar
			$footer_columns = array(
				array(
					'name' => esc_html__( 'Footer Column 1', 'mominul' ),
					'id'   => 'footer_column_1'
				),
				array(
					'name' => esc_html__( 'Footer Column 2', 'mominul' ),
					'id'   => 'footer_column_2'
				),
				array(
					'name' => esc_html__( 'Footer Column 3', 'mominul' ),
					'id'   => 'footer_column_3'
				),
				array(
					'name' => esc_html__( 'Footer Column 4', 'mominul' ),
					'id'   => 'footer_column_4'
				),
			);


			foreach ( $footer_columns as $key => $footer_column ) {
				register_sidebar( array(
					'name'          => $footer_column['name'],
					'id'            => $footer_column['id'],
					'description'   => esc_html__( 'This area will display in footer like a column. Add widget here to appear it in footer column.', 'mominul' ),
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
		function gpt_content_width() {
			// This variable is intended to be overruled from themes.
			// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
			$GLOBALS['content_width'] = apply_filters( 'gpt_content_width', 1170 );
		}

	}

	new Gpt_Theme_Support();
}
