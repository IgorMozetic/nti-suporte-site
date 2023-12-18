<div class="socials">
    
    <?php 
    $url = urlencode(get_the_permalink());?>
    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url;?>" target="_blank" data-action="share/whatsapp/share"><i class="fa fa-facebook"></i></a>
    <!-- <a href="#"><i class="fa fa-youtube"></i></a> -->
    <!-- <a href="#"><i class="fa fa-linkedin"></i></a> -->
    <!-- <a href="#"><i class="fa fa-instagram"></i></a> -->
    <a href="https://api.whatsapp.com/send?text=<?php the_permalink();?>" target="_blank"><i class="fa fa-whatsapp"></i></a>
</div>