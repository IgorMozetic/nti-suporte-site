<?php
get_header(); ?>
<div class="col-md-12">
  <div class="container single-avisos">
    <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
    <h1 class="title">Avisos do Núcleo de Tecnologia da Informação</h1>

    <div class="col-sm-12 my-4 row justify-content-evenly" style="gap: 20px;">
      <?php
      $avisos = array();
      $args = array('post_type' => 'avisos', 'tag' => 'avisos');

      $slider_query = new WP_Query($args);
      if ($slider_query->have_posts()) {
        while ($slider_query->have_posts()) {
          $slider_query->the_post();
          $temp = array();
          $thumb_id = get_post_thumbnail_id();
          $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'full', true);
          $thumb_url = $thumb_url_array[0];
          $temp['title'] = get_the_title();
          $temp['excerpt'] = get_the_excerpt();
          $temp['slug'] = get_permalink();
          if (has_post_thumbnail()) {
            $temp['image'] = $thumb_url;
          } else {
            $temp['image'] = get_template_directory_uri() . "/images/sistemas-institucionais/logo-nti.png";
          }
          $avisos[] = $temp;
        }
      }
      wp_reset_postdata();
      ?>

      <?php if (count($avisos) > 0) {
        foreach ($avisos as $aviso) {
          extract($aviso); ?>
          <div class="card col-md-3 my-2">
            <img class="card-img-top m-auto " style="width: 200px; height:200px" src="<?php echo $image ?>" alt="<?php echo esc_attr($title); ?>">
            <hr class="p-0 m-0">
            <div class="card-body pb-4 mb-4">
              <h5 class="card-title"><?php echo $title; ?></h5>
              <p class="card-text"><?php echo $excerpt; ?></p>
            </div>
            <div class="text-right mais">
              <a href=<?php echo $slug; ?> class="btn">Acessar aviso</a>
            </div>
          </div>
      <?php
        }
      } ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>