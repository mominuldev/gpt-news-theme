<?php
/**
 * The Header Layout 1.
 * @since   1.0.0
 * @package mominul
 */

$meta = get_post_meta( get_the_ID(), 'gpt_page_options', true );

$container            = $transparent = '';
$is_fixed             = gpt_option( 'header_sticky' );
$mobile_is_fixed      = gpt_option( 'header_sticky_mobile' );
$mobile_menu          = gpt_option( 'mobile_resolution', '992' );
$fixed_initial_offset = gpt_option( 'sticky_offset' );
$header_color         = gpt_option( 'header_color' );
$transparent_menu     = gpt_option( 'transparent_menu' );
$sticky               = gpt_option( 'sticky_logo' );
$meta_transparent     = ! empty( $meta['meta_transparent_menu'] ) ? $meta['meta_transparent_menu'] : '';
$meta_header_color    = isset( $meta['meta_header_color'] ) ? $meta['meta_header_color'] : '';
$logo_contrast        = ! empty( $sticky['url'] ) ? $sticky['url'] : '';
$logo_contrast        = ! empty( $meta['meta_sticky_logo']['url'] ) ? $meta['meta_sticky_logo']['url'] : $logo_contrast;
$header_type          = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '';
$mobile_logo          = gpt_option( 'mobile_logo' );
$mobile_retina_logo   = gpt_option( 'mobile_retina_logo' );
$nav_btn              = gpt_option( 'nav_btn' );
$meta_nav_btn         = isset( $meta['meta_nav_button'] ) ? $meta['meta_nav_button'] : '';

if ( $meta_nav_btn == true || $meta_nav_btn == 1 ) {
	$nav_btn_show = $meta_nav_btn;
} else {
	$nav_btn_show = $nav_btn;
}

// Top Bar Options
$top_bar = gpt_option( 'topbar_enable' );
$phone   = gpt_option( 'topbar_phone' );
$email   = gpt_option( 'topbar_email' );
$address = gpt_option( 'topbar_location' );
$cart    = gpt_option( 'topbar_cart' );
$login   = gpt_option( 'topbar_login' );

$header_classes = '';

if ( $is_fixed ) {
	$header_classes .= ' header-fixed';
}

if ( $header_type == true || $header_type == 1 ) {

	if ( $meta_transparent ) {
		$header_classes .= ' header_transparent';
		$header_classes .= ' ' . $meta_header_color;
	}
} else {

	if ( $transparent_menu ) {
		$header_classes .= ' ' . $header_color;
		$header_classes .= ' header_transparent';
	}
}

?>

<header id="masthead"
        class="site-header header-1 header-width <?php echo esc_attr( $header_classes ); ?>" <?php if ( $is_fixed && ! empty( $logo_contrast ) ) {
	echo ' data-header-fixed="true"';
} ?> <?php if ( $mobile_is_fixed ) {
	echo ' data-mobile-header-fixed="true"';
} ?> <?php if ( $fixed_initial_offset ) {
	echo ' data-fixed-initial-offset="' . $fixed_initial_offset . '"';
} ?> data-mobile-menu-resolution="<?php echo esc_attr( $mobile_menu ) ?>">

    <div class="container-fluid">
        <div class="header-inner">
            <nav id="site-navigation" class="main-nav">
                <div class="site-logo">
					<?php Gpt_Theme_Helper::branding_logo(); ?>
                </div>

                <div class="gpt-hamburger" id="page-open-main-menu" tabindex="1">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <div class="main-nav-container canvas-menu-wrapper" id="mega-menu-wrap">

                    <div class="mobile-menu-header">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<?php if ( ! empty( $mobile_logo['url'] ) ) { ?>
                                <img <?php if ( ! empty( $mobile_retina_logo['url'] ) ) {
									echo 'srcset="' . esc_attr( $mobile_retina_logo['url'] ) . ' 2x"';
								} ?> src="<?php echo esc_url( $mobile_logo['url'] ); ?>"
                                     alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="main-logo"/>
							<?php } else { ?>
                                <h3><?php bloginfo( 'name' ); ?></h3>
							<?php } ?>
                        </a>

                        <div class="close-menu page-close-main-menu" id="page-close-main-menu">
                            <i class="ti-close"></i>
                        </div>
                    </div>
                    <!-- /.mobile-menu-header -->

                    <div class="menu-wrapper">
						<?php if ( has_nav_menu( 'primary' ) ) {
							wp_nav_menu(
								array(
									'theme_location' => 'primary',
									'menu_class'     => 'site-main-menu',
									'fallback_cb'    => '',
									'depth'          => 3,
									'walker'         => new Gpt_Main_Nav_Walker(),
								)
							);
						} else {
							echo '<ul class="add-menu clearfix"><li><a target="_blank" href="' . esc_url( admin_url( 'nav-menus.php' ) ) . '">' . esc_html__( 'Add Menu',
									'mominul' ) . '</a></li></ul>';
						}

						?>
                        <!-- /.nav-right -->
                    </div>
                    <!-- /.main-menu -->
                </div><!-- #menu-wrapper -->
				<?php
				$search_btn  = gpt_option( 'header_search' );
				$nav_btn     = gpt_option( 'nav_btn' );
				$btn_link    = gpt_option( 'button_link' );
				$btn_text    = gpt_option( 'button_label' );
				$canvas_menu = gpt_option( 'canvas_menu' );

				if ( $search_btn == true || $nav_btn == true ): ?>
                    <div class="nav-right">
						<?php if ( $search_btn ) : ?>
                            <span class="search-btn" id="search-icon">
                                <i class="feather-search"></i>
                            </span>
						<?php endif;

						if ( $canvas_menu == true ) : ?>
                            <span class="canvas-btn" id="canvas-icon" data-bs-toggle="offcanvas" data-bs-target="#mominulSidebarOffCanvas"
                                  aria-controls="mominulSidebarOffCanvas">
                                <i class="feather-menu"></i>
                            </span>
						<?php endif;
						if ( $nav_btn_show ) {
							if ( $nav_btn && $btn_text ) :
								echo '<a href="' . $btn_link . '" class="gpt-btn nav-btn btn-circle">' . $btn_text . '</a>';
							endif;
						}
						?>
                    </div>
				<?php endif; ?>
            </nav><!-- #site-navigation -->
        </div><!-- /.header-inner -->
    </div><!-- /.container -->
</header><!-- #masthead -->

<?php if ( $canvas_menu == true ) : ?>

    <div class="offcanvas offcanvas-end mominul-offcanvas-sidebar" tabindex="-1" id="mominulSidebarOffCanvas"
         aria-labelledby="mominulSidebarOffCanvasLabel">
		<?php
		$canvas_logo               = gpt_option( 'offcanvas_sidebar_logo' );
		$canvas_description        = gpt_option( 'offcanvas_sidebar_description' );
		$canvas_contact_info_title = gpt_option( 'offcanvas_sidebar_contact_info_title' );
		$canvas_contact_info       = gpt_option( 'offcanvas_sidebar_contact_info' );
		$canvas_newsletter_is_on   = gpt_option( 'offcanvas_sidebar_newsletter_form_switcher' );
		$canvas_newsletter_title   = gpt_option( 'offcanvas_sidebar_newsletter_info_title' );
		?>

        <div class="offcanvas-body">
            <div class="offcavas-content-wrapper">
                <div class="offcanvas-menu">
                    <div class="offcanvas-menu-inner">
                        <div class="offcanvas-menu-header d-flex align-items-center justify-content-between">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
								<?php if ( ! empty( $canvas_logo['url'] ) ) { ?>
                                    <img src="<?php echo esc_url( $canvas_logo['url'] ); ?>"
                                         alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="main-logo"/>
								<?php } else { ?>
                                    <h3><?php bloginfo( 'name' ); ?></h3>
								<?php } ?>
                            </a>

                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fas fa-times"></i>
                            </button>
                        </div>
                        <!-- /.offcanvas-menu-header -->

						<?php if ( $canvas_description ) : ?>
                            <div class="canvas-menu-description">
                                <p><?php echo esc_html( $canvas_description ); ?></p>
                            </div>
                            <!-- /.canvas-menu-description -->
						<?php endif; ?>

                        <div class="canvas-menu-contact-info">
							<?php if ( $canvas_contact_info_title ) : ?>
                                <h3 class="canvas-menu-title"><?php echo esc_html( $canvas_contact_info_title ); ?></h3>
							<?php endif; ?>

							<?php if ( $canvas_contact_info ) : ?>
                                <ul class="contact-info">
									<?php foreach ( $canvas_contact_info as $info ) : ?>
                                        <li>
											<?php echo esc_html( $info['contact_info_text'] ); ?>
                                        </li>
									<?php endforeach; ?>
                                </ul>
							<?php endif; ?>
                        </div>

						<?php if ( $canvas_newsletter_is_on ) : ?>
                            <div class="canvas-menu-newaletter">

								<?php if ( $canvas_newsletter_title ) : ?>
                                    <h3 class="canvas-menu-title"><?php echo esc_html( $canvas_newsletter_title ); ?></h3>
								<?php endif; ?>

                                <div class="newsletter">
                                    <form class="newsletter-form">
                                        <input type="hidden" name="action" value="gpt_mailchimp_subscribe">
                                        <div class="newsletter-inner">
                                            <div class="input-inner">
                                                <input type="email" name="email" class="form-control" id="elementor-newsletter-form-email"
                                                       placeholder="Enter your emil" required>
                                            </div>
                                            <button type="submit" name="submit" id="elementor-newsletter-submit" class="newsletter-submit gpt-btn">
                                                <i class="fas fa-paper-plane"></i>
                                                <i class="fa fa-circle-o-notch fa-spin"></i>
                                            </button>
                                        </div>
                                        <div class="form-result alert">
                                            <div class="content"></div>
                                        </div><!-- /.form-result-->
                                    </form><!-- /.newsletter-form -->
                                </div>
                                <!-- /.newsletter -->
                            </div>
                            <!-- /.canvas-menu-newaletter -->
						<?php endif; ?>

                    </div>
                    <!-- /.offcanvas-menu-inner -->
                </div>

            </div>
            <!-- /.offcavas-contener-wrapper -->
        </div>
    </div>
    <!-- /.offcanvas -->

<?php endif; ?>
