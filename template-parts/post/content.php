<?php
/**
 * Template part for displaying posts
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package mominul
 */

$content       = apply_filters( 'the_content', get_the_content() );
$meta          = get_post_meta( get_the_ID(), 'mominul-post-video', true );
$videothumb    = ! empty( $meta['video-thumbnail'] ) ? $meta['video-thumbnail'] : '';
$meta_gallery  = get_post_meta( get_the_ID(), 'mominul-post-gallery', true );
$category_list = get_the_category_list( ' ' );
?>


<article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-post-list entry-post' ); ?>>

	<?php if ( has_post_thumbnail() ) : ?>
        <div class="post-thumbnail-wrapper">
			<?php Gpt_Theme_Helper::gpt_post_thumbnail(); ?>
        </div>
        <!-- /.post-thumbnail-wrapper -->
	<?php endif; ?>

    <div class="gpt-blog-content">
		<?php if ( 'post' === get_post_type() ) : ?>
            <div class="mtp-post-meta-wrapper">
				<?php if ( $category_list ) : ?>
                    <div class="mtp-post-category">
						<?php echo wp_kses_post( $category_list ); ?>
                    </div>
				<?php endif; ?>
            </div><!-- .entry-meta -->
		<?php endif; ?>

		<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
		<?php Gpt_Theme_Helper::gpt_posted_author_avatar(); ?>

		<?php if ( is_singular() ) {
			wp_link_pages();
		} ?>
    </div><!-- /.entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
