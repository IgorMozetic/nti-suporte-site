<?php
get_header(); ?>
<div id="content" class="wrap">
  <div class="col-md-12">
    <div class="container">
      <div class="breadcrumb bg-light pt-4"><?php get_breadcrumb(); ?></div>
      <h1 class="title">Governança do Núcleo de Tecnologia da Informação</h1>
      <div class="div-menus pt-4">
        <p>Acesse a página do <a href="<?php echo site_url() . '/cetic' ?>">CETIC</a></p>
        <p>Acesse a página do <a href="<?php echo site_url() . '/pdti' ?>">PDTI</a></p>
        <p>Acesse a página das <a href="<?php echo site_url() . '/politicas-e-normas-de-tic' ?>">Políticas e normas de TIC</a></p>
        <p>Acesse a página dos <a href="<?php echo site_url() . '/relatorios-e-transparencia-de-tic' ?>">Relatórios e transparência de TIC</a></p>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>