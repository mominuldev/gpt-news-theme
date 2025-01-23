<?php
/**
 * The template for displaying all single posts
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package Gpt
 */

get_header();

$sidebar       = PPS_Theme_Helper::render_sidebars( 'single' );
$row_class     = $sidebar['row_class'];
$column        = $sidebar['column'];
$sidebar_class = $sidebar['layout'] == 'none' ? 'no-sidebar' : '';

$google_adsense      = pps_option( 'single_adsense' );
$google_adsense_code = pps_option( 'single_adsense_code' );

$meta_date_show = pps_option( 'blog_single_meta_date' );
$meta_comment_show = pps_option( 'blog_single_meta_comments' );
$meta_comment_show = pps_option( 'blog_single_meta_categories' );
$meta_view_count_show = pps_option( 'blog_single_meta_viewcount' );
$meta_author_show = pps_option( 'blog_single_meta_author' );
$category_list = get_the_category_list( ' ' );

while ( have_posts() ) :
	the_post();
?>

    <div class="blog-single-header">
        <div class="container text-center">
            <div class="meta-wrapper justify-content-center">
		        <?php if ( 'post' === get_post_type() && $meta_comment_show ) : ?>
                    <div class="mtp-post-meta-wrapper">
				        <?php if ( $category_list ) : ?>
                            <div class="pps-post-category">
						        <?php echo wp_kses_post( $category_list ); ?>
                            </div>
				        <?php endif; ?>
                    </div><!-- .entry-meta -->
		        <?php endif; ?>
            </div>
            <!-- /.meta-wrapper -->

            <h1 class="single-post-title"><?php echo the_title(); ?></h1>

            <ul class="entry-meta justify-content-center">

		        <?php if ( $meta_author_show ) : ?>
                    <li>
				        <?php PPS_Theme_Helper::pps_posted_author_avatar(get_the_ID()); ?>
                    </li>
		        <?php endif; ?>

		        <?php if ( $meta_date_show ) : ?>
                    <li>
                        <i class="ri-calendar-2-line"></i>
				        <?php PPS_Theme_Helper::pps_posted_on(); ?>
                    </li>
		        <?php endif; ?>

		        <?php if ( $meta_comment_show ) : ?>

                    <li>
                        <i class="ri-message-2-line"></i>
				        <?php PPS_Theme_Helper::pps_entry_comments(get_the_ID()); ?>
                    </li>
		        <?php endif; ?>

		        <?php if ( $meta_view_count_show ) : ?>
                    <li>
                        <i class="ri-eye-line"></i>

                        <?php
                            echo PPS_Theme_Helper::pps_content_reading_time(get_the_content());
                        ?>
                    </li>
		        <?php endif; ?>
            </ul><!-- .entry-meta -->
        </div>
    </div>

    <?php
    endwhile; // End of the loop.
    ?>

    <div class="blog-single-content-area">
        <div class="container <?php echo esc_attr( $sidebar_class ); ?>">
            <div class="blog-single-wrapper">
                <div class="row <?php echo apply_filters( 'pps_row_class', $row_class ); ?>">
                    <div class="col-lg-<?php echo apply_filters( 'pps_column_class', $column ); ?>">
						<?php while ( have_posts() ) :
							the_post();
							get_template_part( 'template-parts/post/single/post' );
						endwhile; // End of the loop.

						// Google Adsense
						if ( $google_adsense == true && ! empty( $google_adsense_code ) ) {
							echo '<div class="pps-adsense">';
							echo $google_adsense_code;
							echo '</div>';
						}

						if ( pps_option( 'single_post_nav' ) == true ) {
							PPS_Theme_Helper::pps_post_nav();
						}

						if ( pps_option( 'single_related_post' ) == true ) {
							PPS_Theme_Helper::related_post();
						}

						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif; ?>

                    </div><!-- /.col-md-8 -->
					<?php
					echo ( isset( $sidebar['content'] ) && ! empty( $sidebar['content'] ) ) ? $sidebar['content'] : '';
					?>
                </div><!-- /.row -->
            </div>
            <!-- /.blog-archive-wrapper -->
        </div><!-- /.container -->
    </div><!-- #primary -->

<?php
get_footer();