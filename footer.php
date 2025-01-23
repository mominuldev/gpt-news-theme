<?php
/**
 * The template for displaying the footer
 * Contains the closing of the #content div and all content after.
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package Gpt
 */


do_action( 'pps_before_footer' );



get_template_part( 'template-parts/footer/footer-one' );

do_action( 'pps_after_footer' );

wp_footer(); ?>

</main><!-- /#site-main -->
</div><!-- /#site-content -->

</body>
</html>
