<?php
/*
Template Name: Account Template
 */
get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="page-header">
				<div class="container">
					<div class="page-header-content">
						<div class="user-thumb">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/user-thumb.png" alt="User">
						</div>
					</div>
					<div class="user-info">
						<h1 class="page-title"><?php echo esc_html__('My Account', 'domain'); ?></h1>
						<h3 class="user-name">John Smith</h3>
						<a href="#">Edit Profile</a>
					</div>
				</div>
				<!-- /.container -->
			</div>
			<!-- /.page-header -->

			<section class="user-content-section">
				<div class="container">
					<div class="content-wrap">
						<h2 class="content-title"><?php echo esc_html__('My Registration', 'domain') ?></h2>
						<div class="content-button-container">
							<a href="#" class="con-btn"><?php echo esc_html__('Pay Dues', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Adventure Registration', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Mentor/Volunteer', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Director Signup', 'domain') ?></a>
						</div>
					</div>

					<div class="content-wrap">
						<h2 class="content-title"><?php echo esc_html__('Manage Account', 'domain') ?></h2>
						<div class="content-button-container">
							<a href="#" class="con-btn"><?php echo esc_html__('Signups', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Donations', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Scholarship', 'domain') ?></a>
							<a href="#" class="con-btn"><?php echo esc_html__('Household Profile', 'domain') ?></a>
						</div>
					</div>
				</div>
			</section>
			<!-- /.user-content-section -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer(); // Include footer.php