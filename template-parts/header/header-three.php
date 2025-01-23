<?php
/**
 * The Header Layout 1.
 * @since   1.0.0
 * @package mominul
 */

$meta = get_post_meta( get_the_ID(), 'pps_page_options', true );

$container            = $transparent = '';
$is_fixed             = pps_option( 'header_sticky' );
$mobile_is_fixed      = pps_option( 'header_sticky_mobile' );
$mobile_menu          = pps_option( 'mobile_resolution', '992' );
$fixed_initial_offset = pps_option( 'sticky_offset' );
$header_color         = pps_option( 'header_color' );
$transparent_menu     = pps_option( 'transparent_menu' );
$sticky               = pps_option( 'sticky_logo' );
$meta_transparent     = ! empty( $meta['meta_transparent_menu'] ) ? $meta['meta_transparent_menu'] : '';
$meta_header_color    = isset( $meta['meta_header_color'] ) ? $meta['meta_header_color'] : '';
$logo_contrast        = ! empty( $sticky['url'] ) ? $sticky['url'] : '';
$logo_contrast        = ! empty( $meta['meta_sticky_logo']['url'] ) ? $meta['meta_sticky_logo']['url'] : $logo_contrast;
$header_type          = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '';
$mobile_logo          = pps_option( 'mobile_logo' );
$mobile_retina_logo   = pps_option( 'mobile_retina_logo' );
$nav_btn              = pps_option( 'nav_btn' );
$header_ad            = pps_option( 'header_ad' );
$meta_nav_btn         = isset( $meta['meta_nav_button'] ) ? $meta['meta_nav_button'] : '';

if ( $meta_nav_btn == true || $meta_nav_btn == 1 ) {
	$nav_btn_show = $meta_nav_btn;
} else {
	$nav_btn_show = $nav_btn;
}

// Top Bar Options
$top_bar = pps_option( 'topbar_enable' );
$phone   = pps_option( 'topbar_phone' );
$email   = pps_option( 'topbar_email' );
$address = pps_option( 'topbar_location' );
$cart    = pps_option( 'topbar_cart' );
$login   = pps_option( 'topbar_login' );

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

<header id="masthead" class="site-header header-three <?php echo esc_attr( $header_classes ); ?>" <?php if ( $is_fixed && ! empty( $logo_contrast ) ) {
	echo ' data-header-fixed="true"';
} ?> <?php if ( $mobile_is_fixed ) {
	echo ' data-mobile-header-fixed="true"';
} ?> <?php if ( $fixed_initial_offset ) {
	echo ' data-fixed-initial-offset="' . $fixed_initial_offset . '"';
} ?> data-mobile-menu-resolution="<?php echo esc_attr( $mobile_menu ) ?>">

    <div class="top-bar">
        <div class="container">
            <div class="top-bar-inner">
                <div class="top-bar-left">
                    <span class="follow-title"><?php echo esc_html__('Follow Us:', 'pps-passport') ?></span>
	                <?php  PPS_Theme_Helper::social_link(); ?>
                </div>

                <div class="topbar-right">
                    <form action="<?php echo esc_url(home_url('/')); ?>" method="get" class="header-search-form">
                        <input type="text" id="search-input" name="s" placeholder="Search..." autocomplete="off">
<!--                        <input type="hidden" name="post_type" value="post">-->
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M16.531 14.6168L20.8137 18.8995L19.3995 20.3137L15.1168 16.031C13.5769 17.263 11.624 18 9.5 18C4.532 18 0.5 13.968 0.5 9C0.5 4.032 4.532 0 9.5 0C14.468 0 18.5 4.032 18.5 9C18.5 11.124 17.763 13.0769 16.531 14.6168ZM14.5247 13.8748C15.7475 12.6146 16.5 10.8956 16.5 9C16.5 5.1325 13.3675 2 9.5 2C5.6325 2 2.5 5.1325 2.5 9C2.5 12.8675 5.6325 16 9.5 16C11.3956 16 13.1146 15.2475 14.3748 14.0247L14.5247 13.8748Z" fill="#DB0B69"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="header-middle-wrapper">
        <div class="container">
            <div class="header-middle-inner">
                <div class="header-middle text-center">
                    <div class="site-logo">
						<?php PPS_Theme_Helper::branding_logo(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="header-menu">
        <div class="container">
            <nav id="site-navigation" class="main-nav">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="mobile-logo">
					<?php if ( ! empty( $mobile_logo['url'] ) ) { ?>
                        <img <?php if ( ! empty( $mobile_retina_logo['url'] ) ) {
							echo 'srcset="' . esc_attr( $mobile_retina_logo['url'] ) . ' 2x"';
						} ?> src="<?php echo esc_url( $mobile_logo['url'] ); ?>"
                             alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="main-logo"/>
					<?php } else { ?>
                        <h3><?php bloginfo( 'name' ); ?></h3>
					<?php } ?>
                </a>

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
                            <i class="ri-close-line"></i>
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
									'pps-passport' ) . '</a></li></ul>';
						}

						?>
                        <!-- /.nav-right -->
                    </div>
                    <!-- /.main-menu -->
                </div><!-- #menu-wrapper -->
				<?php
				$search_btn  = pps_option( 'header_search' );
				$canvas_menu = pps_option( 'canvas_menu' );

				if ( $search_btn == true ): ?>
                    <div class="nav-right">
						<?php if ( $search_btn ) : ?>
                            <span class="search-btn" id="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="black"/>
                                </svg>
                            </span>
						<?php endif; ?>
                    </div>
				<?php endif; ?>

                <div class="pps-hamburger" id="page-open-main-menu" tabindex="1">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav><!-- #site-navigation -->

        </div><!-- /.container -->
    </div><!-- /.header-inner -->

	<?php if ( $header_ad ) : ?>
        <div class="header-middle-center my-5">
            <div class="header-google-add mx-auto">
				<?php
//				$header_google_add = pps_option( 'header_google_ad' );
//
//				if ( $header_google_add ) {
//					echo $header_google_add;
//				}

				echo do_shortcode( '[quads id=1]' );
				?>
            </div>
        </div>
	<?php endif; ?>
</header><!-- #masthead -->

