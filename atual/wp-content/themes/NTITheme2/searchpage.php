<?php
/*
Template Name: Search Page
*/
?>
<?php
get_header(); ?>
<p>Esta é a Search Page</p>
<div id="content" class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php

			global $query_string;

			wp_parse_str( $query_string, $search_query );
			$search = new WP_Query( $search_query );

			?>
			<p>
			My Site features articles about 
			<a title="WordPress Articles" href="/category/wordpress/">WordPress</a>, 
			<a title="Web Design Articles" href="/category/web-design/">web page design</a>, 
			<a title="Development Articles" href="/category/website-development/">website development</a>,
			and <a title="CSS Articles" href="/category/css/">CSS</a>.
			</p>
			<p>To search my website, please use the form below.</p>

			<?php get_search_form(); ?>
			
			<?php
			global $wp_query;
			$total_results = $wp_query->found_posts;
			?>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php get_footer();