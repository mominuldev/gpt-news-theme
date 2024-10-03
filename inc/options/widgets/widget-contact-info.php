<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Create a widget 1
	//
	CSF::createWidget( 'mpt_contact_info', array(
		'title'       => 'MPT Contact Info',
		'classname'   => 'mpt_contact_info',
		'description' => 'A widget for footer contact info.',
		'fields'      => array(

			array(
				'id'      => 'title',
				'type'    => 'text',
				'title'   => 'Title',
			),

		    // Contact Info Field Group
			array(
				'id'     => 'contact_info',
				'type'   => 'repeater',
				'title'  => __('Contact Info', 'mpt-core'),
				'fields' => array(

					// Icon Field
					array(
						'id'    => 'contact_icon',
						'type'  => 'icon',
						'title' => __('Icon', 'mpt-core'),
					),


					array(
						'id'    => 'contact_text',
						'type'  => 'text',
						'title' => __('Contact Info', 'mpt-core'),
					),

					// Link Field
					array(
						'id'    => 'contact_link',
						'type'  => 'text',
						'title' => __('Link', 'mpt-core'),
					),

				),
			),
		)
	) );

	//
	// Front-end display of widget example 1
	// Attention: This function named considering above widget base id.
	//
	if( ! function_exists( 'mpt_contact_info' ) ) {
		function mpt_contact_info( $args, $instance ) {

			echo $args['before_widget'];

			if ( ! empty( $instance['title'] ) ) {
				echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
			}

			// Output
			if ( ! empty( $instance['contact_info'] ) ) {
				echo '<ul class="contact-info">';
				foreach ( $instance['contact_info'] as $contact_info ) {
					echo '<li>';
					if ( ! empty( $contact_info['contact_icon'] ) ) {
						echo '<i class="' . esc_attr( $contact_info['contact_icon'] ) . '"></i>';
					}
					if ( ! empty( $contact_info['contact_text'] ) ) {
						if ( ! empty( $contact_info['contact_link'] ) ) {
							echo '<a href="' . $contact_info['contact_link'] . '">' . esc_html( $contact_info['contact_text'] ) . '</a>';
						} else {
							echo esc_html( $contact_info['contact_text'] );
						}
					}
					echo '</li>';
				}
				echo '</ul>';
			}

			echo $args['after_widget'];

		}
	}

}
