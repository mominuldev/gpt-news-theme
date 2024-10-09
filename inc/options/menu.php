<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = '_gpt_menu_options';

	//
	// Create profile options
	CSF::createNavMenuOptions( $prefix, array(
		'data_type' => 'serialize', // The type of the database save options. `serialize` or `unserialize`
	) );

	//
	// Create a section
	CSF::createSection( $prefix, array(
		'fields' => array(
			array(
				'id'          => 'class',
				'type'        => 'select',
				'title'       => __('Mega Menu Width', 'gpt-news'),
				'placeholder' => __('Select an option', 'gpt-news'),
				'options'     => array(
					'single_width'  => __('Single', 'gpt-news'),
					'menu_half_width'  => __('Half Width', 'gpt-news'),
					'menu_full_width'  => __('Full Width', 'gpt-news'),
				),
				'default'     => 'option-2'
			),
		)
	) );

}
