<?php
/*
Plugin Name:  Comment into the Void
Plugin URI:   https://ctrlaltdev.xyz/wp-comments-void
Description:  Send the comments into the void. Users will only see their comments, as they are never sent to the server.
Version:      1.0.0
Author:       Yorick <yorick@ctrlaltdev.xyz>
Author URI:   https://ctrlaltdev.xyz
License:      MPL-2.0
License URI:  https://www.mozilla.org/en-US/MPL/2.0/
Text Domain:  comments-void
Domain Path:  /languages
*/

wp_register_script('comments-void', plugin_dir_url(__FILE__) . 'comments-void.js', null, null, true);
wp_register_style( 'comments-void', plugin_dir_url(__FILE__) . 'comments-void.css' );