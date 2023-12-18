<?php get_header(); ?>
<div class="wrap">
    <div class="container">
        <div class="row py-3">
            <div class="col-sm-8">
                <div class="card-text badge bg-warning bg-opacity-75 text-wrap">
					<?php $arq = the_archive_title(); ?>
				</div>
                <div id="content" role="main">
                    <?php
                    // Check if there are any posts to display
                    if (have_posts()) : ?>
                        <!-- <h1 class="archive-title"></h1>
                        <div class="archive-meta"></div> -->
                        <?php
                        // The Loop
                        while (have_posts()) : the_post(); ?>
                            <div class="card-body m-2 text-left bg-light rounded">
                                <div class="card-title">
                                    <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                                </div>
                                <small><?php the_time('F jS, Y') ?> by <?php the_author_posts_link() ?></small>
                                <div class="entry">
                                    <?php the_excerpt(); ?>
                                    <p class="postmetadata">
                                        <?php
                                            comments_popup_link('não possui comentários', '1 comment', '% comments', 'comments-link', 'Comments closed');
                                        ?>
                                    </p>
                                </div>
                            </div>
                        <?php endwhile; // End Loop
                        ?>
                    <?php else : ?>
                        <p>Não foram encontrados posts</p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-sm-4"> 
                <?php get_sidebar('destaque'); ?>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>