<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta http-equiv="Content-Type" content="text/html charset=" <?php bloginfo('charset'); ?> />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="target_country" content="br" />
	<meta name="country" content="Brazil" />
	<title><?php wp_title(); ?></title>

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<!-- <?php if (is_singular() && get_option('thread_comments')) wp_enqueue_script('comment-reply'); ?> -->

	<?php wp_meta(); ?>
	<?php wp_head(); ?>


	<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css"  rel="stylesheet" id="bootstrap-css" href="<?php echo get_stylesheet_directory_uri() . '/css/bootstrap.min.css'  ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/card-overwrite.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/area-destaque.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/button-share.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/area-posts-relacionados.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/area-tutoriais.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/area-slider.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/area-rodape.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/mapa-do-site.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/fontawesome.min.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/social-share.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/slider-horizontal.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/style.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/css/dark-mode.css' ?>">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet">

	

<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
</head>

<body id="content">

	<header id="navbar_top">
		<!-- barra brasil -->
		<div class="container-fluid">
			<div class="row">
				<div id="barra-brasil">

					<ul id="menu-barra-temp">
						<li>
							<a href="http://brasil.gov.br">Portal do Governo Brasileiro</a>
						</li>
						<li>
							<a href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a>
						</li>
					</ul>
				</div>
			</div>


		</div>

		<div class="b-header">
				<div class="container-sm">
					<div class="row">
						<div class="col-sm-12 col-md-3 col-lg-2 col-xl-2 pt-3">
							<div class="pb-2"><!--logo ufabc-->
								<a href="https://www.ufabc.edu.br/ ">
									<img class="img-fluid logo1 mx-auto h-50" alt=" ufabc" src="<?php echo get_template_directory_uri(); ?>/images/logoufabc2.png" />
								</a>
							</div>

						</div>
						<div class="col-sm-12 col-md-9 col-lg-10 col-xl-10 ">
							<div class="row">

								<!-- inicia acessibilidade-->
								<div class="col-sm-12 col-md-5 col-lg-7 col-xl-7">
									<ul class="list-group list-group-horizontal text-uppercase" id="accessibility">
										<li class="list-inline-item">
											<a accesskey="1" href="#content" id="link-conteudo">
												Conteúdo
												<span>1</span>
											</a>
										</li>
										<li class="list-inline-item" m>
											<a accesskey="2" href="#navigation" id="link-navegacao">
												Menu
												<span>2</span>
											</a>
										</li>
										<li class="list-inline-item">
											<a accesskey="3" href="#portal-searchbox" id="link-buscar">
												Busca
												<span>3</span>
											</a>
										</li>
										<li class="list-inline-item">
											<a accesskey="4" href="#footer" id="link-rodape">
												Rodapé
												<span>4</span>
											</a>
										</li>
									</ul>
								</div><!-- div col-md-6 -->
								<div class="col-sm-12 col-md-7 col-lg-5 col-xl-5">
									<div>
										<span class="sr-only visually-hidden">Opçoes de Acessibilidade</span>
										<ul class="list-group list-group-horizontal float-right text-uppercase" id="portal-siteactions">

											<li class="list-inline-item">
												<input type="checkbox" class="btn-check invisible" id="darkSwitch"><label for="darkSwitch"><a accesskey="6">Alto Contraste</a></label>
											</li>
											<li class="current list-inline-item"><a accesskey="6" href="<?php $url = esc_url(home_url('/'));
																										echo $url . "/?page_id=685"; ?>">Acessibilidade</a></li>
											<li class="list-inline-item"><a accesskey="7" href="<?php $url = esc_url(home_url('/'));
																								echo $url . "/?page_id=690"; ?>">Mapa do site</a></li>
											<li class="list-inline-item float-right mr-0"><a class=" d-flex pt-2 w-75" href="http://ufabc.edu.br/en/" accesskey="8"><img alt="Language" src="<?php echo get_template_directory_uri(); ?>/images/flag-en.png" /></a></li>
											<li class="list-inline-item language"><a class="  " href="http://ufabc.edu.br/en/" accesskey="8">EN</a></li>
										</ul>


									</div>

								</div> <!-- div col-md-6 -->


							</div><!-- div row -->
							<div class="row">
								<div class="col-sm-12 ">
									<div class="row">
										<div class="col-sm-12 col-md-8 col-lg-9 ">

											<div class="title-header">

												<h1>
													N&uacute;cleo de Tecnologia da Informa&ccedil;&atilde;o
												</h1>
												<h2 class="description-header">Universidade Federal do ABC</h2>
											</div> <!-- div title-header -->
										</div><!-- div c0l -->
										<!-- inicia a Busca-->
										<div class="col-sm-12 col-md-4 col-lg-3 ">
											
												<div class="row my-sm-0 my-md-2 my-lg-2 ">
													<div class="col-12">
													<div id="portal-searchbox" class="">
														<form role="search" method="get" id="searchform" class="searchform form-inline input-group mb-3 my-md-0  my-lg-0" action="<?php echo esc_url(home_url('/')); ?>">

														<label class="screen-reader-text" for="s"><?php _x('Search for:', 'label'); ?></label>
														<input placeholder="Buscar no portal NTI" class="form-control search_field" type="text" value="<?php echo the_search_query(); ?>" name="s" id="s" />
														<button class="btn btn-warning my-sm-0 search_button" type="submit" id="searchsubmit" value="<?php echo esc_attr_x('Search', 'submit button'); ?>"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
																<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
															</svg>
														</button>

														</form>
													</div>
													</div>
												</div>
											
											<!-- inicia icones redes sociais-->
											<div class="row ">
												<div class="col-12">
												<div id="social-icons" class="float-right mr-2">
													<h2 class="sr-only visually-hidden">Redes Sociais</h2>

													<ul class="list-group list-group-horizontal pb-3 ">
													<li class="list-inline-item"><a href="https://facebook.com/ufabc" title="Facebook" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"><span>Facebook</span></i></a></li>
													<li class="list-inline-item"><a href="https://www.instagram.com/ufabc/" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="icon-instagram"><span>Instagram</span></i></a></li>
													<li class="list-inline-item"><a href="https://www.linkedin.com/school/ufabc" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="icon-linkedin"><span>LinkedIn</span></i></a></li>
													<li class="list-inline-item"><a href="https://twitter.com/ufabc" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="icon-twitter-sign"><span>Twitter</span></i></a></li>
													<li class="list-inline-item"><a href="http://www.ufabc.edu.br/contato/whatsapp" title="WhatsApp"><i class="fa fa-whatsapp" aria-hidden="true"><span>WhatsApp</span></i></a></li>
													<li class="list-inline-item"><a href="/noticias/ufabc-disponibiliza-novo-canal-de-divulgacao-de-noticias-no-telegram"><i class="fa fa-telegram" aria-hidden="true"><span>Telegram</span></i></a></li>
													<li class="list-inline-item"><a href="http://youtube.com/ufabcvideos" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="icon-youtube"><span>YouTube</span></i></a></li>
													</ul>
												</div><!-- div row -->
												</div>
											</div>	
										</div><!-- div col -->
									</div><!-- div row -->
								</div><!-- div col -->
							</div><!-- div row -->

						</div><!-- div col-10 -->
					</div>
				</div><!-- div row -->
				</div>
			</div>

		</div>

		<!-- inicia o menu do NTI-->
		<div class="container-fluid">
			<div class="row menu-header" id="navigation" >
				<div class="container-sm">						
							<nav role="navigation" aria-label="Menu principal" class="navbar navbar-expand-lg navbar-dark h-nav">

								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>

								<a class="navbar-brand" href="<?php $url = esc_url(home_url('/'));
									echo $url; ?>"><img alt="logonti" class="img-fluid logo2" src="<?php echo get_template_directory_uri(); ?>/images/logo_nti_branco_160.png" />
								</a>


								<div class="collapse navbar-collapse" id="navbarSupportedContent">
									<ul class="nav navbar-nav mr-auto">
										<?php get_sidebar('navmenu'); ?>
									</ul>
								</div>
								<!-- <div class="col-md-3">
								<form role="search" method="get" id="searchform" class="searchform form-inline my-2 my-lg-0" action="<?php echo esc_url(home_url('/')); ?>">
									<div>
										<label class="screen-reader-text" for="s"><?php _x('Search for:', 'label'); ?></label>
										<input placeholder="Buscar no portal" class="form-control mr-sm-2" type="text" value="<?php echo the_search_query(); ?>" name="s" id="s" />
										<button class="btn btn-warning my-2 my-sm-0" type="submit" id="searchsubmit" value="<?php echo esc_attr_x('Search', 'submit button'); ?>" /><img alt="Pesquisar" style=".img-fluid.max-width: 50%" src="<?php echo get_template_directory_uri(); ?>/images/magnifier.png" />
										</button>

									</div>
								</form>
								</div> -->
							</nav>
						</div>
					</div>
				</div>	
			</div>
		<!-- <div class="container-fluid  h-container">&#32; </div> -->
	</header>