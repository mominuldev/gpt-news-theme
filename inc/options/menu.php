<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = '_mominul_menu_options';

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
				'title'       => __('Mega Menu Width', 'mominul'),
				'placeholder' => __('Select an option', 'mominul'),
				'options'     => array(
					'single_width'  => __('Single', 'mominul'),
					'menu_half_width'  => __('Half Width', 'mominul'),
					'menu_full_width'  => __('Full Width', 'mominul'),
				),
				'default'     => 'option-2'
			),
		)
	) );

}
