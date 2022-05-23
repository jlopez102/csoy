<?php /* Template Name: PageSlider */ ?>

<?php
get_header();
?>

<!------- Closes out header div ------->
</div>
	<main id="primary" class="container" >

    <div class="slider">
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>
    </div>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
