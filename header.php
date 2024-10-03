<?php
/**
 * header.php
 * The header for the theme.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >


<?php if( mpt_option('preloader_switch')) : ?>
    <div class="preloader" id="preloader">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" version="1.1">
            <path d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"></path>
        </svg>
        <div class="inner">
            <canvas class="progress-bar" id="progress-bar" width="200" height="200"></canvas>
            <small>Loading</small>
        </div>
        <!-- end inner -->
    </div>
<!-- end preloder -->

<?php endif; ?>

<?php

if ( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
}

// Get Page Title
$page_title = get_the_title();


do_action( 'mominul_after_body' ); ?>

<div id="site-content" class="site">
    <a class="skip-link screen-reader-text"
       href="#content"><?php esc_html_e( 'Skip to content', 'mominul' ); ?></a>
	<?php

	get_template_part( 'template-parts/popup-search' );
	//Site Header
    get_template_part( 'template-parts/header/header', 'default' );
	get_template_part( 'template-parts/header/page-header' );

	?>

    <main id="main" class="site-main">
