<?php get_header(); ?>

<div class="container">
<div class="row">
	<div class="col-md-12">
		<p></p>
	</div>
</div>
</div>

<div id="content" class="wrap bg-light">
	<div id="primary" class="content-area">
		<main id="main" class="container-fluid">
		<div class="row">
			<div class="col-md-8">
			<div class="breadcrumb bg-light p-2 "><?php get_breadcrumb(); ?></div>
				<?php
				while (have_posts()) : the_post(); ?>
					<?php 
					wpb_set_post_views(get_the_ID());?>
				
					<h1 class="page-title"><?php the_title();?></h1>
					<?php 
					the_content();
						
					wpb_get_post_views(get_the_ID());
	?>
				<?php endwhile; // End of the loop.
				?>
				<div class="container">
					<div class="d-flex justify-content-between">
						<div ><?php previous_post_link(); ?>  </div>
						<div><?php next_post_link(); ?></div>
					</div>
				</div>
				<p></p>
				<div class="container">

					<div class="row  p-2 bg-secondary">
						
							<div class="col-md-4 d-flex social-title">Compartilhe:  
							&nbsp 
							<?php get_template_part('parts/socials'); ?>
							</div>
							<div class="col-md-8">
								<div class="row"></div>
							</div>
					</div>
				</div>
					
				<div class="row p-2"></div>	
				<!--Veja em functions.php: add_shortcode('prefix_related_posts_for_single'... -->		
				<div> <?php echo do_shortcode('[prefix_related_posts_for_single] ')?></div>
			</div>
			
			<div class="col-md-4">
					<?php get_sidebar('destaque'); ?>
			</div>
			

		</div>
		<div class="row"><p></p></div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<!-- <?php 
$popularpost = new WP_Query( array( 'posts_per_page' => 4, 'meta_key' => 'wpb_post_views_count', 'orderby' => 'meta_value_num', 'order' => 'DESC'  ) );
while ( $popularpost->have_posts() ) : $popularpost->the_post();
 	
wpb_get_post_views(get_the_ID());?>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      	<div class="card-body">
      	<h5 class="card-title center">  <a href="<?php the_permalink()?>"> <?php the_title();?></a></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      	</div>
    	</div>
  	</div>
</div>


<?php the_title();
the_excerpt();
 
endwhile;
?> -->

<?php get_footer(); ?>

