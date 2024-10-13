<div class="topbar-trending-post">
    <div class="swiper-container swiper trending-post-slider">
        <div class="swiper-wrapper">

			<?php

            $posts = get_posts( array(
                'post_type'      => 'post',
                'posts_per_page' => 5,
                'order'          => 'DESC',
                'ignore_sticky_posts' => 1,
                'meta_key' => 'post_views_count',
                'orderby' => 'meta_value_num'
            ) );

			if ( $posts ) :
                foreach ( $posts as $post ) :
                    setup_postdata( $post );
                    ?>
                    <div class="swiper-slide">
                        <div class="trending-post-item">
                            <h3 class="trending-post-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                        </div>
                        <!-- /.trending-post-item -->
                    </div>
                    <?php
                endforeach;
				wp_reset_postdata(); // Reset post data here
			endif;
			?>
        </div>
    </div>
    <!-- /.swiper-container swiper trending-post-slider -->
</div>
<!-- /.topbar-trending-post -->