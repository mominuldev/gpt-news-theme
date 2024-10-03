<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
* Gpt Theme Autoload
*
*
* @class        Gpt_Theme_Autoload
* @version      1.0
* @category     Class
* @author       GptIslam
*/

if (!class_exists('Gpt_Theme_Autoload')) {
    class Gpt_Theme_Autoload{

        private static $instance = null;
        public static function get_instance( ) {
            if ( null == self::$instance ) {
                self::$instance = new self( );
            }

            return self::$instance;
        }

        public function __construct () {

        	#Theme Helper
            $this->theme_helper();

            #Theme Enqueue Script
            $this->enqueue_script();

            #Theme Support
            $this->theme_support();

            #Theme option
            $this->theme_option();

            #Customize theme
            $this->walker_comment();

            #TGM init
            $this->tgm_register();

            #Mega Menu
            $this->menu();
        }

		public function enqueue_script(){
            require_once MP_THEME_DIR . '/inc/class/enqueue-script.php';
        }

        public function theme_helper(){
            require_once MP_THEME_DIR . '/inc/class/theme-helper.php';
        }

        public function theme_support(){
            require_once MP_THEME_DIR . '/inc/class/theme-support.php';
        }

        public function theme_option() {
	        require_once MP_THEME_DIR . '/inc/options/admin-option.php';
	        require_once MP_THEME_DIR . '/inc/options/meta-option.php';
	        require_once MP_THEME_DIR . '/inc/options/projects.php';
//	        require_once MP_THEME_DIR . '/inc/options/menu.php';
	        // Widgets
			 require_once MP_THEME_DIR . '/inc/options/widgets/widget-contact-info.php';
        }

        public function walker_comment(){
            require_once MP_THEME_DIR . '/inc/class/walker-comment.php';
        }

        public function tgm_register(){
             require_once MP_THEME_DIR . '/inc/tgm/init.php';
        }

        public function menu(){
             require_once MP_THEME_DIR . '/inc/class/menus.php';
        }

    }
    new Gpt_Theme_Autoload();
}
