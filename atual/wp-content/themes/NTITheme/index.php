<?php

use ElementorPro\Modules\Woocommerce\Conditions\Docs_Page;
use WeDevs\WeDocs\Shortcode;

use function PHPSTORM_META\type;

get_header(); ?>

<main id="content">
<div class="container">
    <div class="row"><!--espacador-->
                <p></p>
    </div>
    <div class="row"> <!--CARROSSEL-->
        <?php get_template_part('parts/slider'); ?>
    </div>

    <div class="row"> <!--espacador-->
                <p></p>
    </div>

    <div class="row"> <!--BOTOES CENTRAL DE SERVICOS E MANUAIS E TUTORIAIS-->
            <div class="col-sm-12 col-md-6 mb-2">
                <a class="" href="https://servicos.ufabc.edu.br"> <img src="wp-content\themes\NTITheme2\images\central_banner.png" class="card-img-top" alt="..."></a>
            </div>
            <div class="col-sm-12 col-md-6 mb-2">
                <a class="" href="<?php site_url(); ?>/?post_type=docs"> <img src="wp-content\themes\NTITheme2\images\manuais_tutoriais.png" class="card-img-top" alt="..."></a>
            </div>
    </div>

    <div class="row"><!--espacador-->
        <p></p>
    </div>

    <div class="content-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-3 mb-2"><!-- inicia Avisos -->
            <?php

                $loop = new WP_Query(
                    array(
                        'post_type' => 'event',
                        'event_category' => 'comunicadonti',
                        'posts_per_page' => 4,
                    ),
                );

            ?>
            <?php
                if ($loop->have_posts()) : ?>

                    <div class="card h-100">
                        <?php
                        echo '<div class="title-divider av-divider">
                                <h3><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Avisos</h3> </div>';
                        echo '<div>';
                        echo '<ul class="list-group pb-3">';
                        while ($loop->have_posts()) {
                            $loop->the_post();
                            echo '<li class="list-group-item pb-0 border-0"> <i class="fa fa-calendar-o" aria-hidden="true"></i></i>'; ?>
                        <?php
                            echo '<a class= "link-card-list pl-2" href=' . get_permalink() . '>' . get_the_title() . '</a></li>';
                        }
                        echo '</ul>';
                        echo '</div>';

                        wp_reset_query(); ?>
                        <div class="text-right mais">
                            <a class="" href="<?php $url = esc_url(home_url('?event_category=comunicadonti'));
                                                echo $url; ?>">
                                Mais Avisos <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                <?php endif; ?>

                </div><!-- Fim Avisos -->

            <div class= "col-sm-12 col-md-6 mb-2"> <!--INICIO MAIS ACESSADOS-->
            <?php

                $loop = new WP_Query(
                    array(
                        'post_type' => 'docs',
                        'doc_category' => 'impressoras',
                        'category' => 'impressoras',
                        'posts_per_page' =>4,
                    ),
                );

            ?>
            <?php
                if ($loop->have_posts()) : ?>
                    <div class="card h-100">
                        <?php
                        echo '<div class="title-divider  acessados-divider">
                                <h3><i class="fa fa-files-o" aria-hidden="true"></i> Mais acessados </h3></div>';
                        echo '<div>';
                        echo '<ul class="list-group pb-3">';
                        while ($loop->have_posts()) {
                            $loop->the_post();
                            echo '<li class="list-group-item pb-0  border-0"> <i class="fa fa-file-text-o "  aria-hidden="true"></i>  <a class= "link-card-list pl-2" href=' . get_permalink() . '>'    .  get_the_title() . '</a></li>';
                        }
                        echo '</ul>';
                        echo '</div>';

                        wp_reset_query(); ?>



                        <?php endif; ?>
                        <div class="text-right mais">
                            <a class="" href="<?php $url = esc_url(home_url('/?post_type=docs'));
                                                echo $url; ?>">
                                Mais Tutoriais <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
            </div><!--FIM MAIS ACESSADOS-->

            <div class="col-sm-12 col-md-3 mb-2"><!--INICIO FAQ-->
                <?php

                $loop = new WP_Query(
                    array(
                        'post_type' => 'docs',
                        'doc_category' => 'faqnti',
                        'category' => 'FAQ',
                        'posts_per_page' => 3,
                    ),
                );

                ?>
                <?php
                if ($loop->have_posts()) : ?>

                    <div class="card h-100">
                        <?php
                        echo '<div class="title-divider faq-divider">
                                <h3><i class="fa fa-question-circle-o" aria-hidden="true"></i> FAQ</h3> </div>';
                        echo '<div>';
                        echo '<ul class="list-group pb-3">';
                        while ($loop->have_posts()) {
                            $loop->the_post();
                            echo '<li class="list-group-item pb-0 border-0"> <i class="fa fa-file-text-o "  aria-hidden="true"></i> <a class= "link-card-list pl-2" href=' . get_permalink() . '>'    . get_the_title() . '</a></li>';
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
            </div><!--FIM FAQ-->
        </div>

    </div>

    <div class="row"><!--espacador-->
                <p></p>
                <p></p>
    </div>

    <div class="row">
        <div class="col-sm-12 col-md-3 mb-2"><!-- inicia cafe com processos -->
            <div class="card h-100">
                <div class="title-divider proc-divider">
                    <h3><i class="fa fa-briefcase" aria-hidden="true"></i> Processos</h3>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a class="link-card-list" href="https://processos.ufabc.edu.br/cafe-com-processos"><i class="fa fa-file-text-o" aria-hidden="true"></i> Portifólio de Processos do NTI</a>
                        </li>
                        <li class="list-group-item">
                            <a class="link-card-list" href="https://processos.ufabc.edu.br"> <i class="fa fa-external-link" aria-hidden="true"></i> Gestão de Processos UFABC</a>
                        </li>
                    </ul>
                    <?php get_sidebar('areaprocessos'); ?>
                </div>
            </div>
        </div><!-- Fim cafe com processos -->

        <div class="col-sm-12 col-md-9 mb-2"><!-- inicia sistemas institucionais -->
            <div class="card h-100">
                <div class="title-divider sist-divider">
                    <h3><i class="fa fa-briefcase" aria-hidden="true"></i> Sistemas Institucionais</h3>
                </div>
                <div class="h-100">
                    <div class="sistemasinstitucionais w-100 h-100 align-items-center justify-content-evenly">

                        <div class="m-auto">
                        <a href="http://acesso.ufabc.edu.br/site/login"><img class="sistemasinstitucionaisimg" src="wp-content\uploads\2023\01\acesso1-1024x303.png" alt="" width="138" height="38"></a>
                        </div>
                        <div class="m-auto">
                            <a href="https://moodle.ufabc.edu.br/"><img class="sistemasinstitucionaisimg" src="wp-content\uploads\2023\01\moodle.jpg" alt="" width="138" height="38"></a>
                        </div>
                        <div class="m-auto">
                            <a href="http://sig.ufabc.edu.br/sigaa"><img class="sistemasinstitucionaisimg" src="wp-content\uploads\2023\01\sigaa2.jpg" alt="" width="138" height="38"></a>
                        </div>
                        <div class="m-auto">
                            <a href="http://sig.ufabc.edu.br/sigrh"><img class="sistemasinstitucionaisimg" src="wp-content\uploads\2023\01\sigrh2.jpg" alt="" width="138" height="38"></a>
                        </div>

                        <a class="text-right mais" href="<?php site_url(); ?>/?page_id=1859">
                            Mais Sistemas <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>	<!-- Fim sistemas institucionais -->
    </div>
</div>

</main>

<?php get_footer(); ?>