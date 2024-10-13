<div class="topbar-trending-post">
	<div class="swiper-container swiper trending-post-slider">
		<div class="swiper-wrapper">

			<?php

				$posts = new WP_Query( array(
					'post_type'      => 'post',
					'posts_per_page' => 5,
					'order'          => 'DESC',
					'ignore_sticky_posts' => 1,
					'meta_key' => 'post_views_count',
					'orderby' => 'meta_value_num'
				) );

				if ( $posts->have_posts() ) :
					while ( $posts->have_posts() ) :
						$posts->the_post();
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
					endwhile;
					wp_reset_postdata();
				endif;

			?>
		</div>
	</div>
	<!-- /.swiper-container swiper trending-post-slider -->
</div>
<!-- /.topbar-trending-post -->