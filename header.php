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

<?php

if ( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
}

// Get Page Title
$page_title = get_the_title();
$header_style = gpt_option( 'header_style' );


//do_action( 'gpt_after_body' ); ?>

<div id="site-content" class="site">
    <a class="skip-link screen-reader-text"
       href="#content"><?php esc_html_e( 'Skip to content', 'gpt-news' ); ?></a>
	<?php

	get_template_part( 'template-parts/popup-search' );
	//Site Header
    if($header_style == 'header-one') {
        get_template_part( 'template-parts/header/header', 'one' );
    } elseif($header_style == 'header-two') {
        get_template_part( 'template-parts/header/header', 'two' );
    } elseif($header_style == 'header-three') {
        get_template_part( 'template-parts/header/header', 'three' );
    } else {
        get_template_part( 'template-parts/header/header', 'one' );
    }


	    get_template_part( 'template-parts/header/page-header' );


	?>

    <main id="main" class="site-main">
