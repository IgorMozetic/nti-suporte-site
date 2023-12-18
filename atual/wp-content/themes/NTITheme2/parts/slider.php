<?php
$slides = array();
$args = array('tag' => 'slide', 'nopaging' => true, 'posts_per_page' => 5);

$slider_query = new WP_Query($args);
if ($slider_query->have_posts()) {
    while ($slider_query->have_posts()) {
        $slider_query->the_post();
        if (has_post_thumbnail()) {
            $temp = array();
            $thumb_id = get_post_thumbnail_id();
            $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'full', true);
            $thumb_url = $thumb_url_array[0];
            $temp['title'] = get_the_title();
            $temp['excerpt'] = get_the_excerpt();
            $temp['image'] = $thumb_url;
            $temp['slug'] = get_permalink();
            $slides[] = $temp;
        }
    }
}
wp_reset_postdata();
?>

<?php if (count($slides) > 0) { ?>
<div class="container-fluid">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

        <ol class="carousel-indicators">
            <?php for ($i = 0; $i < count($slides); $i++) { ?>
                <li data-target="#carouselExampleCaptions" data-slide-to="<?php echo $i ?>" <?php if ($i == 0) { ?>class="active" <?php } ?>></li>
            <?php } ?>
        </ol>

        <div class="carousel-inner" role="listbox">
            <?php $i = 0;
            foreach ($slides as $slide) {
                extract($slide); ?>
                <div class="carousel-item <?php if ($i == 0) { ?>active<?php } ?>">
                <div class="row">
                    <div class="col-12">
                    <div class="slider-transparent"></div>
                        <a href="<?php echo $slug ?>"><img src="<?php echo $image ?>" class="img-slider w-100" alt="<?php echo esc_attr($title); ?>"></a>
                        <div class="carousel-caption .d-none .d-md-block .d-xl- none .d-xxl-none">
                            <h3> <a class="link_slide" href="<?php echo $slug ?>"><?php echo $title; ?></a></h3>
                            <p class="d-none d-md-block"><?php echo $excerpt; ?></p>
                            <!-- <button type="button"  class="btn btn-success"><a href="<?php echo $slug ?>">Leia mais</a></button> -->

                        </div>

                    </div>

                    </div>
            </div>
            <?php $i++;
            } ?>
        </div>
        <!--<button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
        -->

    </div>

    <?php } ?>
</div>