<?php get_header(); ?>
<?php
$s=get_search_query();
$args = array(
	's' =>$s
);
// The Query
$the_query = new WP_Query( $args );
	
if ( $the_query->have_posts() ) {
	_e("<h2  style='font-weight:bold;color:#000'>Resultados para: ".get_query_var('s')."</h2>");?>

<div class="container-fluid">
<div class="row"><p></p></div>
	<div class="row">
		<div class="col-md-8">
		
			<div class="wrapper">
				<div class="container">
					<div class="row">
								
							<?php while ( $the_query->have_posts() ) {
								$the_query->the_post();
								
								?>			
							
							<div class="col-md-6 col-lg-4">
									<div class="card mb-4 mx-30 posts">
									<?php if (has_post_thumbnail())
													$imageUrl =  wp_get_attachment_image_src(get_post_thumbnail_id(),'full');?>
													<img class="img-posts" alt="" src="<?php echo esc_url($imageUrl[0]); ?>">
										<div class="card-body rounded">
											<h5 class="card-title">
											<?php echo '<a class= "link_serv" href=' . get_permalink(). '>'    . get_the_title() . '</a>'?></h5>
											<!-- <?php
											foreach($article_terms as $article_term) { 
											// Get the ID of a given category
										
											$category_id = get_cat_ID( $article_term->name );
											// Get the URL of this category
												
											$category_link = get_category_link( $category_id );
											?>
											<p class="card-text badge bg-warning bg-opacity-75 text-wrap"><a href=<?php echo $category_link?>;><?php echo esc_html($article_term->name);?></a></p>
											<?php };?> // fim foreach-->
											<p class="card-text">
											<?php  the_excerpt() ?></p>
											<div class="socials">
												<?php 
												$url = urlencode(get_the_permalink());?>
												<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url;?>" target="_blank" data-action="share/whatsapp/share"><i class="fa fa-facebook"></i></a>
												<!-- <a href="#"><i class="fa fa-youtube"></i></a> -->
												<!-- <a href="#"><i class="fa fa-linkedin"></i></a> -->
												<!-- <a href="#"><i class="fa fa-instagram"></i></a> -->
												<a href="https://api.whatsapp.com/send?text=<?php the_permalink();?>" target="_blank"><i class="fa fa-whatsapp"></i></a>
											</div>
											<div class=btn-card>
												<a style="margin-top:10px" href="<?php  the_permalink()?>" class="btn btn-theme">Leia mais</a>
											</div>
												<!-- <li>
											<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
											</li> -->
										</div>
									</div>
								</div>
											
									<?php
									}// fim while-
										}else{
									?>
								<div class="col-md-6 col-lg-4">
									<h2 style='font-weight:bold;color:#000'>Não foi encontrado</h2>
									<div class="alert alert-info">
									<p>Por favor, tente novamente com diferentes palavras-chave.</p>
								</div>		
							<?php } ?>
							
						
					</div>
					
				</div>
			</div>
		</div>	
		<div class="col-md-4 destaque">
				<div class="col-md-12">
					<?php get_sidebar('destaque'); ?>
					
				</div>
				
			</div>
		</div>
			
	</div> 	
</div>	
	<?php get_footer(); ?>