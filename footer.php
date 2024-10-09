<?php
/**
 * The template for displaying the footer
 * Contains the closing of the #content div and all content after.
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package Gpt
 */


$meta               = get_post_meta( get_the_ID(), 'gpt_page_options', true );
$meta_footer_option = isset( $meta['meta_footer_type'] ) ? $meta['meta_footer_type'] : '';

$f_style      = gpt_option( 'footer_style' );
$footer_style = '';

$meta_footer = isset( $meta['meta_footer_style'] ) ? $meta['meta_footer_style'] : '';

if ( $meta_footer_option == true || $meta_footer_option == 1 ) {
	$footer_style .= $meta_footer;
} else {
	$footer_style .= $f_style;
}

$d1 = DateTime::createFromFormat( 'm/d/Y', '' );
$d1 = new DateTime;

$d1->getTimestamp();


if ( $footer_style && ( get_post( $footer_style ) ) && in_array( 'elementor/elementor.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) { ?>

	<?php $elementor_instance = Elementor\Plugin::instance(); ?>
    <footer id="gpt-footer" class="gpt-footer <?php echo esc_attr( get_post( $footer_style )->post_name ); ?>">
		<?php echo Gpt_Theme_Helper::gpt_render_footer( $footer_style ); ?>
    </footer>
<?php } else {
	get_template_part( 'template-parts/footer/footer-one' );
}

do_action( 'gpt_after_footer' );

wp_footer(); ?>

</main><!-- /#site-main -->
</div><!-- /#site-content -->

</body>
</html>
