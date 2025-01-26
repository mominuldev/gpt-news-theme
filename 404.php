<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package mominul
 * by GptIslam
 */
get_header();

$image = pps_option('error_image');
$error_title = pps_option('error_title');
$error_content = pps_option('error_description');

$default_image = get_template_directory_uri() . '/assets/images/404.png';

if (!empty($image['url'])) {
	$image = $image['url'];
} else {
	$image = $default_image;
}
?>

<section class="error_page d-flex align-items-center">
	<div class="container">
		<div class="error_page_wrapper text-center">
			<?php if (!empty($image)) : ?>
				<div class="error-image">
					<img src="<?php echo esc_url($image) ?>" alt="<?php echo esc_attr(bloginfo('name')); ?>">
				</div>
			<?php endif; ?>

			<div class="error-page-content">
				<div class="error-info">
					<?php if (!empty($error_title)) : ?>
						<h1 class="error-title"><?php echo esc_html($error_title); ?></h1>
					<?php else :
						echo '<h2 class="error-title">' . esc_html__('Oops, Page Not Found!', 'pps-passport') . '</h2>';
					endif; ?>

					<?php if (!empty($error_content)) : ?>
						<p class="error-info"><?php echo esc_html($error_content); ?></p>
					<?php else :
						echo '<p class="error-info">' . esc_html__('Sorry, We couldn\'t find the page that you\'re looking for. Please check the address and try again.', 'pps-passport') . '</p>';
					endif; ?>
					<a href="<?php echo esc_url(home_url('/')); ?>" class="pps-btn">
                        <i class="ri-arrow-left-line"></i>

                        <?php echo esc_html__('Go Home', 'pps-passport') ?>
                    </a>
				</div>
			</div>

		</div>
	</div>
</section>

<?php
get_footer();

