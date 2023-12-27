<?php
// Register Custom Post Type
function custom_post_type_avisos()
{

  $labels = array(
    'name'                  => _x('Avisos', 'Avisos', 'text_domain'),
    'singular_name'         => _x('Avisos', 'Avisos', 'text_domain'),
    'menu_name'             => __('Avisos', 'text_domain'),
    'name_admin_bar'        => __('Post Type', 'text_domain'),
    'archives'              => __('Arquivos do item', 'text_domain'),
    'attributes'            => __('Atributos do item', 'text_domain'),
    'parent_item_colon'     => __('Parent Item:', 'text_domain'),
    'all_items'             => __('Todos itens', 'text_domain'),
    'add_new_item'          => __('Adicionar novo item', 'text_domain'),
    'add_new'               => __('Adicionar novo', 'text_domain'),
    'new_item'              => __('Novo item', 'text_domain'),
    'edit_item'             => __('Editar item', 'text_domain'),
    'update_item'           => __('Atualizar item', 'text_domain'),
    'view_item'             => __('Ver o item', 'text_domain'),
    'view_items'            => __('Ver os itens', 'text_domain'),
    'search_items'          => __('Procurar item', 'text_domain'),
    'not_found'             => __('Não encontrado', 'text_domain'),
    'not_found_in_trash'    => __('Não encontrado na lixeira', 'text_domain'),
    'featured_image'        => __('Featured Image', 'text_domain'),
    'set_featured_image'    => __('Set featured image', 'text_domain'),
    'remove_featured_image' => __('Remove featured image', 'text_domain'),
    'use_featured_image'    => __('Use as featured image', 'text_domain'),
    'insert_into_item'      => __('Insert into item', 'text_domain'),
    'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
    'items_list'            => __('Lista de itens', 'text_domain'),
    'items_list_navigation' => __('Items list navigation', 'text_domain'),
    'filter_items_list'     => __('Filter items list', 'text_domain'),
  );
  $args = array(
    'label'                 => __('Avisos', 'text_domain'),
    'description'           => __('Este tipo de post é destinado para o avisos', 'text_domain'),
    'labels'                => $labels,
    'supports'              => array('title', 'editor', 'excerpt', 'thumbnail'),
    'taxonomies'            => array('category', 'post_tag'),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 6,
    'menu_icon'             => 'dashicons-warning',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
  );
  register_post_type('avisos', $args);
}
add_action('init', 'custom_post_type_avisos', 0);
