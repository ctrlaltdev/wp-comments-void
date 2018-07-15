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

class comment_into_the_void {
  static function form_assets() {
    wp_enqueue_script('wpcv-form');
  }

  static function list_assets() {
    wp_enqueue_script('wpcv-list');
  }
}

add_action('comment_form', array('comment_into_the_void', 'form_assets'));

wp_register_script('wpcv-form', plugin_dir_url(__FILE__) . 'js/wpcv-form.js', null, null, true);
wp_register_script('wpcv-list', plugin_dir_url(__FILE__) . 'js/wpcv-list.js', null, null, true);