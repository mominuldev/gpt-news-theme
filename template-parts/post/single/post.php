<?php
/**
 * Single Post Layout One
 */




?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-single single-layout-two' ); ?>>

	<?php PPS_Theme_Helper::pps_post_thumbnail( 'full' ); ?>

	<div class="entry-content">
		<?php the_content();
		// Page Break
		wp_link_pages( array(
		   'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pps-passport' ),
		   'after'  => '</div>',
	    ) ); ?>


		<div class="entry-footer">
			<?php if(get_the_tag_list() ) : ?>
			    <?php PPS_Theme_Helper::pps_posted_tag(); ?>
			<?php endif; ?>

			<?php if ( pps_option( 'share_post' ) ) {
				echo '<div class="share-link-wrapper">';
				PPS_Theme_Helper::render_post_list_share();
				echo '</div>';
			} ?>
		</div>
		<!-- /.entry-footer -->


		<?php if ( pps_option( 'author_info' ) ) {
			PPS_Theme_Helper::render_author_info();
		} ?>
	</div>
	<!-- /.entry-content -->


</article><!-- #post-<?php the_ID(); ?> -->
