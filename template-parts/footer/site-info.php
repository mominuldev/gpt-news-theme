<?php
/**
 * Displays footer site info
 * @package Gpt
 * @subpackage mominul
 * @since 1.0
 * @version 1.0
 */

?>
<div class="container">
    <div class="site-info">
        <div class="site-info-wrapper <?php echo has_nav_menu( 'footer_menu' ) ? 'footer-menu-enable' : ''; ?>">
            <div class="copyright">
                <p>
					<?php
					$copy_text = gpt_option( 'copyright_text' );
					if ( ! empty( $copy_text ) ) {
						echo wp_kses_post( $copy_text );
					} else {
						echo sprintf( esc_html__( '&copy; %1$s %2$s - All Rights Reserved. Develop By %3$s', 'mominul' ), date( 'Y' ), get_bloginfo(
							'name' ), '<a href="https://mominul.me" target="_blank">' . esc_html__('Mominul', 'gpt-news') . '</a>' );
					}
					?>
                </p>
            </div>

			<?php if ( has_nav_menu( 'footer_menu' ) ) {
				wp_nav_menu(
					array(
						'theme_location' => 'footer_menu',
						'menu_class'     => 'site-footer-menu',
						'fallback_cb'    => '',
					)
				);
			} ?>
        </div>
        <!-- /.site-info-wrapper -->
    </div>
</div>
<!-- /.container -->