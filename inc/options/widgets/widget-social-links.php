<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Create a widget 1
	//
	CSF::createWidget( 'gpt_social_links', array(
		'title'       => 'Gpt Social Links',
		'classname'   => 'gpt_social_links',
		'description' => 'A widget for sidebar social links.',
		'fields'      => array(

			array(
				'id'      => 'title',
				'type'    => 'text',
				'title'   => 'Title',
			),

		    // Switcher Field
			array(
				'id' => 'show_social_links',
				'type' => 'switcher',
				'title' => 'Show Social Links',
				'default' => true,
			),

		)
	) );

	//
	// Front-end display of widget example 1
	// Attention: This function named considering above widget base id.
	//
	if( ! function_exists( 'gpt_social_links' ) ) {
		function gpt_social_links( $args, $instance ) {

			echo $args['before_widget'];

			if ( ! empty( $instance['title'] ) ) {
				echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
			}

			// Output generated fields
			$social_links = gpt_option( 'social_links' );

			if ( $instance['show_social_links'] && ! empty( $social_links ) ) {
				?>
				<div class="footer-contact-info">
					<ul class="social-links">
						<?php foreach ( $social_links as $social_link ) : ?>
							<li>
								<a href="<?php echo esc_url( $social_link['url'] ); ?>" target="_blank">
									<i class="<?php echo $social_link['icon']; ?>"></i>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
				<?php
			}

			echo $args['after_widget'];

		}
	}

}
