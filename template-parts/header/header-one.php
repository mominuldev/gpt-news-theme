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
$header_ad            = gpt_option( 'header_ad' );
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

    <div class="top-bar">
        <div class="container">
            <div class="top-bar-inner">
                <div class="top-bar-left">
                    <div class="top-bar-content">
                        <div class="top-bar-content-left">
                            <div class="trending-text-wrapper">
                                <span class="trending-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
                                    </svg>
                                </span>

                                <span class="trending-text">Trending</span>
                            </div>

                            <!--                            Trending News-->
							<?php Gpt_Theme_Helper::trending_news(); ?>
                        </div>
                    </div>
                </div>

                <div class="top-bar-right">
                    <i class="ri-calendar-2-line"></i>
					<?php
					$current_date = date( 'F j, Y' );
					echo '<span>' . $current_date . '</span>';
					?>
                </div>
            </div>
        </div>
    </div>

    <div class="header-middle-wrapper">
        <div class="container">
            <div class="header-middle-inner">
                <div class="header-middle-left">
                    <div class="site-logo">
						<?php Gpt_Theme_Helper::branding_logo(); ?>
                    </div>
                </div>

				<?php if ( $header_ad ) : ?>
                    <div class="header-middle-center">
                        <div class="header-google-add">
							<?php
							$header_google_add = gpt_option( 'header_google_ad' );

							if ( $header_google_add ) {
								echo $header_google_add;
							}
							?>
                        </div>
                    </div>
				<?php endif; ?>
            </div>
        </div>
    </div>


    <div class="header-menu">
        <div class="container">
            <nav id="site-navigation" class="main-nav">

                <div class="gpt-hamburger" id="page-open-main-menu" tabindex="1">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

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
									'gpt-news' ) . '</a></li></ul>';
						}

						?>
                        <!-- /.nav-right -->
                    </div>
                    <!-- /.main-menu -->
                </div><!-- #menu-wrapper -->
				<?php
				$search_btn  = gpt_option( 'header_search' );
				$canvas_menu = gpt_option( 'canvas_menu' );

				if ( $search_btn == true ): ?>
                    <div class="nav-right">
						<?php if ( $search_btn ) : ?>
                            <span class="search-btn" id="search-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.0259 13.8473L18.5948 17.4163L17.4163 18.5948L13.8474 15.0258C12.5641 16.0525 10.9367 16.6667 9.16669 16.6667C5.02669 16.6667 1.66669 13.3067 1.66669 9.16667C1.66669 5.02667 5.02669 1.66667 9.16669 1.66667C13.3067 1.66667 16.6667 5.02667 16.6667 9.16667C16.6667 10.9367 16.0525 12.5641 15.0259 13.8473ZM13.3539 13.229C14.3729 12.1788 15 10.7463 15 9.16667C15 5.94375 12.3896 3.33334 9.16669 3.33334C5.94377 3.33334 3.33335 5.94375 3.33335 9.16667C3.33335 12.3896 5.94377 15 9.16669 15C10.7464 15 12.1789 14.3729 13.229 13.3539L13.3539 13.229Z"
                                              fill="white"/>
                                    </svg>
                                </span>
						<?php endif; ?>
                    </div>
				<?php endif; ?>
            </nav><!-- #site-navigation -->
        </div><!-- /.container -->
    </div><!-- /.header-inner -->
</header><!-- #masthead -->
