<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package mominul
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry-post' ); ?>>

	<?php PPS_Theme_Helper::pps_post_thumbnail(); ?>

	<div class="blog-content">
		<header class="entry-header">
			<ul class="post-meta">
				<li><?php PPS_Theme_Helper::pps_posted_on(); ?></li>
				<li><?php PPS_Theme_Helper::pps_posted_by(); ?></li>
				<li><?php PPS_Theme_Helper::pps_entry_cat(); ?></li>
			</ul><!-- .entry-meta -->
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>

			<p>
				<?php echo PPS_Theme_Helper::pps_substring( get_the_content(), 25, '...' ); ?>
			</p>

			<footer class="blog-footer">
				<a href="<?php the_permalink(); ?>" class="read-more">
					<?php echo esc_html__( 'Read More', 'pps-passport' ); ?>
				</a>
			</footer>

			<?php if ( is_singular() ) {
				wp_link_pages();
			} ?>
		</div>

	</div><!-- /.entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
