<?php
/**
 * WP Editor Assets
 */
 function dpwpblocks_editor_assets() {	
	$name       = 'blocks';
	$filepath   = 'dist/' . $name;
	$asset_path = DPWPBLOCKS_ROOT_PATH . $filepath . '.asset.php';
	$asset_file = file_exists( $asset_path ) ? include $asset_path : array( 'dependencies' => array(), 'version' => '1.0', );
	$script_url = DPWPBLOCKS_ROOT_URL . $filepath . '.js';
	wp_register_script( 'dpwpblocks-editor', $script_url, array_merge( $asset_file['dependencies'], array( 'wp-api' ) ), $asset_file['version'], true );
}
add_action( 'init', 'dpwpblocks_editor_assets' );

/**
 * Register and enqueue Script & Style WP Front Side
 */
function wpdocs_enqueue_custom_public_style() {
	$name       = 'public';
	$filepath   = 'dist/' . $name;
	$asset_path = DPWPBLOCKS_ROOT_PATH . $filepath . '.asset.php';
	$asset_file = file_exists( $asset_path ) ? include $asset_path : array( 'dependencies' => array(), 'version' => '1.0', );
	$script_url = DPWPBLOCKS_ROOT_URL . 'dist/public.js';
	$style_url = DPWPBLOCKS_ROOT_URL . 'dist/public.scss.css';
	$v = $asset_file['version'];
	wp_enqueue_style( 'public-dpwpblocks-css', $style_url, array(), $v, 'all' );
	wp_enqueue_script( 'public-dpwpblocks-js', $script_url, array(), $v, 'all' );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_enqueue_custom_public_style' );

/**
 * Register and enqueue Script & Style WP Admin Side
 */
function wpdocs_enqueue_custom_admin_style() {
	$name       = 'admin';
	$filepath   = 'dist/' . $name;
	$asset_path = DPWPBLOCKS_ROOT_PATH . $filepath . '.asset.php';
	$asset_file = file_exists( $asset_path ) ? include $asset_path : array( 'dependencies' => array(), 'version' => '1.0', );
	$script_url = DPWPBLOCKS_ROOT_URL . 'dist/admin.js';
	$style_url = DPWPBLOCKS_ROOT_URL . 'dist/admin.scss.css';
	$v = $asset_file['version'];
	wp_enqueue_style( 'admin-dpwpblocks-css', $style_url, array(), $v, 'all' );
	wp_enqueue_script( 'admin-dpwpblocks-js', $script_url, array(), $v, 'all' );
}
add_action( 'admin_enqueue_scripts', 'wpdocs_enqueue_custom_admin_style' );

/**
 * Disabled Gutenberg blocks
 */
 function dp_blacklist_blocks() {
	// get all the registered blocks
	$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
	// then disable some of them
	unset( $blocks[ 'core/embed' ] );
	unset( $blocks[ 'mailchimp-for-wp/form' ] );
	unset( $blocks[ 'core/verse' ] );
	// return the new list of allowed blocks
	return array_keys( $blocks );	
}
add_filter( 'allowed_block_types_all', 'dp_blacklist_blocks' );

add_theme_support( 'align-wide' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'custom-units', 'rem', 'vw', 'vh', '%' );
