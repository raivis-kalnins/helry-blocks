<?php

/**
 * Plugin Name: DP WordPress Gutenberg Blocks
 * Description: This plugin registers custom blocks for the block editor and extra stailing for common Gutenberg blocks
 * Version: 1.1.0
 * Author: DP
 *
 * @package dpwpblocks
 */

defined( 'ABSPATH' ) || exit;

define('DPWPBLOCKS_ROOT_PATH', plugin_dir_path(__FILE__));
define('DPWPBLOCKS_ROOT_URL', plugin_dir_url(__FILE__));

require_once 'inc/editor-assets.php';
require_once 'inc/register-blocks.php';