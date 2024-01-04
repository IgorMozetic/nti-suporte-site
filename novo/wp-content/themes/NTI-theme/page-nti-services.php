<?php
get_header(); ?>
<div class="col-md-12">
  <div class="container single-nti-service">
    <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
    <h1 class="title">Serviços do Núcleo de Tecnologia da Informação</h1>

    <div class="col-sm-12 my-4 row justify-content-evenly" style="gap: 20px;">
      <?php
      $ntiServices = array();
      $args = array('post_type' => 'ntiservice');

      $slider_query = new WP_Query($args);
      if ($slider_query->have_posts()) {
        while ($slider_query->have_posts()) {
          $slider_query->the_post();
          $temp = array();
          $thumb_id = get_post_thumbnail_id();
          $temp['title'] = get_the_title();
          $temp['excerpt'] = get_the_excerpt();
          $temp['slug'] = get_permalink();
          $ntiServices[] = $temp;
        }
      }
      wp_reset_postdata();
      ?>

      <?php if (count($ntiServices) > 0) {
        foreach ($ntiServices as $ntiService) {
          extract($ntiService); ?>
          <div class="card col-md-3 my-2">
            <div class="card-body pb-4 mb-5">
              <h5 class="card-title"><?php echo $title; ?></h5>
              <hr class="p-0 my-3">
              <p class=" card-text"><?php echo $excerpt; ?></p>
            </div>
            <div class="text-right mais">
              <a href=<?php echo $slug; ?> class="btn">Acessar serviço</a>
            </div>
          </div>
      <?php
        }
      } ?>
    </div>
  </div>
</div>
<div class="footer-page-small">
  <?php get_footer(); ?>
</div>