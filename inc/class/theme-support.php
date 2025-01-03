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
                add_image_size('gpt_hero_grid_800x550', 900, 520, true);
                add_image_size('gpt_hero_large_960x520', 960, 520, true);
                add_image_size('gpt_hero_thumbnail_220x175', 220, 175, true);
                add_image_size('gpt_hero_thumbnail_420x270', 420, 270, true);
                add_image_size('gpt_hero_grid_two_436x300', 436, 300, true);
                add_image_size('gpt-blog-list_300x185', 300, 185, true);
                add_image_size('gpt-blog-list_180x150', 180, 120, true);
                add_image_size('gpt-hero_four_600x750', 600, 750, true);

			}
		}


		public function gpt_register_nav_menus() {
			register_nav_menus(
				array(
					'primary' => esc_html__( 'Primary Menu', 'gpt-news' ),
                    'footer_menu'  => esc_html__( 'Footer Menu', 'gpt-news' ),
				)
			);
		}

		public function gpt_enqueue_translation_files() {
			load_theme_textdomain( 'gpt-news', get_template_directory() . '/languages/' );
		}

		public function gpt_sidebar_register() {

			// Default wrapper for widget and title
			$wrapper_before = '<div id="%1$s" class="widget gpt_widget %2$s">';
			$wrapper_after  = '</div>';
			$title_before   = '<h3 class="widget-title">';
			$title_after    = '</h3>';

			register_sidebar( array(
				'name'          => esc_html( 'Sidebar Main', 'gpt-news' ),
				'id'            => "sidebar_main-sidebar",
				'description'   => esc_html__( 'Add widget here to appear it in sidebar.', 'gpt-news' ),
				'before_widget' => $wrapper_before,
				'after_widget'  => $wrapper_after,
				'before_title'  => $title_before,
				'after_title'   => $title_after,
			) );


			// Register Footer Sidebar
			$footer_columns = array(
				array(
					'name' => esc_html__( 'Footer Column 1', 'gpt-news' ),
					'id'   => 'footer_column_1'
				),
				array(
					'name' => esc_html__( 'Footer Column 2', 'gpt-news' ),
					'id'   => 'footer_column_2'
				),
				array(
					'name' => esc_html__( 'Footer Column 3', 'gpt-news' ),
					'id'   => 'footer_column_3'
				),
				array(
					'name' => esc_html__( 'Footer Column 4', 'gpt-news' ),
					'id'   => 'footer_column_4'
				),
			);


			foreach ( $footer_columns as $key => $footer_column ) {
				register_sidebar( array(
					'name'          => $footer_column['name'],
					'id'            => $footer_column['id'],
					'description'   => esc_html__( 'This area will display in footer like a column. Add widget here to appear it in footer column.', 'gpt-news' ),
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
