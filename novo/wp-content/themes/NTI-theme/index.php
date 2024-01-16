<?php

get_header();


use ElementorPro\Modules\Woocommerce\Conditions\Docs_Page;
use WeDevs\WeDocs\Shortcode;

use function PHPSTORM_META\type; ?>

<main id="content" class="home">
  <div class="container">
    <div class="row pt-3">
      <?php include('includes/slider-home.php'); ?>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 my-3">
        <a class="" href="https://servicos.ufabc.edu.br"> <img src="<?php echo get_stylesheet_directory_uri() . '/images/central_banner.png' ?>" class="card-img-top" alt="..."></a>
      </div>
      <div class="col-sm-12 col-md-6 my-3">
        <a class="" href="<?php echo site_url(); ?>/?post_type=docs"> <img src="<?php echo get_stylesheet_directory_uri() . '/images/manuais_tutoriais.png' ?>" class="card-img-top" alt="..."></a>
      </div>
    </div>
    <div class="content-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-3 mb-3">
          <?php
          $loop = new WP_Query(
            array(
              'post_type' => 'avisos',
              'tag' => 'avisos',
              'posts_per_page' => 3,
            ),
          );
          ?>
          <?php
          if ($loop->have_posts()) : ?>

            <div class="card h-100">
              <?php
              echo '<div class="title-divider av-divider">
                      <h3><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Avisos</h3> </div>';
              echo '<div class="pb-4">';
              echo '<ul class="list-group pb-3">';
              while ($loop->have_posts()) {
                $loop->the_post();
                echo '<li class="list-group-item pb-0 border-0"> <i class="fa-regular fa-calendar"></i>'; ?>
              <?php
                echo '<a class= "link-card-list pl-2" href=' . get_permalink() . '>' . get_the_title() . '</a></li>';
              }
              echo '</ul>';
              echo '</div>';

              wp_reset_query(); ?>
              <div class="text-right mais">
                <a class="" href="<?php echo site_url() . '/avisos-nti' ?>">
                  Mais Avisos <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          <?php endif; ?>
        </div>
        <div class="col-sm-12 col-md-6 mb-3">
          <?php
          $loop = new WP_Query(
            array(
              'post_type' => 'docs',
              'doc_category' => 'impressoras-de-rede-no-windows',
              // 'category' => 'impressoras-de-rede-no-windows',
              'posts_per_page' => 4,
            ),
          );
          ?>
          <?php
          if ($loop->have_posts()) : ?>
            <div class="card h-100">
            <?php
            echo '<div class="title-divider  acessados-divider">
                            <h3><i class="bi bi-files"></i> Mais acessados </h3></div>';
            echo '<div class="pb-4">';
            echo '<ul class="list-group pb-3">';
            while ($loop->have_posts()) {
              $loop->the_post();
              echo '<li class="list-group-item pb-0  border-0"> <i class="fa-regular fa-file-lines"></i>  <a class= "link-card-list pl-2" href=' . get_permalink() . '>'    .  get_the_title() . '</a></li>';
            }
            echo '</ul>';
            echo '</div>';
            wp_reset_query();
          endif; ?>
            <div class="text-right mais">
              <a class="" href="<?php $url = esc_url(home_url('/?post_type=docs'));
                                echo $url; ?>">
                Mais Tutoriais <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
            </div>
        </div>

        <div class="col-sm-12 col-md-3 mb-3">
          <?php
          $loop = new WP_Query(
            array(
              'post_type' => 'docs',
              'doc_category' => 'faqnti',
              'category' => 'FAQ',
              'posts_per_page' => 3,
            ),
          );
          if ($loop->have_posts()) : ?>
            <div class="card h-100">
              <?php
              echo '<div class="title-divider faq-divider">
                      <h3><i class="fa-regular fa-circle-question"></i> FAQ</h3> </div>';
              echo '<div class="pb-4">';
              echo '<ul class="list-group pb-3">';
              while ($loop->have_posts()) {
                $loop->the_post();
                echo '<li class="list-group-item pb-0 border-0"> <i class="fa-regular fa-file-lines"></i> <a class= "link-card-list pl-2" href=' . get_permalink() . '>'    . get_the_title() . '</a></li>';
              }
              echo '</ul>';
              echo '</div>';

              wp_reset_query(); ?>
              <div class="text-right mais">
                <a class="" href="<?php $url = esc_url(home_url('/?doc_category=faqnti'));
                                  echo $url; ?>">
                  Mais FAQs <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          <?php endif; ?>
        </div>
      </div>


      <div class="row">
        <div class="col-sm-12 col-md-3 mb-3">
          <div class="card h-100">
            <div class="title-divider proc-divider">
              <h3><i class="fa-solid fa-briefcase"></i> Processos</h3>
            </div>
            <div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a class="link-card-list" href="https://processos.ufabc.edu.br/cafe-com-processos"><i class="fa-regular fa-file-lines"></i> Portifólio de Processos do NTI</a>
                </li>
                <li class="list-group-item">
                  <a class="link-card-list" href="https://processos.ufabc.edu.br"> <i class="fa fa-external-link" aria-hidden="true"></i> Gestão de Processos UFABC</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-9 mb-3">
          <div class="card h-100">
            <div class="title-divider sist-divider">
              <h3><i class="fa fa-briefcase" aria-hidden="true"></i> Sistemas Institucionais</h3>
            </div>
            <div class="h-100">
              <div class="sistemasinstitucionais w-100 h-100 align-items-center justify-content-evenly pb-4">
                <div class="m-auto">
                  <a href="http://acesso.ufabc.edu.br/site/login"><img class="sistemasinstitucionaisimg" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais/acesso.svg" alt=""></a>
                </div>
                <div class="m-auto">
                  <a href="https://moodle.ufabc.edu.br/"><img class="sistemasinstitucionaisimg" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais/moodle.svg" alt=""></a>
                </div>
                <div class="m-auto">
                  <a href="http://sig.ufabc.edu.br/sigaa"><img class="sistemasinstitucionaisimg" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais/sigaa.svg" alt=""></a>
                </div>
                <div class="m-auto">
                  <a href="http://sig.ufabc.edu.br/sigrh"><img class="sistemasinstitucionaisimg" src="<?php echo get_template_directory_uri(); ?>/images/sistemas-institucionais/sigrh.svg" alt=""></a>
                </div>
              </div>
              <a class="text-right mais" href="<?php echo site_url() . '/sistemas-institucionais' ?>">
                Mais Sistemas <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>

<?php get_footer(); ?>