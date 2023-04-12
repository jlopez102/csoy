<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Tusky
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Space+Mono&family=VT323&display=swap" rel="stylesheet">
	 <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
	 
	 
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >
<!--<div class="load-container">
            <div class="loading-screen"></div>
</div>-->
        
<div class="loader">
	<span>
		C/SOY
</span>
</div>


<?php wp_body_open(); ?>
<div id="page" class="site">
	<div class="top--level">
		<header id="masthead" class="site-header">
	
		<div class="menu" id="menu">
		<div class="logo">
			<a href="<?php bloginfo('url'); ?>">C/SOY</a>
		</div>

		<button class="nav-trigger" id="nav-trigger"><span></span></button>

		<div  class="main-navigation">
		<button class="exit-trigger" id="exit-trigger"><span></span></button>
		<nav id="site-navigation">
			
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav><!-- #site-navigation -->

		<nav class="social">
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
		</nav

		</div>
		
		</div>
		
	</header><!-- #masthead -->
	<div class="cursor cursor--small"></div>
