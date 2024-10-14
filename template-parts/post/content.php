<?php
/**
 * Template part for displaying posts
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package mominul
 */

$content       = apply_filters( 'the_content', get_the_content() );
$meta          = get_post_meta( get_the_ID(), 'gpt-post-video', true );
$videothumb    = ! empty( $meta['video-thumbnail'] ) ? $meta['video-thumbnail'] : '';
$meta_gallery  = get_post_meta( get_the_ID(), 'gpt-post-gallery', true );
$category_list = get_the_category_list( ' ' );
$blog_word_limit = gpt_option('blog_word_limit');

$meta_author_show = gpt_option('blog_list_meta_author');
$meta_date_show = gpt_option('blog_list_meta_date');
$meta_comment_show = gpt_option('blog_list_meta_comment');
$meta_view_count_show = gpt_option('blog_list_meta_viewcount');
$meta_comment_show = gpt_option( 'blog_list_meta_categories' );

?>


<article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-post-list entry-post' ); ?>>

		<?php if ( has_post_thumbnail() ) : ?>
            <div class="post-thumbnail-wrapper">
				<?php Gpt_Theme_Helper::gpt_post_thumbnail(); ?>
            </div>
            <!-- /.post-thumbnail-wrapper -->
		<?php endif; ?>

        <div class="gpt-blog-content">
			<?php if ( 'post' === get_post_type() && $meta_comment_show ) : ?>
                <div class="mtp-post-meta-wrapper">
					<?php if ( $category_list ) : ?>
                        <div class="gpt-post-category">
							<?php echo wp_kses_post( $category_list ); ?>
                        </div>
					<?php endif; ?>
                </div><!-- .entry-meta -->
			<?php endif; ?>

			<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>


            <div class="entry-content">

                <div class="entry-meta-wrapper">
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
                </div><!-- /.entry-meta-wrapper -->

				<?php
				if ( ! is_singular() ) {
					echo wp_kses_post( wp_trim_words( $content, $blog_word_limit, '...' ) );
				} else {
					the_content();
				}
				?>

                <div class="read-more">
                    <a href="<?php the_permalink(); ?>" class="gpt-btn btn-outline btn-sm"><?php esc_html_e( 'Read More', 'gpt-news' ); ?><i
                                class="ri-arrow-right-line"></i></a>
                </div>

            </div><!-- /.entry-content -->


			<?php if ( is_singular() ) {
				wp_link_pages();
			} ?>
        </div><!-- /.entry-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

