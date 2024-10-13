<?php

// Render wraper
?>

<div class="blog-posts blog-posts-list">
    <div class="row g-4">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/post/content', 'grid' );

			endwhile;
		endif;
		?>
    </div>
</div>

