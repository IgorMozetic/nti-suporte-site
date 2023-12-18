

<?php get_header(); ?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<p></p>
		</div>
	</div>
</div>

<div id="content" class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="container-fluid">
			<div class="row">
				<div class="col-md-8">
				<div class="breadcrumb bg-light"><?php get_breadcrumb(); ?></div>
					<?php
					while (have_posts()) : the_post(); ?>
						
						<?php $postid = get_the_ID(); ?>	
						<?php $category = get_the_category( '$post->id') ?>
						<?php
							$terms = wp_get_post_terms( $post->ID , 'category', array("fields" => "all") );?>
						
		
							<h1 class="page-title"><?php the_title();?></h1>
						<?php the_content(); ?>
					
						<!-- <?php $categories = get_the_category();?>
								<?php echo '<b> Serviços:</b>'?>
								<?php foreach ($categories as $category){
								echo '<div class="m-1 badge bg-secondary  post-item "><a class="" >' . $category->cat_name . '</a></div>';
								}?> -->

						
						
					<?php endwhile; // End of the loop.
					?>
						<p></p>
						<div class="container">
							<div class="d-flex justify-content-between">
								<div ><?php previous_post_link(); ?>  </div>
								<div><?php next_post_link(); ?></div>
							</div>
						</div>
						
				</div><!-- .col-md-8 -->
				<div class="col-md-4">
				
					<div class="col-md-12">
						<?php get_sidebar('destaque'); ?>
						
					</div>
				
				</div>
			</div>
			
					
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->


<?php get_footer(); ?>