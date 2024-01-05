<footer id="footer" class="b-footer bg-transparent">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
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
  <div id="footer-brasil" class="mw-100 pt-2">
    <div class=" container"></div>
  </div>
  <div class=" footer-copyright b-footer-rodape text-white  text-center "> Universidade Federal do ABC. Desenvolvido com <a alt="CMS de codigo Aberto - Wordpress" style="color:white; text-decoration:underline" href="https://br.wordpress.org/">CMS </a>de código aberto.
  </div>

  <script src="<?php echo get_template_directory_uri(); ?>/js/table.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/dark-mode-switch.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/dark-mode-switch.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js" integrity="sha512-TPh2Oxlg1zp+kz3nFA0C5vVC6leG/6mm1z9+mA81MI5eaUVqasPLO8Cuk4gMF4gUfP5etR73rgU/8PNMsSesoQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!-- script usado pela barra do governo federal -->
  <script defer="defer" src="//barra.brasil.gov.br/barra.js" type="text/javascript"></script>
  <?php wp_footer(); ?>
</footer>
</body>

</html>