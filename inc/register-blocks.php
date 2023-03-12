<?php

function dpwpblocks_register_blocks() {

	// Return early if this function does not exist.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$components = [
		'column',
        'cta-card',
		'pricecard',
		'pre-heading',
		'event-details',
		'row-section',
		'column',
		'button-boot'
	];

	dpwpblocks_register_block_array( $components );
}

add_action( 'init', 'dpwpblocks_register_blocks', 99 );

function dpwpblocks_register_block_array( Array $blockList ) {

	foreach ( $blockList as $blockName ) {

		register_block_type(

			'dpwpblocks' . '/' . $blockName,

			array(
				'editor_script' => 'dpwpblocks' . '-editor',
				'editor_style'  => 'dpwpblocks' . '-editor',
				'style'         => 'dpwpblocks' . '-frontend',
			)
		);
	}
}
