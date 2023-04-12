<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Tusky
 */

get_header();
?>


		
		
		
	<div class="post-wrap hero">
	<div class="video--container">
                   <video autoplay muted loop data-scroll>
                        <source src="<?php echo get_template_directory_uri(); ?>/assets/fashon.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                      </video>

                      <div class="scroll-circle"><span>Scroll</span></div>
    </div>	
    
    <!--<div class="headline" id="headline">
      <h1>CSOY</h1>
      <h2 class="fade-in">Through the Glass</h2>
      <div class="circle"></div>
    </div>-->
	</div>

<!----- closes out header ------>
</div>


<section class="tagline">
<div>
<h2 class="fade-in">Quien Soy?(Who Am I)</h2>
<div class="tagline-scroll">
<h1 class="fade-in">C/SOY</h1>
</div>
<h3 class="fade-in">Photographer/Videographer</h3>

<p class="fade-in">
  Cesar Lopez is a highly accomplished fashion photographer with a keen eye for 
  capturing stunning images that tell a story. Based in Chicago, Cesar has built a reputation for his 
  creativity, attention to detail, and ability to work seamlessly with clients to bring thier vision to life.
</p>
</div>
</section>


<main id="primary" class="container" >




	<?php  
    $wpbp = new WP_Query(array(  
            'post_type' =>  'gallery',  
            'posts_per_page'  =>'10' ,
        )  
    );  
?> 	






<h2 class="fade-in">Projects</h2>
<div class="gallery-item group grid">
  <div class="grid-col grid-col--1"></div>
  <div class="grid-col grid-col--2"></div>
  <div class="grid-col grid-col--3"></div>
  <div class="grid-col grid-col--4"></div>

  <?php if ($wpbp->have_posts()) :  while ($wpbp->have_posts()) : $wpbp->the_post(); ?>  

	 <?php if ( (function_exists('has_post_thumbnail')) && (has_post_thumbnail()) ) :  ?>  
	
	<div class="fade-in  grid-item">
		<a href="<?php the_permalink(); ?>">
     <?php  the_post_thumbnail('gallery-thumb'); ?> 
		</a>

	<h3><?php echo substr( get_the_title(), 0, 40 ); ?></h3>
	 
</div>
	 
            <?php endif; ?>   
    <?php endwhile; endif; ?>  
    <?php wp_reset_query(); ?> 
    <?php rewind_posts(); ?>
	</div>


    

	</main><!-- #main -->
  <section class="negative-space">
  <span class="fade-in">*</span>
   </section>
  
  <section class="blue">
    <div class="marquee">
  <div>
    <p><span>*</span>The World Is Yours</p>
    <p><span>*</span>The World Is Yours</p>
  </div>
</div>
   </section>

<section class="contact">
<div class="contact-info">
  <h2 class="fade-in">CONTACT</h2>
  <p class="fade-in">Lets work, no matter the size or budget I want to hear about your project</p>

  <h3 class="fade-in">Follow Me</h3>
  <ul>
    <a href="#" class="fade-in"><li>Instagram</li></a>
    <a href="#" class="fade-in"><li>Youtube</li></a>
    <a href="#" class="fade-in"><li>Email</li></a>
  </ul>

</div>

<div class="contact-image">
  <span class="fade-in"></span>
</div>

</section>

<?php
get_sidebar();
get_footer();
