

<footer id="footer" class="b-footer">
	<!-- Footer Links -->
	<div class="container-fluid text-center text-md-left">

		<!-- Grid row -->
		<div class="row m-2">
			<!-- 1/3 -->
			<div class="col-md-4 mb-md-0 mb-3 col-rodape">
			
				<?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-left-widget') ) ?>
			</div>
			<!-- /End 1/3 -->
			<!-- 2/3 -->
			<div class="col-md-4 mb-md-0 mb-3 col-rodape">
			
				<?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-center-widget') ) ?>
			</div>
			<!-- /End 2/3 -->
			<!-- 3/3 -->
			<div class="col-md-4 mb-md-0 mb-3 col-rodape ">
				<?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('footer-right-widget') ) ?>
			</div>
			<!-- /End 3/3 -->
			
		</div>	
	</div>
	<div id="footer-brasil"><div class="container"></div></div>
	<div class=" footer-copyright b-footer-rodape text-white  text-center "> Universidade Federal do ABC. Desenvolvido com <a alt="CMS de codigo Aberto - Wordpress" style="color:white; text-decoration:underline" href="https://br.wordpress.org/">CMS </a>de código aberto.
		<a href="/"> </a>
	</div>
	
	

	<!-- Copyright -->
		<!-- <div id="footer" class="b-footer-rodape text-white text-center card-footer">
				<p></p>

		</div> -->
				
	<!-- </div>
	</div> -->

	<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


	<script src="../wordpress/wp-content/themes/NTITheme/js/jquery.min.js"></script>
	<script src="../wordpress/wp-content/themes/NTITheme/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

	<script src="../wordpress/wp-content/themes/NTITheme/js/scripts.js"></script> -->


	<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->

	<!-- jquery-3.2.1.slim.min.js" e  https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" para aba de serviços lateral -->
	<!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> -->

	<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->


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
	<!-- <script> 
	// fixa a navbar no topo
	document.addEventListener("DOMContentLoaded", function(){
		window.addEventListener('scroll', function() {
			if (window.scrollY > 50) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
				document.getElementById('navbar_top').classList.remove('fixed-top');
				// remove padding top from body
				document.body.style.paddingTop = '0';
			}
		});
	});
	</script> -->
	
	<?php wp_footer();?> 
</footer>
</body>

</html>