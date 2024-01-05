<?php
$search = $_POST['search-nti'];
get_header();
?>
<div class="col-md-12">
  <div class="container">
    <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
    <h1 class="title">Sua pesquisa foi: <?php echo $search ?></h1>
    <div class="pt-4">
      <?php
      $pesquisas = array();
      $args = array(
        's' => $search,
        'post_type' => array('docs', 'avisos'),
        'orderby' => 'title',
        'order' => 'ASC'
      );
      $slider_query = new WP_Query($args);
      if ($slider_query->have_posts()) { ?>
        <p><strong>Aqui estão alguns resultados relacionados com sua pesquisa: </strong></p>
        <?php
        $q = 0;
        while ($slider_query->have_posts()) {
          $slider_query->the_post();
          $temp = array();
          $temp['title'] = get_the_title();
          $temp['excerpt'] = get_the_excerpt();
          $temp['slug'] = get_permalink();
          $pesquisas[] = $temp;
        }
      }
      wp_reset_postdata();
      if (count($pesquisas) > 0) {
        foreach ($pesquisas as $pesquisa) {
          extract($pesquisa); ?>
          <div class="card my-2">
            <div class="card-body ">
              <h5 class="card-title"><?php echo $title; ?></h5>
              <p class="card-text"><?php echo $excerpt; ?></p>
              <a href=<?php echo $slug; ?> class="btn">Acessar postagem</a>
            </div>
          </div>
        <?php
        }
      } else { ?>
        <p><strong>Não foram encontrados posts com a sua pesquisa. </strong></p>
        <a href="<?php site_url() ?>">Voltar a Home</a>
      <?php } ?>

    </div>
  </div>
</div>
<?php get_footer(); ?>