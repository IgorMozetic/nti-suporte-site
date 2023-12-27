<footer id="footer" class="b-footer bg-transparent">
  <div class="container-fluid text-center text-md-left">
    <div class="row m-2">
      <div class="col-md-4 mb-md-0 mb-3 col-rodape">
        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-left-widget')) ?>
      </div>
      <div class="col-md-4 mb-md-0 mb-3 col-rodape">
        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-center-widget')) ?>
      </div>
      <div class="col-md-4 mb-md-0 mb-3 col-rodape ">
        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('footer-right-widget')) ?>
      </div>
    </div>
  </div>
  <div id="footer-brasil" class="mw-100 pt-2" style="background: none repeat scroll 0% 0% #00420c;">
    <div class=" container"></div>
  </div>
  <div class=" footer-copyright b-footer-rodape text-white  text-center "> Universidade Federal do ABC. Desenvolvido com <a alt="CMS de codigo Aberto - Wordpress" style="color:white; text-decoration:underline" href="https://br.wordpress.org/">CMS </a>de código aberto.
  </div>

  <script src="<?php echo get_template_directory_uri(); ?>/js/table.js"></script>

  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-3.2.1.slim.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/popper.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/dark-mode.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/dark-mode-switch.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/slider-horizontal.js"></script>

  <!-- script usado pela barra do governo federal -->
  <script defer="defer" src="//barra.brasil.gov.br/barra.js" type="text/javascript"></script>
  <?php wp_footer(); ?>
</footer>
</body>

</html>