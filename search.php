<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Gpt
 */

get_header();

$sidebar = PPS_Theme_Helper::render_sidebars();
$row_class = $sidebar['row_class'];
$column = $sidebar['column'];

?>

<div class="content-area search-page">
    <div class="container">
        <header class="search-header">
           <div class="row">
               <div class="col-md-12">
                   <h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'pps-passport' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
               </div>

           </div>
        </header>
       <div class="row<?php echo apply_filters('pps_row_class', $row_class); ?>">
            <div id='main-content' class="col-md-<?php echo apply_filters('pps_column_class', $column); ?>">

                <?php
                 if ( have_posts() ) :

	                 if( pps_option('blog_style') == 'grid' ) {
		                 get_template_part( 'template-parts/post/posts-grid');
	                 } else {
		                 get_template_part( 'template-parts/post/posts-list');
	                 }
                     ?>

                    <?php else : ?>
                    <div class="search_page_404_wrapper">
                        <header class="search-header-404">
                            <h2 class="page-title"><?php esc_html_e( 'Nothing Found', 'pps-passport' ); ?></h2>
                        </header>

                        <div class="pps-page-content">
                            <?php if ( is_search() ) : ?>
                                <p class="banner_404_text">
                                    <?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'pps-passport' ); ?>
                                </p>
                                <div class="search_result_form text-center">
                                    <?php get_search_form(); ?>
                                </div>
                                <div class="pps_home_button">
                                    <a class="pps-btn btn-round" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Take me home', 'pps-passport'); ?></a>
                                </div>
                            <?php else : ?>
                                <p class="banner_404_text">
                                    <?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'pps-passport' ); ?>
                                </p>
                                <div class="search_result_form text-center">
                                    <?php get_search_form(); ?>
                                </div>

                                <div class="pps_404_button ">
                                    <a class="pps-btn btn-round" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Take me home', 'pps-passport'); ?></a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php

                endif;
                ?>

                <?php PPS_Theme_Helper::pps_post_pagination(); ?>
            </div>
            <?php echo (isset($sidebar['content']) && !empty($sidebar['content']) ) ? $sidebar['content'] : ''; ?>
        </div>
    </div><!-- /.container -->
</div><!-- .content-area -->

<?php

get_footer();
