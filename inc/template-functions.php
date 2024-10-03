<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package mominul
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function gpt_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'main-sidebar' ) ) {
		$classes[] = 'no-sidebar';
	}

	// Canvas Header Layout
	$header_layout = gpt_option( 'header_layout', 'default' );
	$meta  = get_post_meta( get_the_ID(), 'gpt_page_options',  true );

	$meta_header_type = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '';

	if ( $meta_header_type ) {
		$layout = $meta['meta_header_layout'];
	} else {
		$layout = $header_layout;
	}

	if ( 'canvas' == $layout) {
		$classes[] = 'canvas-header';
	}


	return $classes;
}
add_filter( 'body_class', 'gpt_body_classes' );


/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function mominulo_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'mominulo_pingback_header' );


if ( ! function_exists( 'gpt_get_title_tag' ) ) {
	/**
	 * Returns array of title tags
	 *
	 * @param bool $first_empty
	 * @param array $additional_elements
	 *
	 * @return array
	 */
	function gpt_get_title_tag( $first_empty = false, $additional_elements = array() ) {
		$title_tag = array();

		if ( $first_empty ) {
			$title_tag[''] = esc_html__( 'Default', 'mominul' );
		}

		$title_tag['h1'] = 'h1';
		$title_tag['h2'] = 'h2';
		$title_tag['h3'] = 'h3';
		$title_tag['h4'] = 'h4';
		$title_tag['h5'] = 'h5';
		$title_tag['h6'] = 'h6';

		if ( ! empty( $additional_elements ) ) {
			$title_tag = array_merge( $title_tag, $additional_elements );
		}

		return $title_tag;
	}
}

function gpt_get_elementor_templates() {
	$elementor_templates = array();

	if ( in_array( 'elementor/elementor.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
		$elementor_templates = \Elementor\Plugin::instance()->templates_manager->get_source( 'local' )->get_items();
	}

	return $elementor_templates;
}

add_action('gpt_after_footer', 'gpt_get_elementor_templates');