<!DOCTYPE html>
<html lang="py-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html charset=" <?php bloginfo('charset'); ?> />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="target_country" content="br" />
  <meta name="country" content="Brazil" />


  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
  <!-- <?php if (is_singular() && get_option('thread_comments')) wp_enqueue_script('comment-reply'); ?> -->

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- style -->
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style/header.css' ?>">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style/footer.css' ?>">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style/style.css' ?>">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style/dark-mode.css' ?>">

  <?php wp_meta(); ?>
  <?php wp_head(); ?>

  <title>Document</title>
</head>

<body class="bg-light" style="min-height: 100%;">
  <header id="navbar_top">
    <!-- barra brasil -->
    <div id="barra-brasil">
      <div id="wrapper-barra-brasil">
        <div class="brasil-flag">
          <a href="https://gov.br" class="link-barra">Brasil</a>
        </div>
        <nav>
          <ul id="lista-barra-brasil" class="list">
            <li><a href="#" id="menu-icon"></a></li>
            <li class="list-item"><a href="http://www.simplifique.gov.br" class="link-barra">Simplifique!</a></li>
            <li class="list-item"><a href="https://www.gov.br/pt-br/participacao-social/" class="link-barra">Participe</a></li>
            <li class="list-item"><a href="http://www.acessoainformacao.gov.br" class="link-barra">Acesso à informação</a></li>
            <li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legislação</a></li>
            <li class="list-item last last-item"><a href="https://gov.br/pt-br/canais-do-executivo-federal" class="link-barra">Canais</a></li>
          </ul>
        </nav>
        <span id="brasil-vlibras"><a class="logo-vlibras" id="logovlibras" href="#"></a>
          <span class="link-vlibras"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" class="barralazy" data-src="//barra.brasil.gov.br/imagens/vlibras.gif" width="132" height="116"><br>O conteúdo desse portal pode ser acessível em Libras usando o <a href="http://www.vlibras.gov.br">VLibras</a>
          </span>
        </span>
      </div>
    </div>

    <div class="b-header">
      <div class="container">
        <div class="row w-100">
          <div class="col-12 col-md-2 site-logo">
            <a href="<?php echo home_url() ?>">
              <img class="img-fluid" alt="Núcleo de Tecnologia da Informação - NTI / UFABC" src="<?php echo get_template_directory_uri(); ?>/images/logo_nti_branco.png" />
            </a>
          </div>
          <div class="col-sm-12 col-md-10">
            <div class="row">
              <div class="col-12">
                <div>
                  <span class="sr-only visually-hidden">Opçoes de Acessibilidade</span>
                  <ul class="list-group list-group-horizontal float-end text-uppercase" id="portal-siteactions">

                    <li class="list-inline-item">
                      <input type="checkbox" class="form-check-input btn-check invisible" id="darkSwitch">
                      <label class="custom-control-label" for="darkSwitch"><a accesskey="6">Alto Contraste</a></label>
                    </li>
                    <li class="current list-inline-item">
                      <a accesskey="6" href="<?php echo site_url() . '/acessibilidade' ?>">Acessibilidade</a>
                    </li>
                    <li class="list-inline-item">
                      <a accesskey="7" href="<?php echo site_url() . '/mapa-do-site' ?>">Mapa do site</a>
                    </li>
                    <li class="list-inline-item float-end mr-0">
                      <a class=" d-flex pt-2 w-75" href="http://ufabc.edu.br/en/" accesskey="8"><img alt="Language" src="<?php echo get_template_directory_uri(); ?>/images/flag-en.png" /></a>
                    </li>
                    <li class="list-inline-item language">
                      <a href="http://ufabc.edu.br/en/" accesskey="8">EN</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 ">
                <div class="row">
                  <div class="col-sm-12 col-md-8 col-lg-9 ">
                    <div class="title-header">
                      <h1>Núcleo de Tecnologia da Informação</h1>
                      <h2 class="description-header">Universidade Federal do ABC</h2>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-3 ">
                    <div class="row my-sm-0 my-md-2 my-lg-2 ">
                      <div class="col-12">
                        <div id="portal-searchbox" class="">
                          <form role="search" method="get" id="searchform" class="searchform form-inline input-group mb-3 my-md-0  my-lg-0" action="<?php echo site_url() . '/search-page' ?>">
                            <input placeholder="Buscar no portal NTI" class="form-control search_field" type="text" value="<?php echo the_search_query(); ?>" name="search" id="search" />
                            <button class="btn btn-warning my-sm-0 search_button" type="submit" id="searchsubmit" value="Post data"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                              </svg>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col-12">
                        <div id="social-icons" class="float-end mr-2">
                          <h2 class="sr-only visually-hidden">Redes Sociais</h2>
                          <ul class="list-group list-group-horizontal pb-3 ">
                            <li class="list-inline-item"><a href="https://facebook.com/ufabc" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"><span>Facebook</span></i></a></li>
                            <li class="list-inline-item"><a href="https://www.instagram.com/ufabc/" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"><span>Instagram</span></i></a></li>
                            <li class="list-inline-item"><a href="https://www.linkedin.com/school/ufabc" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"><span>LinkedIn</span></i></a></li>
                            <li class="list-inline-item"><a href="https://twitter.com/ufabc" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"><span>Twitter</span></i></a></li>
                            <li class="list-inline-item"><a href="http://www.ufabc.edu.br/contato/whatsapp" title="WhatsApp"><i class="fab fa-whatsapp"><span>WhatsApp</span></i></a></li>
                            <li class="list-inline-item"><a href="/noticias/ufabc-disponibiliza-novo-canal-de-divulgacao-de-noticias-no-telegram"><i class="fa-brands fa-telegram"><span>Telegram</span></i></a></li>
                            <li class="list-inline-item"><a href="http://youtube.com/ufabcvideos" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"><span>YouTube</span></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- inicia o menu do NTI-->
    <div class="w-100">
      <div class="menu-header" id="navigation">
        <div class="container-sm ">
          <nav role="navigation" aria-label="Menu principal" class="navbar navbar-expand-lg navbar-dark h-nav">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav mr-auto w-100">
                <div class="menu-menu-nti-topo-container w-100">
                  <ul id="menu-menu-nti-topo" class="menu">
                    <li id="menu-item-2997" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2997"><a href="http://servicos.ufabc.edu.br/">Central de Serviços</a></li>
                    <li id="menu-item-4329" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4329"><a href="<?php echo site_url() . '/docs' ?>">Manuais e Tutoriais</a></li>
                    <li id="menu-item-3002" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3002"><a href="<?php echo site_url() . '/sistemas-institucionais' ?>">Sistemas Institucionais</a></li>
                    <li id="menu-item-4418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4418"><a href="<?php echo site_url() . '/governanca' ?>">Governança</a>
                      <ul class="sub-menu">
                        <li id="menu-item-4421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4421"><a href="<?php echo site_url() . '/cetic' ?>">CETIC</a></li>
                        <li id="menu-item-4420" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4420"><a href="<?php echo site_url() . '/pdti' ?>">PDTI</a></li>
                        <li id="menu-item-4422" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4422"><a href="<?php echo site_url() . '/politicas-e-normas-de-tic' ?>">Políticas e normas de TIC</a></li>
                        <li id="menu-item-4419" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4419"><a href="<?php echo site_url() . '/relatorios-e-transparencia-de-tic' ?>">Relatórios e transparência de TIC</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-3011" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3011"><a href="<?php echo site_url() . '/sobre-o-nti' ?>">Sobre o NTI</a>
                      <ul class="sub-menu">
                        <li id="menu-item-3015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3015"><a href="<?php echo site_url() . '/objetivos' ?>">Objetivos, missão e visão</a></li>
                        <li id="menu-item-3008" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3008"><a href="<?php echo site_url() . '/estrutura-organizacional' ?>">Estrutura organizacional</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"><a href="<?php echo site_url() . '/contato' ?>">Contato</a></li>
                    <li id="menu-item-4323" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4323"><a href="<?php echo site_url() . '/mapa-do-site' ?>">Mapa do Site</a></li>
                  </ul>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>