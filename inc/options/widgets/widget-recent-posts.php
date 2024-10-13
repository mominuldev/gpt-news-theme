<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Create a widget 1
	//
	CSF::createWidget( 'widget_recent_posts', array(
		'title'       => 'Gpt Post',
		'classname'   => 'widget_recent_posts',
		'description' => 'A widget for sidebar social links.',
		'fields'      => array(

			array(
				'id'      => 'title',
				'type'    => 'text',
				'title'   => 'Title',
			),

			// Post Query Type
			array(
				'id'      => 'post_query_type',
				'type'    => 'select',
				'title'   => 'Post Query Type',
				'options' => array(
					'latest' => 'Recent',
					'popular' => 'Popular',
					'random' => 'Random',
				),
			),

			// Post Count
			array(
				'id'      => 'post_count',
				'type'    => 'number',
				'title'   => 'Post Count',
				'default' => 5,
			),

			// Post Category
			array(
				'id'      => 'post_category',
				'type'    => 'select',
				'title'   => 'Post Category',
				'options' => 'categories',
			),

			// Post Tag
			array(
				'id'      => 'post_tag',
				'type'    => 'select',
				'title'   => 'Post Tag',
				'options' => 'tags',
			),

			// Post Order
			array(
				'id'      => 'post_order',
				'type'    => 'select',
				'title'   => 'Post Order',
				'options' => array(
					'asc' => 'Ascending',
					'desc' => 'Descending',
				),
			),

			// Post Order By

			array(
				'id'      => 'post_order_by',
				'type'    => 'select',
				'title'   => 'Post Order By',
				'options' => array(
					'date' => 'Date',
					'title' => 'Title',
					'rand' => 'Random',
				),
			),

			// Post Offset
			array(
				'id'      => 'post_offset',
				'type'    => 'number',
				'title'   => 'Post Offset',
				'default' => 0,
			),

			// Post Exclude
			array(
				'id'      => 'post_exclude',
				'type'    => 'text',
				'title'   => 'Post Exclude',
			),

			// Post Include
			array(
				'id'      => 'post_include',
				'type'    => 'text',
				'title'   => 'Post Include',
			),

			// Show Post Date
			array(
				'id'      => 'show_post_date',
				'type'    => 'switcher',
				'title'   => 'Show Post Date',
				'default' => true,
			),

			// Show Post view count
			array(
				'id'      => 'show_post_view_count',
				'type'    => 'switcher',
				'title'   => 'Show Post view count',
				'default' => true,
			),


		)
	) );

	//
	// Front-end display of widget example 1
	// Attention: This function named considering above widget base id.
	//
	if( ! function_exists( 'widget_recent_posts' ) ) {
		function widget_recent_posts( $args, $instance ) {

			echo $args['before_widget'];

			if ( ! empty( $instance['title'] ) ) {
				echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
			}

			$post_args = array(
				'post_type' => 'post',
				'posts_per_page' => $instance['post_count'],
				'order' => $instance['post_order'],
				'orderby' => $instance['post_order_by'],
				'offset' => $instance['post_offset'],
				'ignore_sticky_posts' => 1,
			);

			if( $instance['post_query_type'] == 'latest' ) {
				$post_args['orderby'] = 'date';
			}
            elseif( $instance['post_query_type'] == 'popular' ) {
				$post_args['meta_key'] = 'post_views_count';
				$post_args['orderby'] = 'meta_value_num';
			}
            elseif( $instance['post_query_type'] == 'random' ) {
				$post_args['orderby'] = 'rand';
			}

//			if( !empty( $instance['post_category'] ) ) {
//				$post_args['category__in'] = array( $instance['post_category'] );
//			}

//			if( !empty( $instance['post_tag'] ) ) {
//				$post_args['tag__in'] = array( $instance['post_tag'] );
//			}

			if( !empty( $instance['post_exclude'] ) ) {
				$post_args['post__not_in'] = explode( ',', $instance['post_exclude'] );
			}

			if( !empty( $instance['post_include'] ) ) {
				$post_args['post__in'] = explode( ',', $instance['post_include'] );
			}

			$posts = new WP_Query( $post_args );

			if( $posts->have_posts() ) {
				echo '<div class="blog-post-items">';
				while( $posts->have_posts() ) {
					$posts->the_post(); ?>

                    <div class="blog-list">
						<div class="blog-list__image">
							<a href="<?php the_permalink(); ?>">
								<?php
								if (has_post_thumbnail()) {
									the_post_thumbnail('gpt-blog-list_300x185', ['alt' => get_the_title()]);
								} else { ?>
									<img src="https://via.placeholder.com/410x290" alt="Placeholder">
								<?php } ?>
							</a>
						</div>
						<div class="blog-list__content">
							<h3 class="blog-list__title blog-title-hover">
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</h3>

							<div class="meta-wrapper">
								<?php if ($instance['show_post_date']) : ?>
									<span class="gpt-blog__meta-date">
										<i class="ri-time-line"></i>
										<span><?php echo get_the_date('M d, Y'); ?></span>
									</span>
								<?php endif; ?>

								<?php if( $instance['show_post_view_count']) : ?>
									<span class="gpt-blog__meta-view-count">
										<i class="ri-eye-line"></i>
										<span><?php echo get_post_meta(get_the_ID(), 'post_views_count', true); ?> Views</span>
									</span>
								<?php endif; ?>
							</div>
						</div>
					</div>

                    <?php
				}
				echo '</div>';
			}

			wp_reset_postdata();

			echo $args['after_widget'];

		}
	}

}
