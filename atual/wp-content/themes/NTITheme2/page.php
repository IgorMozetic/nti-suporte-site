<?php get_header(); ?>
<p></p>
<div id="content" class="wrap">
    <div id="primary" class="content-area">

        <main id="main" class="container">

            <div class="row">

                <div class="col-sm-12 col-md-12">

                    <nav aria-label="breadcrumb">
                        <?php get_breadcrumb(); ?>
<!--                        <ol class="breadcrumb">-->
<!--                            <li class="breadcrumb-item"><a href="#">Home</a></li>-->
<!--                            <li class="breadcrumb-item"><a href="#">Library</a></li>-->
<!--                            <li class="breadcrumb-item active" aria-current="page">Data</li>-->
<!--                        </ol>-->
                    </nav>
                    <?php
                    while (have_posts()) : the_post(); ?>

                        <?php the_content(); ?>
                    <?php endwhile; // End of the loop.
                    ?>
                </div><!-- .col-8 -->
                
            </div>

    </div><!-- row -->
    </main><!-- #main -->
</div><!-- #primary -->
</div><!-- .wrap -->







<?php wp_link_pages(); ?>
<?php get_footer(); ?>