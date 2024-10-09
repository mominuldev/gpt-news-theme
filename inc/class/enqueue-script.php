<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @class        Gpt_Enqueue_Script
 * @version      1.0
 * @category     Class
 * @author       GptIslam
 */
class Gpt_Enqueue_Script {

	public $settings;
	protected static $instance = null;
	private $gtdu;
	private $use_minify;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function register_script() {
		$this->gtdu       = get_template_directory_uri();
		$this->use_minify = gpt_option( 'use_minify' ) ? '.min' : '';
		// Register action
		add_action( 'wp_enqueue_scripts', array( $this, 'css_reg' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'js_reg' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_css_reg' ) );
	}

	/* Register CSS */
	public function css_reg() {

		wp_enqueue_style( 'gpt-style_main', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

		/* Bootstrap CSS */
		wp_enqueue_style( 'bootstrap', $this->gtdu . '/assets/css/bootstrap.min.css' );
		wp_enqueue_style( 'font-awesome-six', $this->gtdu . '/assets/css/all.min.css', array(), '5.15.4' );
		wp_enqueue_style( 'remixicon', $this->gtdu . '/assets/css/remixicon.css' );
		wp_enqueue_style( 'preloder', $this->gtdu . '/assets/css/loader.min.css' );
		wp_enqueue_style( 'magnific-popup', $this->gtdu . '/assets/css/magnific-popup.css' );
		wp_enqueue_style( 'odometer', $this->gtdu . '/assets/css/odometer.min.css' );

		// Font Include
		wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=League+Spartan:wght@100..900&display=swap', [], '1.0.0' );


		// Main CSS
		wp_enqueue_style( 'gpt-style', $this->gtdu . '/assets/css/app.css' );

		// Custom Css
		$custom_css = gpt_option( 'custom-css' );

		if ( ! empty( $custom_css ) ) {
			wp_add_inline_style( 'gpt-style', $custom_css );
		}

		// WooCommerce CSS
		if ( GPT_WOOCOMMERCE_IS_ACTIVE ) {
			wp_enqueue_style( 'gpt-woocommerce', $this->gtdu . '/assets/css/woocommerce.css' );
		}

		// Preloader CSS
		$preloader_opt       = gpt_option( 'preloader' );
		$preloader_color_opt = gpt_option( 'preloader_color' );


		if ( ! empty( $preloader_opt ) ) {
			$color = ( ! empty( $preloader_color_opt ) ) ? $preloader_color_opt : 'rgba(150,41,230,0.97)';

			$preloader_css = '
                #preloader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-color: ' . esc_attr( $color ) . ';
                    z-index: 9999999;
                }

                #loader {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }';

			wp_add_inline_style( 'gpt-style', $preloader_css );
		}

	}

	/* Register JS */
	public function js_reg() {
		$smooth_scroll = gpt_option( 'smooth_scroll' );

		wp_enqueue_script( 'bootstrap', $this->gtdu . '/assets/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );
//		wp_enqueue_script( 'gsap', $this->gtdu . '/assets/js/gsap.min.js', array(), '1.0.0', true );
		wp_enqueue_script( 'appear', $this->gtdu . '/assets/js/jquery.appear.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'swiper', $this->gtdu . '/assets/js/swiper.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'magnefic-popup', $this->gtdu . '/assets/js/jquery.magnific-popup.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'header', $this->gtdu . '/assets/js/header.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script('odometer', $this->gtdu . '/assets/js/odometer.min.js', array('jquery' ), '1.0.0', true);



		// Lenis JS for Smooth Scroll
		wp_enqueue_script('lenis', 'https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js', array(), '1.0.0', true);
		// Page Loader Animation
//		wp_enqueue_script('barba', 'https://unpkg.com/@barba/core', array(), '1.0.0', true);
		wp_enqueue_script( 'gpt-theme', $this->gtdu . '/assets/js/app.js', array( 'jquery' ), false, true );

		if ( $smooth_scroll ) {
			wp_enqueue_script( 'smoothscroll', $this->gtdu . '/assets/js/smoothscroll.min.js', array( 'jquery' ), '3.1.12', true );
		}

		$gpt_scripts_vars_array = array(
			'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
			'nonce'   => wp_create_nonce( '_gpt_nonce' ),
		);

		wp_localize_script( 'gpt-theme', 'gpt_scripts_vars', $gpt_scripts_vars_array );

		//Comment Reply
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	public function admin_css_reg() {
		wp_enqueue_style( 'admin-font-awesome-five', $this->gtdu . '/assets/css/all.min.css' );
	}

}

if ( ! function_exists( 'gpt_enqueue_script' ) ) {
	function gpt_enqueue_script() {
		return Gpt_Enqueue_Script::instance();
	}
}

gpt_enqueue_script()->register_script();


