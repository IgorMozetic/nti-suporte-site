<div>
    <?php dynamic_sidebar('areadestaque'); ?>
</div>
<div class="col-12">
        <div class="title-divider">
            <h3><i class="fa fa-star-o" aria-hidden="true"></i>
            Destaque</h3>

        </div>
    </div>
<?php $ntinews = array();
$args = array('tag' => 'destaque', 'posts_per_page' => 5, 'post');

$ntinews_query = new WP_Query($args);
while ($ntinews_query->have_posts()) {
    $ntinews_query->the_post();
    if (has_post_thumbnail()) {
        $temp = array();
        $thumb_id = get_post_thumbnail_id();
        $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'full', true);
        $thumb_url = $thumb_url_array[0];
        $temp['title'] = get_the_title();
        $temp['excerpt'] = get_the_excerpt();
        $temp['image'] = $thumb_url;
        $temp['slug'] = get_permalink();
        $ntinews[] = $temp;
    }

?>

    
    <div class="p-2">
        <div class="row">

            <div class="col-md-12 posts">
                <div class="card rounded mx-auto d-block p-2">
                    <div class="img-dest">
                        <?php if (has_post_thumbnail())
                            $imageUrl =  wp_get_attachment_image_src(get_post_thumbnail_id(), 'full'); ?>
                        <img alt="" class="card-img pb-3" src="<?php echo esc_url($imageUrl[0]); ?>">
                    </div>
                    <div class="">
                        <h3 class="card-title text-center "> <a href="<?php the_permalink() ?>"> <?php the_title(); ?></a></h3>
                        <!-- <p class="card-text p-2"> <?php echo get_the_excerpt(); ?></p> -->


                    </div>
                </div>
            </div>

        </div>
    </div>


    <div class="row m-2"></div>

<?php } ?>