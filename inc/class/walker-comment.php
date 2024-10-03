<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
* Mominul Walker Comment
*
*
* @class        Mominul_Walker_Comment
* @version      1.0
* @category     Class
* @author       MominulIslam
*/

if (!class_exists('Mominul_Walker_Comment')) {
    class Mominul_Walker_Comment extends Walker_Comment {
        public function start_el( &$output, $comment, $depth = 0, $args = array(), $id = 0 ) {
            $depth++;
            $GLOBALS['comment_depth'] = $depth;
            $GLOBALS['comment']       = $comment;
            if ( ! empty( $args['callback'] ) ) {
                ob_start();
                call_user_func( $args['callback'], $comment, $args, $depth );
                $output .= ob_get_clean();
                return;
            }
            if ( ( 'pingback' == $comment->comment_type || 'trackback' == $comment->comment_type ) && $args['short_ping'] ) {
                ob_start();
                $this->ping( $comment, $depth, $args );
                $output .= ob_get_clean();
            } else {
                ob_start();
                $this->comment( $comment, $depth, $args );
                $output .= ob_get_clean();
            }
        }


        protected function ping( $comment, $depth, $args ) {
            $tag = ( 'div' == $args['style'] ) ? 'div' : 'li'; ?>

            <<?php echo Mominul_Theme_Helper::render_html($tag); ?> id="comment-<?php comment_ID(); ?>" <?php comment_class( '', $comment ); ?>>
                <div class="comment-body stand_comment">
                    <?php esc_html_e( 'Pingback:', 'mominul' ); ?> <?php comment_author_link( $comment ); ?> <?php edit_comment_link( esc_html__( '(Edit)', 'mominul' ), '<span class="edit-link">', '</span>' ); ?>
                </div>
        <?php }

        protected function comment( $comment, $depth, $args ) {
            $max_depth_comment = ($args['max_depth'] > 4 ? 4 : $args['max_depth']);

            $GLOBALS['comment'] = $comment; ?>
            <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
            <div id="comment-<?php comment_ID(); ?>" class="comment-body">

                <div class="comment-avatar">
                    <?php echo get_avatar($comment->comment_author_email, 60); ?>
                </div>
                <div class="comment_info">
                    <div class="comment_author_says"><?php printf('%s', get_comment_author_link()) ?></div>

                    <div class="meta-wrapper">
                        <span><?php printf('%1$s', get_comment_date()) ?></span>
                        <?php edit_comment_link('<span>('.esc_html__('Edit', 'mominul').')</span>', '  ', '') ?>
                    </div>

                    <div class="comment_content">
                    <?php if ($comment->comment_approved == '0') : ?>
                        <p><?php esc_html_e('Your comment is awaiting moderation.', 'mominul'); ?></p>
                    <?php endif; ?>
                    <?php comment_text() ?>
	                <?php comment_reply_link(array_merge( $args, array('reply_text' =>   '<i class="fas fa-reply"></i>' . esc_html__('Reply', 'mominul'),  'depth' => $depth, 'max_depth' => $args['max_depth']))); ?>
                </div>
                </div>
            </div>
            <?php
        }
    }
}