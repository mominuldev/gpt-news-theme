<?php
/**
 * Single Post Layout One
 */
$category_list = get_the_category_list( ' ' );
$meta_author_show = gpt_option( 'blog_single_meta_author' );
$meta_date_show = gpt_option( 'blog_single_meta_date' );
$meta_comment_show = gpt_option( 'blog_single_meta_comments' );
$meta_comment_show = gpt_option( 'blog_single_meta_categories' );
$meta_view_count_show = gpt_option( 'blog_single_meta_viewcount' );

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-single single-layout-two' ); ?>>
	<?php Gpt_Theme_Helper::gpt_post_thumbnail( 'full' ); ?>

    <div class="meta-wrapper">

        <?php if ( 'post' === get_post_type() && $meta_comment_show ) : ?>
            <div class="mtp-post-meta-wrapper">
                <?php if ( $category_list ) : ?>
                    <div class="gpt-post-category">
                        <?php echo wp_kses_post( $category_list ); ?>
                    </div>
                <?php endif; ?>
            </div><!-- .entry-meta -->
        <?php endif; ?>

    </div>
    <!-- /.meta-wrapper -->

    <h2 class="single-post-title"><?php echo the_title(); ?></h2>

    <ul class="entry-meta">

        <?php if ( $meta_author_show ) : ?>
            <li>
                <?php Gpt_Theme_Helper::post_author_by(); ?>
            </li>
        <?php endif; ?>

        <?php if ( $meta_date_show ) : ?>
            <li>
                <i class="ri-calendar-2-line"></i>
                <?php Gpt_Theme_Helper::gpt_posted_on(); ?>
            </li>
        <?php endif; ?>

        <?php if ( $meta_comment_show ) : ?>

        <li>
            <i class="ri-message-2-line"></i>
            <?php Gpt_Theme_Helper::gpt_entry_comments(get_the_ID()); ?>
        </li>
        <?php endif; ?>

        <?php if ( $meta_view_count_show ) : ?>
            <li>
                <i class="ri-eye-line"></i>
                <span><?php echo get_post_meta(get_the_ID(), 'post_views_count', true); ?> Views</span>
            </li>
        <?php endif; ?>
    </ul><!-- .entry-meta -->

	<div class="entry-content">
		<?php the_content();
		// Page Break
		wp_link_pages( array(
		   'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'gpt-news' ),
		   'after'  => '</div>',
	    ) ); ?>

		<?php if(get_the_tag_list() ) : ?>
		<div class="entry-footer">
			<?php Gpt_Theme_Helper::gpt_posted_tag(); ?>

			<?php if ( gpt_option( 'share_post' ) ) {
				echo '<div class="share-link-wrapper">';
				Gpt_Theme_Helper::render_post_list_share();
				echo '</div>';
			} ?>
		</div>
		<!-- /.entry-footer -->
		<?php endif; ?>

		<?php if ( gpt_option( 'author_info' ) ) {
			Gpt_Theme_Helper::render_author_info();
		} ?>
	</div>
	<!-- /.entry-content -->


</article><!-- #post-<?php the_ID(); ?> -->
