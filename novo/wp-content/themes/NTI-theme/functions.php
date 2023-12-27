<?php

require get_template_directory() . '/custom-post-type/slider-home.php';
require get_template_directory() . '/custom-post-type/avisos.php';

//   1 - Add Image Category Field
add_action('category_add_form_fields', 'add_category_image', 10, 2);
function add_category_image($taxonomy)
{
?>
  <div class="form-field term-group">

    <label for="image_id"><?php _e('Image', 'taxt-domain'); ?></label>
    <input type="hidden" id="image_id" name="image_id" class="custom_media_url" value="">

    <div id="image_wrapper"></div>

    <p>
      <input type="button" class="button button-secondary taxonomy_media_button" id="taxonomy_media_button" name="taxonomy_media_button" value="<?php _e('Add Image', 'taxt-domain'); ?>">
      <input type="button" class="button button-secondary taxonomy_media_remove" id="taxonomy_media_remove" name="taxonomy_media_remove" value="<?php _e('Remove Image', 'taxt-domain'); ?>">
    </p>

  </div>
<?php
}
//  2 - save Image  Field
add_action('created_category', 'save_category_image', 10, 2);
function save_category_image($term_id, $tt_id)
{
  if (isset($_POST['image_id']) && '' !== $_POST['image_id']) {
    $image = $_POST['image_id'];
    add_term_meta($term_id, 'category_image_id', $image, true);
  }
}
// 3 -  Add Image  Field in Edit Category
add_action('category_edit_form_fields', 'update_category_image', 10, 2);
function update_category_image($term, $taxonomy)
{ ?>
  <tr class="form-field term-group-wrap">
    <th scope="row">
      <label for="image_id"><?php _e('Image', 'taxt-domain'); ?></label>
    </th>
    <td>

      <?php $image_id = get_term_meta($term->term_id, 'image_id', true); ?>
      <input type="hidden" id="image_id" name="image_id" value="<?php echo $image_id; ?>">

      <div id="image_wrapper">
        <?php if ($image_id) { ?>
          <?php echo wp_get_attachment_image($image_id, 'thumbnail'); ?>
        <?php } ?>

      </div>

      <p>
        <input type="button" class="button button-secondary taxonomy_media_button" id="taxonomy_media_button" name="taxonomy_media_button" value="<?php _e('Add Image', 'taxt-domain'); ?>">
        <input type="button" class="button button-secondary taxonomy_media_remove" id="taxonomy_media_remove" name="taxonomy_media_remove" value="<?php _e('Remove Image', 'taxt-domain'); ?>">
      </p>

      </div>
    </td>
  </tr>
<?php
}
// 4 -  Update Image  Field
add_action('edited_category', 'updated_category_image', 10, 2);
function updated_category_image($term_id, $tt_id)
{
  if (isset($_POST['image_id']) && '' !== $_POST['image_id']) {
    $image = $_POST['image_id'];
    update_term_meta($term_id, 'image_id', $image);
  } else {
    update_term_meta($term_id, 'image_id', '');
  }
}

// 5 - Enqueue Media Library
add_action('admin_enqueue_scripts', 'load_media');
function load_media()
{
  wp_enqueue_media();
}

add_action('admin_footer', 'add_custom_script');
function add_custom_script()
{
?> <script>
    jQuery(document).ready(function($) {
      function taxonomy_media_upload(button_class) {
        var custom_media = true,
          original_attachment = wp.media.editor.send.attachment;
        $('body').on('click', button_class, function(e) {
          var button_id = '#' + $(this).attr('id');
          var send_attachment = wp.media.editor.send.attachment;
          var button = $(button_id);
          custom_media = true;
          wp.media.editor.send.attachment = function(props, attachment) {
            if (custom_media) {
              $('#image_id').val(attachment.id);
              $('#image_wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
              $('#image_wrapper .custom_media_image').attr('src', attachment.url).css('display', 'block');
            } else {
              return original_attachment.apply(button_id, [props, attachment]);
            }
          }
          wp.media.editor.open(button);
          return false;
        });
      }
      taxonomy_media_upload('.taxonomy_media_button.button');
      $('body').on('click', '.taxonomy_media_remove', function() {
        $('#image_id').val('');
        $('#image_wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
      });

      $(document).ajaxComplete(function(event, xhr, settings) {
        var queryStringArr = settings.data.split('&');
        if ($.inArray('action=add-tag', queryStringArr) !== -1) {
          var xml = xhr.responseXML;
          $response = $(xml).find('term_id').text();
          if ($response != "") {
            $('#image_wrapper').html('');
          }
        }
      });
    });
  </script> <?php
          }

          //6 - Display Image in Column 
          add_filter('manage_edit-category_columns', 'display_image_column_heading');
          function display_image_column_heading($columns)
          {
            $columns['category_image'] = __('Image', 'taxt-domain');
            return $columns;
          }
          add_action('manage_category_custom_column', 'display_image_column_value', 10, 3);
          function display_image_column_value($columns, $column, $id)
          {
            if ('category_image' == $column) {
              $image_id = esc_html(get_term_meta($id, 'image_id', true));

              $columns = wp_get_attachment_image($image_id, array('50', '50'));
            }
            return $columns;
          }

          //   Add Image to Custom Category Field - like serv_category

          //Add image field in taxonomy page
          add_action('serv_category_add_form_fields', 'add_custom_taxonomy_image', 10, 2);
          function add_custom_taxonomy_image($taxonomy)
          {
            ?>
  <div class="form-field term-group">

    <label for="image_id"><?php _e('Image', 'taxt-domain'); ?></label>
    <input type="hidden" id="image_id" name="image_id" class="custom_media_url" value="">

    <div id="image_wrapper"></div>

    <p>
      <input type="button" class="button button-secondary taxonomy_media_button" id="taxonomy_media_button" name="taxonomy_media_button" value="<?php _e('Add Image', 'taxt-domain'); ?>">
      <input type="button" class="button button-secondary taxonomy_media_remove" id="taxonomy_media_remove" name="taxonomy_media_remove" value="<?php _e('Remove Image', 'taxt-domain'); ?>">
    </p>

  </div>
<?php
          }

          //Save the taxonomy image field
          add_action('created_serv_category', 'save_custom_taxonomy_image', 10, 2);
          function save_custom_taxonomy_image($term_id, $tt_id)
          {
            if (isset($_POST['image_id']) && '' !== $_POST['image_id']) {
              $image = $_POST['image_id'];
              add_term_meta($term_id, 'category_image_id', $image, true);
            }
          }

          //Add the image field in edit form page
          add_action('serv_category_edit_form_fields', 'update_custom_taxonomy_image', 10, 2);
          function update_custom_taxonomy_image($term, $taxonomy)
          { ?>
  <tr class="form-field term-group-wrap">
    <th scope="row">
      <label for="image_id"><?php _e('Image', 'taxt-domain'); ?></label>
    </th>
    <td>

      <?php $image_id = get_term_meta($term->term_id, 'image_id', true); ?>
      <input type="hidden" id="image_id" name="image_id" value="<?php echo $image_id; ?>">

      <div id="image_wrapper">
        <?php if ($image_id) { ?>
          <?php echo wp_get_attachment_image($image_id, 'thumbnail'); ?>
        <?php } ?>

      </div>

      <p>
        <input type="button" class="button button-secondary taxonomy_media_button" id="taxonomy_media_button" name="taxonomy_media_button" value="<?php _e('Add Image', 'taxt-domain'); ?>">
        <input type="button" class="button button-secondary taxonomy_media_remove" id="taxonomy_media_remove" name="taxonomy_media_remove" value="<?php _e('Remove Image', 'taxt-domain'); ?>">
      </p>

      </div>
    </td>
  </tr>
<?php
          }

          //Update the taxonomy image field
          add_action('edited_serv_category', 'updated_custom_taxonomy_image', 10, 2);
          function updated_custom_taxonomy_image($term_id, $tt_id)
          {
            if (isset($_POST['image_id']) && '' !== $_POST['image_id']) {
              $image = $_POST['image_id'];
              update_term_meta($term_id, 'image_id', $image);
            } else {
              update_term_meta($term_id, 'image_id', '');
            }
          }

          //Enqueue the wp_media library
          add_action('admin_enqueue_scripts', 'custom_taxonomy_load_media');
          function custom_taxonomy_load_media()
          {
            if (!isset($_GET['taxonomy']) || $_GET['taxonomy'] != 'serv_category') {
              return;
            }
            wp_enqueue_media();
          }

          //Custom script
          add_action('admin_footer', 'add_custom_taxonomy_script');
          function add_custom_taxonomy_script()
          {
            if (!isset($_GET['taxonomy']) || $_GET['taxonomy'] != 'serv_category') {
              return;
            }
?> <script>
    jQuery(document).ready(function($) {
      function taxonomy_media_upload(button_class) {
        var custom_media = true,
          original_attachment = wp.media.editor.send.attachment;
        $('body').on('click', button_class, function(e) {
          var button_id = '#' + $(this).attr('id');
          var send_attachment = wp.media.editor.send.attachment;
          var button = $(button_id);
          custom_media = true;
          wp.media.editor.send.attachment = function(props, attachment) {
            if (custom_media) {
              $('#image_id').val(attachment.id);
              $('#image_wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
              $('#image_wrapper .custom_media_image').attr('src', attachment.url).css('display', 'block');
            } else {
              return original_attachment.apply(button_id, [props, attachment]);
            }
          }
          wp.media.editor.open(button);
          return false;
        });
      }
      taxonomy_media_upload('.taxonomy_media_button.button');
      $('body').on('click', '.taxonomy_media_remove', function() {
        $('#image_id').val('');
        $('#image_wrapper').html('<img class="custom_media_image" src="" style="margin:0;padding:0;max-height:100px;float:none;" />');
      });

      $(document).ajaxComplete(function(event, xhr, settings) {
        var queryStringArr = settings.data.split('&');
        if ($.inArray('action=add-tag', queryStringArr) !== -1) {
          var xml = xhr.responseXML;
          $response = $(xml).find('term_id').text();
          if ($response != "") {
            $('#image_wrapper').html('');
          }
        }
      });
    });
  </script> <?php
          }

          //Add new column heading
          add_filter('manage_edit-serv_category_columns', 'display_custom_taxonomy_image_column_heading');
          function display_custom_taxonomy_image_column_heading($columns)
          {
            $columns['category_image'] = __('Image', 'taxt-domain');
            return $columns;
          }

          //Display new columns values
          add_action('manage_serv_category_custom_column', 'display_custom_taxonomy_image_column_value', 10, 3);
          function display_custom_taxonomy_image_column_value($columns, $column, $id)
          {
            if ('category_image' == $column) {
              $image_id = esc_html(get_term_meta($id, 'image_id', true));

              $columns = wp_get_attachment_image($image_id, array('50', '50'));
            }
            return $columns;
          }

          /* add widget - register widget, para varios propositos: sidebar, menu, cabeçalho, rodape, área do tutorial na homepage*/
          function nti_sidebar_widget_init()
          {

            register_sidebar(array(
              'name' => 'primary',
              'id' => 'sidebar-primary',
              'before_widget' => '<div>',
              'after_widget' => '</div>',
              'before_title' => '',
              'after_title' => '',
            ));

            register_sidebar(array(
              'name' => 'areatutoriais',
              'id' => 'sidebar-tutoriais',
              'class' => '',
              'before_widget' => '',
              'after_widget' => '',
              'before_title' => '',
              'after_title' => '',
            ));

            register_sidebar(array(
              'name' => 'rodape',
              'id' => 'sidebar-rodape',
              'before_widget' => '',
              'after_widget' => '',
              'before_title' => '',
              'after_title' => '',
            ));

            register_sidebar(array(
              'name' => 'navmenu',
              'id' => 'sidebar-navmenu',
              'before_widget' => '',
              'after_widget' => '',
              'before_title' => '',
              'after_title' => '',
            ));

            register_sidebar(array(
              'name' => 'areadestaque',
              'id' => 'sidebar-destaque',
              'class' => '',
              'before_widget' => '',
              'after_widget' => '',
              'before_title' => '',
              'after_title' => '',
            ));
            register_sidebar(array(
              'name' => 'areaprocessos',
              'id' => 'sidebar-processos',
              'class' => '',
              'before_widget' => '',
              'after_widget' => '',
              'before_title' => '',
              'after_title' => '',
            ));
          }
          /* add feature image : para acrescentar thumbnail nos posts */
          add_action('widgets_init', 'nti_sidebar_widget_init');

          /* REGISTTRAR WIDGETS ------------------------------------------------------------*/

          if (function_exists('register_sidebar')) {
            register_sidebar(array(
              'name' => 'Rodapé esquerda',
              'id'   => 'footer-left-widget',
              'class' => 'custom-menu-class',
              'description'   => 'Left Footer widget position.',
              'before_widget' => '<div class="custom-menu-class" id="%1$s">',
              'after_widget'  => '</div>',
              'before_title'  => '<h2>',
              'after_title'   => '</h2>'
            ));

            register_sidebar(array(
              'name' => 'Rodapé Centro 1',
              'id'   => 'footer-center-widget',
              'class' => '',
              'description'   => 'Centre Footer widget position.',
              'before_widget' => '<div class="custom-menu-class" id="%1$s">',
              'after_widget'  => '</div>',
              'before_title'  => '<h5>',
              'after_title'   => '</h5>'
            ));


            register_sidebar(array(
              'name' => 'Rodapé Direita',
              'id'   => 'footer-right-widget',
              'class' => 'custom-menu-class',
              'description'   => 'Right Footer widget position.',
              'before_widget' => '<div  class="custom-menu-class" id="%1$s">',
              'after_widget'  => '</div>',
              'before_title'  => '<h5>',
              'after_title'   => '</h5>'
            ));
          }

          function bootstrapstarter_wp_setup()
          {
            add_theme_support('title-tag');
            add_theme_support('post-thumbnails');
          }
          add_action('after_setup_theme', 'bootstrapstarter_wp_setup');

          /* add menu dropdown*/
          // function your_submenu_class($menu) {

          //     $menu = preg_replace('/ class="sub-menu"/','/ class="sub-menu yourclass" /',$menu);  

          //     return $menu;  

          //     }

          //     add_filter('wp_nav_menu','your_submenu_class'); 

          // function wpb_custom_new_menu() {
          //     register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
          //   }
          //   add_action( 'init', 'wpb_custom_new_menu' );

          // function register_my_menus() {
          //     register_nav_menus(
          //       array(
          //         'header-menu' => __( 'Header Menu' ),
          //         'extra-menu' => __( 'Extra Menu' )
          //       )
          //     );
          //   }
          //   add_action( 'init', 'register_my_menus' );

          /* classe para funcionalidade da Navbar com dropdown na horizontal, add no header.php: <?php wp_nav_menu( array( 'container_class' => '','container' => '',  'menu' => 'menu-menu-nti-1', 'walker'=> new DD_Wolker_Menu ) );?>  */
          // class DD_Wolker_Menu extends Walker_Nav_Menu {
          //     function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ){
          //         $GLOBALS['dd_children'] = ( isset($children_elements[$element->ID]) )? 1:0;
          //         $GLOBALS['dd_depth'] = (int) $depth;
          //         parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
          //     }
          // }
          // add_filter('nav_menu_css_class','add_parent_css',10,2);
          // function  add_parent_css($classes, $item){
          //      global  $dd_depth, $dd_children;
          //      $classes[] = 'depth'.$dd_depth;
          //      if($dd_children)
          //          $classes[] = 'parent';
          //     return $classes;
          // }


          /**
           * Positron functions and definitions
           *
           */

          /*
 * Set post views count using post meta
 */
          function wpb_set_post_views($postID)
          {
            $count_key = 'wpb_post_views_count';
            $count = get_post_meta($postID, $count_key, true);
            if ($count == '') {
              $count = 0;
              delete_post_meta($postID, $count_key);
              add_post_meta($postID, $count_key, '0');
            } else {
              $count++;
              update_post_meta($postID, $count_key, $count);
            }
          }
          //To keep the count accurate, lets get rid of prefetching
          remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

          function wpb_track_post_views($post_id)
          {
            if (!is_single()) return;
            if (empty($post_id)) {
              global $post;
              $post_id = $post->ID;
            }
            wpb_set_post_views($post_id);
          }
          add_action('wp_head', 'wpb_track_post_views');


          function wpb_get_post_views($postID)
          {
            $count_key = 'wpb_post_views_count';
            $count = get_post_meta($postID, $count_key, true);
            if ($count == '') {
              delete_post_meta($postID, $count_key);
              add_post_meta($postID, $count_key, '0');
              return "0 View";
            }
            return $count . ' Views';
          }


          /*@ Get Related Posts for Single Page */
          if (!function_exists('sc_get_related_posts_for_single')) {

            function sc_get_related_posts_for_single()
            {

              ob_start();

              $id = get_the_ID();

              /*@ Get current post's categories */
              $categories = get_the_category($id); // Disabled this if you want tag wise posts 

              /*@ Get current post's Tags */
              // $categories = wp_get_post_tags($id); // Enable this for tags wise related posts


              if (!empty($categories)) :

                /*@ Pluck all categories Ids */
                $categories_ids = array_column($categories, 'term_id');

                $related_args = [
                  'post_status'         => 'publish',
                  'category__in'        => $categories_ids, // Disabled this if you want tag wise posts
                  //'tag__in'        => $categories_ids, // Enable this for tag wise related posts
                  'post__not_in'        => [$id], // Exclude Current Post
                  'posts_per_page'      => 3, // Number of related posts to show
                  'ignore_sticky_posts' => 1
                ];

                $get_posts = new WP_Query($related_args);

                if ($get_posts->have_posts()) :

                  // echo '<div style="clear:both;"> </div>';
                  echo '<div class="bg-light ">';
                  echo '<div class="container-fluid ">';

                  echo '<div class="title"><h4>Relacionadas</h4></div>';

                  echo '<div  class="row">';


                  while ($get_posts->have_posts()) : $get_posts->the_post();
                    echo '<div  class="col-md-6 col-lg-4 mb-2 ">';
                    echo '<div  class="card bg-secondary p-2 border-bottom border-4 rounded-bottom rounded-1">';
                    echo '<a href="' . get_the_permalink() . '"><div class="card-img img-post-rel">' . get_the_post_thumbnail() . '</div><div class="title h-25">' . get_the_title() . '</div></a>';

                    echo '</div>';
                    echo '</div>';
                  endwhile;

                  echo '</div>';


                  echo '</div>';
                  echo '</div>';
                // echo '<div style="clear:both;"> </div>';

                endif;

              endif;

              return ob_get_clean();
            }
            add_shortcode('prefix_related_posts_for_single', 'sc_get_related_posts_for_single');
          }


          /**
           * If the theme doesn't have any single doc handler, load that from
           * the plugin.
           *
           * @param string $template
           *
           * @return string
           */
          function template_loader($template)
          {
            $find = ['single-ntiservice.php'];
            $file = '';

            if (is_single() && get_post_type() == 'ntiservice') {
              $file   = 'single-ntiservice.php';
              $find[] = $file;
              $find[] = wedocs()->theme_dir_path() . $file;
            }

            if ($file) {
              $template = locate_template($find);

              if (!$template) {
                $template = wedocs()->template_path() . $file;
              }
            }

            return $template;
          }

          function wpdocs_ntiservice_init()
          {
            $labels = array(
              'name'                  => _x('Ntiservices', 'Post type general name', 'textdomain'),
              'singular_name'         => _x('Ntiservice', 'Post type singular name', 'textdomain'),
              'menu_name'             => _x('Ntiservices', 'Admin Menu text', 'textdomain'),
              'name_admin_bar'        => _x('Ntiservices', 'Add New on Toolbar', 'textdomain'),
              'add_new'               => __('Adicionar novo', 'textdomain'),
              'add_new_item'          => __('Adicionar novo Serviço', 'textdomain'),
              'new_item'              => __('Novo serviço', 'textdomain'),
              'edit_item'             => __('Editar serviço', 'textdomain'),
              'view_item'             => __('Visualizar serviço', 'textdomain'),
              'all_items'             => __('Todos Serviços', 'textdomain'),
              'search_items'          => __('Buscar serviços', 'textdomain'),
              'parent_item_colon'     => __('Serviço Ascendente:', 'textdomain'),
              'not_found'             => __('Serviço não encontrado.', 'textdomain'),
              'not_found_in_trash'    => __('Serviço não encontrado na lixeira.', 'textdomain'),
              'featured_image'        => _x('Imagem Destacada', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain'),
              'set_featured_image'    => _x('Definir Imagem Destacada', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain'),
              'remove_featured_image' => _x('Remover Imagem Destacada', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain'),
              'use_featured_image'    => _x('Use como Imagem Destacada', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain'),
              'archives'              => _x('Ntiservice archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain'),
              'insert_into_item'      => _x('Insert into ntiservice', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain'),
              'uploaded_to_this_item' => _x('Uploaded to this ntiservice', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain'),
              'filter_items_list'     => _x('Filter ntiservices list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain'),
              'items_list_navigation' => _x('Ntiservices list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain'),
              'items_list'            => _x('Ntiservices list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain'),
            );
            $args = array(
              'labels'             => $labels,
              'description'        => 'Ntiservice custom post type.',
              'public'             => true,
              'publicly_queryable' => true,
              'show_ui'            => true,
              'show_in_menu'       => true,
              'query_var'          => true,
              // 'rewrite'            => array( 'slug' => 'ntiservice' ),
              'rewrite'            => false,
              'capability_type'    => 'post',
              'has_archive'        => true,
              'hierarchical'       => true,
              'exclude_from_search' => false,
              'menu_position'      => 20,
              'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
              'taxonomies'         => array('serv_category', 'serv_tag'),
              'show_in_rest'       => true, //to appear in Gutemberg editor
              'rest_base'          => 'ntiservice',
              'rest_controller_class' => 'WP_REST_Posts_Controller',

            );

            register_post_type('ntiservice', $args);
          }
          add_action('init', 'wpdocs_ntiservice_init');


          /**
           * Create two taxonomies, serv-category and serv_tag for the post type "ntiservice".
           *
           * @see register_post_type() for registering custom post types.
           */
          function wpdocs_create_ntiservice_taxonomies()
          {
            // Add new taxonomy, make it hierarchical (like categories)
            $labels = array(
              'name'              => _x('Categoria de Serviços', 'taxonomy general name', 'textdomain'),
              'singular_name'     => _x('Categoria', 'taxonomy singular name', 'textdomain'),
              'search_items'      => __('Buscar Categorias', 'textdomain'),
              'all_items'         => __('Todas Categorias', 'textdomain'),
              'parent_item'       => __('Categoria Ascendente', 'textdomain'),
              'parent_item_colon' => __('Categoria Ascendente:', 'textdomain'),
              'edit_item'         => __('Editar Categoria', 'textdomain'),
              'update_item'       => __('Atualizar Categoria', 'textdomain'),
              'add_new_item'      => __('Adicionar Categoria', 'textdomain'),
              'new_item_name'     => __('Nova Categoria', 'textdomain'),
              'menu_name'         => __('Categoria', 'textdomain'),
            );

            $args = array(
              'hierarchical'      => true,
              'labels'            => $labels,
              'show_ui'           => true,
              'show_admin_column' => true,
              'query_var'         => true,
              // 'rewrite'           => array( 'slug' => 'servcategory' ),
              'show_in_rest'       => true, //to appear in Gutemberg editor
            );

            register_taxonomy('serv_category', array('ntiservice'), $args);

            unset($args);
            unset($labels);

            // Add new taxonomy, NOT hierarchical (like tags)
            $labels = array(
              'name'                       => _x('Tags dos Serviços', 'taxonomy general name', 'textdomain'),
              'singular_name'              => _x('Tags', 'taxonomy singular name', 'textdomain'),
              'search_items'               => __('Buscar tags', 'textdomain'),
              'popular_items'              => __('Popular tags', 'textdomain'),
              'all_items'                  => __('Todas tags', 'textdomain'),
              'parent_item'                => null,
              'parent_item_colon'          => null,
              'edit_item'                  => __('Editar tags', 'textdomain'),
              'update_item'                => __('Atualizar tags', 'textdomain'),
              'add_new_item'               => __('Adicionar nova tag', 'textdomain'),
              'new_item_name'              => __('Nome de tags novas', 'textdomain'),
              'separate_items_with_commas' => __('Separar tags com commas', 'textdomain'),
              'add_or_remove_items'        => __('Adicionar ou remover tags', 'textdomain'),
              'choose_from_most_used'      => __('Escolher entre as tags mais usadas', 'textdomain'),
              'not_found'                  => __('Tags não encontradas.', 'textdomain'),
              'menu_name'                  => __('Tags', 'textdomain'),
            );

            $args = array(
              'hierarchical'          => false,
              'labels'                => $labels,
              'show_ui'               => true,
              'show_admin_column'     => true,
              'update_count_callback' => '_update_post_term_count',
              'query_var'             => true,
              // 'rewrite'               => array( 'slug' => 'writer' ),
              'show_in_rest'       => true,
            );

            register_taxonomy('serv_tag', 'ntiservice', $args);
          }
          // hook into the init action and call create_book_taxonomies when it fires
          add_action('init', 'wpdocs_create_ntiservice_taxonomies', 0);
          //fim de post_type ntiservice

          // register custom post type to work with------------------------------------------------------
          function event_create_post_type()
          {
            // set up labels
            $labels = array(
              'name' => 'Events',
              'singular_name' => 'Event',
              'add_new' => 'Adiona Novo Evento',
              'add_new_item' => 'Adiciona Novo Evento',
              'edit_item' => 'Edita Evento',
              'new_item' => 'Novo Evento',
              'all_items' => 'Todos Eventos',
              'view_item' => 'Visualizar Evento',
              'search_items' => 'Bucar Eventos',
              'not_found' => 'Nenhum Evento Encontrados',
              'not_found_in_trash' => 'Nenhum Evento encontrado na lixeira',
              'parent_item_colon' => '',
              'menu_name' => 'Eventos',
            );
            //register post type
            register_post_type(
              'event',
              array(
                'labels' => $labels,
                'has_archive' => true,
                'public' => true,
                'supports' => array('title', 'editor', 'excerpt', 'custom-fields', 'thumbnail', 'page-attributes'),
                'taxonomies' => array('event_category', 'event_tag'),
                'exclude_from_search' => false,
                'capability_type' => 'post',
                'rewrite' => array('slug' => 'events'),
                'show_ui'           => true,
                'show_admin_column' => true,
                'query_var'         => true,
                'show_in_rest'       => true, //to appear in Gutemberg editor
              )
            );
          }
          add_action('init', 'event_create_post_type');

          /**
           * Create two taxonomies, serv-category and serv_tag for the post type "ntiservice".
           *
           * @see register_post_type() for registering custom post types.
           */
          function wpdocs_create_event_taxonomies()
          {
            // Add new taxonomy, make it hierarchical (like categories)
            $labels = array(
              'name'              => _x('Categoria de Eventos', 'taxonomy general name', 'textdomain'),
              'singular_name'     => _x('Categoria', 'taxonomy singular name', 'textdomain'),
              'search_items'      => __('Buscar Categorias', 'textdomain'),
              'all_items'         => __('Todas Categorias', 'textdomain'),
              'parent_item'       => __('Categoria Ascendente', 'textdomain'),
              'parent_item_colon' => __('Categoria Ascendente:', 'textdomain'),
              'edit_item'         => __('Editar Categoria', 'textdomain'),
              'update_item'       => __('Atualizar Categoria', 'textdomain'),
              'add_new_item'      => __('Adicionar Categoria', 'textdomain'),
              'new_item_name'     => __('Nova Categoria', 'textdomain'),
              'menu_name'         => __('Categoria', 'textdomain'),
            );

            $args = array(
              'hierarchical'      => true,
              'labels'            => $labels,
              'show_ui'           => true,
              'show_admin_column' => true,
              'query_var'         => true,
              'show_in_rest'       => true, //to appear in Gutemberg editor
            );

            register_taxonomy('event_category', array('event'), $args);

            unset($args);
            unset($labels);

            // Add new taxonomy, NOT hierarchical (like tags)
            $labels = array(
              'name'                       => _x('Tags dos Eventos', 'taxonomy general name', 'textdomain'),
              'singular_name'              => _x('Tags', 'taxonomy singular name', 'textdomain'),
              'search_items'               => __('Buscar tags', 'textdomain'),
              'popular_items'              => __('Popular tags', 'textdomain'),
              'all_items'                  => __('Todas tags', 'textdomain'),
              'parent_item'                => null,
              'parent_item_colon'          => null,
              'edit_item'                  => __('Editar tags', 'textdomain'),
              'update_item'                => __('Atualizar tags', 'textdomain'),
              'add_new_item'               => __('Adicionar nova tag', 'textdomain'),
              'new_item_name'              => __('Nome de tags novas', 'textdomain'),
              'separate_items_with_commas' => __('Separar tags com commas', 'textdomain'),
              'add_or_remove_items'        => __('Adicionar ou remover tags', 'textdomain'),
              'choose_from_most_used'      => __('Escolher entre as tags mais usadas', 'textdomain'),
              'not_found'                  => __('Tags não encontradas.', 'textdomain'),
              'menu_name'                  => __('Tags', 'textdomain'),
            );

            $args = array(
              'hierarchical'          => false,
              'labels'                => $labels,
              'show_ui'               => true,
              'show_admin_column'     => true,
              'update_count_callback' => '_update_post_term_count',
              'query_var'             => true,
              // 'rewrite'               => array( 'slug' => 'writer' ),
              'show_in_rest'       => true,
            );

            register_taxonomy('event_tag', 'event', $args);
          }
          // hook into the init action and call create_book_taxonomies when it fires
          add_action('init', 'wpdocs_create_event_taxonomies', 0);
          //fim de post_type event




          //     add_filter( 'pre_get_posts', 'my_get_posts' );

          // function my_get_posts( $query ) {

          // 	if ( is_home() && $query->is_main_query() )
          // 		$query->set( 'post_type', array( 'post') );

          // 	return $query;
          // }

          //BreadCrumbs
          /**
           * Generate breadcrumbs
           */
          function get_breadcrumb()
          {
            global $post;
            $post_type = $post->post_type;
            echo '<ol class="breadcrumb">';
            // if(get_post_type() == 'event') {

            //   echo '<li><a href="';
            //     echo get_option('home');
            //     echo '">';
            //     echo 'Home';
            //     echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
            //     echo '</a>';
            //     // $url = esc_url(home_url('events/?event_category'));
            //     echo '<a href="">Eventos</a>';
            //     echo " &nbsp;&nbsp;&#187;&nbsp;&nbsp; ";
            //     echo  the_title();
            // }
            // if(get_post_type() == 'ntiservice') {

            //     echo '<li><a href="';
            //       echo get_option('home');
            //       echo '">';
            //       echo 'Home';
            //       echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
            //       echo '</a>';
            //       echo '<a href="">Serviços</a>';
            //       echo " &nbsp;&nbsp;&#187;&nbsp;&nbsp; ";
            //       echo  the_title();
            //   }
            if (!is_home()) {
              echo '<li class="breadcrumb-item"><a href="' . home_url() . '">';
              echo 'Página Inicial';
              echo '</a></li>';
              if (is_category() || is_single()) {
                the_category(' &bull; ');
                if (is_single()) {
                  echo '<li class="breadcrumb-item">' . get_the_title() . '</li>';
                }
              } elseif (is_page()) {
                echo '<li class="breadcrumb-item">' . get_the_title() . '</li>';
              } elseif (is_search()) {
                echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;Search Results for... ";
                echo '"<em>';
                echo the_search_query();
                echo '</em>"';
              }
            }
            echo '</ol>';
          }
          // Filter except length to 15 words.
          // tn custom excerpt length
          function tn_custom_excerpt_length($length)
          {
            return 15;
          }
          add_filter('excerpt_length', 'tn_custom_excerpt_length', 999);
