
<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Mominul
 */
get_header();

$sidebar = Mominul_Theme_Helper::render_sidebars('blog');
$row_class = $sidebar['row_class'];
$column = $sidebar['column'];

?>
<div class="blog-content-area">
    <div class="container">
        <div class="blog-archive-wrapper">
            <div class="row<?php echo apply_filters('mominul_row_class', $row_class); ?>">
                <div id='main-content' class="col-md-<?php echo apply_filters('mominul_column_class', $column); ?>">
                    <?php  if ( have_posts() ) :
                    get_template_part( 'template-parts/post/posts-list');
                    else :
                        get_template_part( 'template-parts/content', 'none' );
                    endif;  ?>
                </div>
                <?php
                echo (isset($sidebar['content']) && !empty($sidebar['content']) ) ? $sidebar['content'] : '';
            ?>
            </div>
        </div>
        <!-- /.blog-archive-wrapper -->
    </div><!-- /.container -->

    <?php Mominul_Theme_Helper::mominul_post_pagination(); ?>

</div><!-- .content-area -->

<?php

get_footer();
