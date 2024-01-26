<?php get_header(); ?>
<div id="content" class="wrap">
  <div id="primary" class="content-area">
    <main id="main" class="container single-avisos">
      <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
      <div class="row pb-4  ">
        <div class="col-sm-12">
          <?php
          while (have_posts()) : the_post(); ?>
            <?php $postid = get_the_ID(); ?>
            <?php $category = get_the_category('$post->id') ?>
            <?php
            $terms = wp_get_post_terms($post->ID, 'category', array("fields" => "all")); ?>
            <h1 class="page-title pb-4"><?php the_title(); ?></h1>
            <?php the_content(); ?>
            <?php $categories = get_the_category(); ?>
          <?php endwhile;
          ?>
          <div class="py-4">
            <div class="d-flex justify-content-between">
              <div><?php previous_post_link(); ?> </div>
              <div><?php next_post_link(); ?></div>
            </div>
          </div>
        </div>
        <div> <?php echo do_shortcode('[prefix_related_posts_for_single] ') ?></div>
    </main>
  </div>
</div>


<?php get_footer(); ?>