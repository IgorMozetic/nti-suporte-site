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

<div class="card text-dark bg-opacity-10 rounded mx-auto d-block">
  
<?php echo the_post_thumbnail(); ?>
   <div class="card-img"> 
        <h5 class="card-title center p-2">  <a href="<?php the_permalink()?>"> <?php the_title();?></a></h5>
        <p class="card-text"> <?php echo get_the_excerpt();?></p>
       
        
    </div>
</div>
<div class="row m-2"></div>

<?php } ?>

