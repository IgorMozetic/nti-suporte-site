<?php /* Template Name: Sitemap */ get_header(); ?>
<section class="p-2">
    <div class="container-fluid">
        <div>
            <div class="breadcrumb bg-light p-2 "><?php get_breadcrumb(); ?></div>
            <h1 class="title">Mapa do Site</h1>
                 <!--Grid row-->
                <div class="row">
                
                    <!-- WordPress Custom Post Type Loop - Delete this section if you are not using Custom Post Types -->
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6">

                        <!--Card-->
                        <div class="card mt-5 posts">
                            
                            <div>
                                <!--Card title-->
                                <div class="card mb-2 ">
                                    <div class="title-divider">
                                    <h3 class="text-center mb-0"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                         Avisos</h3>
                                    </div>
                                </div>
                                <!--list content-->
                                <div class="card-body pt-0">
                                    <ul class="list-group">

                                        <?php
                                            $wppages = new WP_Query(
                                                array(
                                                    'post_type' => 'event', // slug of pages
                                                    'posts_per_page' => -1, // -1 shows all pages
                                                    'post_status' => 'publish', // only shows published pages
                                                    'orderby' => 'title', // orders by page title
                                                    'order' => 'ASC' // orders page title alphabetically
                                                )
                                            );
                                        ?>

                                        <?php while ( $wppages->have_posts() ) : $wppages->the_post(); ?>

                                        <li class="list-group-item pb-0  border-0" >
                                            <a class="link-card-list" href="<?php echo get_permalink($post->ID); ?>" rel="dofollow" title="<?php the_title(); ?>">
                                                <?php the_title(); ?>
                                            </a>
                                        </li>

                                        <?php endwhile; wp_reset_query(); ?>

                                    </ul>
                                </div>
                            </div><!-- sitemap-CPT -->
                        </div><!--Card -->
                    </div><!--Grid column-->

                    <!-- Docs Loop  -->
                    <div class="col-lg-3 col-md-6">

                        <!--Card-->
                        <div class="card mt-5 posts">
                            
                            <div>
                                <!--Card title-->
                                <div class="card mb-2 ">
                                    <div class="title-divider">
                                    <h3 class="text-center mb-0"> <i class="fa fa-files-o" aria-hidden="true"></i>
                                         Manuais e Tutoriais</h3>
                                    </div>
                                </div>
                                <!--card content-->
                                <div class="card-body pt-0">
                                    <ul class="list-group">


                                        <?php
                                            $wppages = new WP_Query(
                                                array(
                                                    'post_type' => 'docs', // slug of pages
                                                    'posts_per_page' => -1, // -1 shows all pages
                                                    'post_status' => 'publish', // only shows published pages
                                                    'orderby' => 'title', // orders by page title
                                                    'order' => 'ASC' // orders page title alphabetically
                                                )
                                            );
                                        ?>

                                        <?php while ( $wppages->have_posts() ) : $wppages->the_post(); ?>

                                        <li class="list-group-item pb-0  border-0">
                                            <a class="link-card-list" href="<?php echo get_permalink($post->ID); ?>" rel="dofollow" title="<?php the_title(); ?>">
                                                <?php the_title(); ?>
                                            </a>
                                        </li>

                                        <?php endwhile; wp_reset_query(); ?>

                                    </ul>
                                </div> <!--Card content--> 
                            </div><!-- sitemap-CPT -->
                        </div><!--Card -->
                    </div><!--Grid column-->
                
                    <!-- WordPress Posts Loop -->
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6">

                        <!--Card-->
                        <div class="card  mt-5 posts">
                        
                        <!-- WordPress Posts Loop -->
                            <div>
                                 <!--Card title-->
                                 <div class="card mb-2">
                                    <div class="title-divider">
                                        
                                        <h3 class="text-center mb-0"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Notícias</h3>
                                    </div>
                                </div> <!--/Card title-->
                                <!--Card content-->
                                <div class="card-body pt-0">
                                    <ul class="list-group">

                                        <?php
                                            $wpposts = new WP_Query(
                                                array(
                                                    'post_type' => 'post', // slug of posts
                                                    'posts_per_page' => -1, // -1 shows all posts
                                                    'post_status' => 'publish', // only shows published posts
                                                    'orderby' => 'title', // orders by post title
                                                    'order' => 'ASC' // orders post title alphabetically
                                                )
                                            );
                                        ?>

                                        <?php while ( $wpposts->have_posts() ) : $wpposts->the_post(); ?>

                                        <li class="list-group-item pb-0  border-0" >
                                            <a class="link-card-list" href="<?php echo get_permalink($post->ID); ?>" rel="dofollow" title="<?php the_title(); ?>">
                                                <?php the_title(); ?>
                                            </a>
                                        </li>

                                        <?php endwhile; wp_reset_query(); ?>

                                    </ul>
                                </div> <!--Card content--> 

                            </div><!-- sitemap-posts -->
                        </div><!--Card -->
                    </div><!--Grid column-->

                    <!-- WordPress Pages Loop -->
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-6">

                        <!--Card-->
                        <div class="card mt-5 posts">
                            
                            <div>
                                <!--Card title-->
                                <div class="card mb-2 ">
                                    <div class="title-divider">
                                        <h3 class="text-center mb-0"><i class="fa fa-columns" aria-hidden="true"></i> Páginas</h3>
                                    </div>
                                </div>
                                <!--Card content-->
                                <div class="card-body pt-0">
                                    <ul class="list-group">

                                        <?php
                                            $wppages = new WP_Query(
                                                array(
                                                    'post_type' => 'page', // slug of pages
                                                    'posts_per_page' => -1, // -1 shows all pages
                                                    'post_status' => 'publish', // only shows published pages
                                                    'orderby' => 'title', // orders by page title
                                                    'order' => 'ASC' // orders page title alphabetically
                                                )
                                            );
                                        ?>

                                        <?php while ( $wppages->have_posts() ) : $wppages->the_post(); ?>

                                        <li class="list-group-item pb-0  border-0">
                                            <a class="link-card-list" href="<?php echo get_permalink($post->ID); ?>" rel="dofollow" title="<?php the_title(); ?>">
                                                <?php the_title(); ?>
                                            </a>
                                        </li>

                                        <?php endwhile; wp_reset_query(); ?>

                                    </ul>
                                </div> <!--Card content--> 
                            </div><!-- sitemap-pages -->
                        </div><!--Card -->
                    </div><!--Grid column-->
                </div><!--Grid row-->
            
        </div><!-- sitemap -->
    </div>
    <div class="row"><h1 class=""></h1></div>
    <div class="row"><h1 class=""></h1></div>
</section>
<?php get_footer(); ?>
