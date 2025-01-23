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
function pps_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'main-sidebar' ) ) {
		$classes[] = 'no-sidebar';
	}

	// Canvas Header Layout
	$header_layout = pps_option( 'header_layout', 'default' );
	$meta  = get_post_meta( get_the_ID(), 'pps_page_options',  true );

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
add_filter( 'body_class', 'pps_body_classes' );


/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function pps_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'pps_pingback_header' );

