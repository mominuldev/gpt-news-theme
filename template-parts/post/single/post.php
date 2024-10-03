<?php
/**
 * Single Post Layout One
 */
$category_list = get_the_category_list( ' ' );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-single single-layout-two' ); ?>>
	<?php Gpt_Theme_Helper::gpt_post_thumbnail( 'full' ); ?>

    <div class="meta-wrapper">
	    <?php if ( 'post' === get_post_type() ) : ?>
            <div class="mtp-post-meta-wrapper">
			    <?php if ( $category_list ) : ?>
                    <div class="mtp-post-category">
					    <?php echo wp_kses_post( $category_list ); ?>
                    </div>
			    <?php endif; ?>
            </div><!-- .entry-meta -->
	    <?php endif; ?>
    </div>
    <!-- /.meta-wrapper -->

    <h2 class="single-post-title"><?php echo the_title(); ?></h2>

	<div class="entry-content">
		<?php the_content();
		// Page Break
		wp_link_pages( array(
		   'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'mominul' ),
		   'after'  => '</div>',
	    ) ); ?>

		<?php if(get_the_tag_list() ) : ?>
		<div class="entry-footer">
			<?php Gpt_Theme_Helper::gpt_posted_tag(); ?>
		</div>
		<!-- /.entry-footer -->
		<?php endif; ?>

		<?php if ( gpt_option( 'author_info' ) ) {
			Gpt_Theme_Helper::render_author_info();
		} ?>
	</div>
	<!-- /.entry-content -->

	<?php if ( gpt_option( 'share_post' ) ) {
		echo '<div class="share-link-wrapper">';
		    Gpt_Theme_Helper::render_post_list_share();
		echo '</div>';
	} ?>
</article><!-- #post-<?php the_ID(); ?> -->
