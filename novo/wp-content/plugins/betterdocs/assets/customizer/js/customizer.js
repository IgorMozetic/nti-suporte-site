/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./react-src/admin/customizer/customizer.js ***!
  \**************************************************/
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {
  // Container width
  wp.customize("betterdocs_doc_page_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-color", to);
    });
  });
  wp.customize("betterdocs_doc_page_background_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-image", "url(" + to + ")");
    });
  });
  wp.customize("betterdocs_doc_page_background_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-size", to);
    });
  });
  wp.customize("betterdocs_doc_page_background_repeat", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-repeat", to);
    });
  });
  wp.customize("betterdocs_doc_page_background_attachment", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-attachment", to);
    });
  });
  wp.customize("betterdocs_doc_page_background_position", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper").css("background-position", to);
    });
  });
  wp.customize("betterdocs_doc_page_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_page_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_page_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_doc_page_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_page_content_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("width", to + "%");
    });
  });
  wp.customize("betterdocs_doc_page_content_max_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-content-wrapper").css("max-width", to + "px");
    });
  });

  /* CATEGORY COLUMN SETTINGS */
  //Category Title Padding Bottom for only layout 1
  wp.customize("betterdocs_doc_page_cat_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-inner-wrapper .betterdocs-category-header .betterdocs-category-header-inner").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_page_column_space", function (value) {
    value.bind(function (to) {
      // Category grid margin-bottom
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper.masonry > .betterdocs-single-category-wrapper").css("margin-bottom", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper.masonry").attr("data-column_space_desktop", to);

      // Category grid without masonry
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper.layout-flex").css("--gap", to);

      // Category box layout
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper.layout-flex").css("--gap", to);
    });
  });

  //Doc Category Background Color for Grid Categories
  wp.customize("betterdocs_doc_page_column_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("background-color", to);
      value.bind(function (to) {
        $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-category-grid-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("background-color", to);
      });
    });
  });

  //Doc Category Background Color for Box Categories
  wp.customize("betterdocs_doc_page_column_bg_color2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("background-color", to);
    });
  });

  // //Doc Category Hover Background Color for Box Categories
  // wp.customize( 'betterdocs_doc_page_column_hover_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper:hover' ).css( 'background-color', to );
  //     } );
  // });

  //Doc Page Category Padding Top
  wp.customize("betterdocs_doc_page_column_padding_top", function (value) {
    value.bind(function (to) {
      // For Category Grid
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-category-header, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-body:first-of-type").css("padding-top", to + "px");

      // $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-category-header').css('padding-top', to + 'px');

      // For Category Box
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-single-category-wrapper").css("padding-top", to + "px");
    });
  });

  //Doc Page Category Padding Bottom
  wp.customize("betterdocs_doc_page_column_padding_bottom", function (value) {
    value.bind(function (to) {
      // For Category Grid
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-body:last-of-type, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-footer").css("padding-bottom", to + "px");
      // $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-footer' ).css( 'padding-bottom', to + 'px' );

      // For Category Box
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-single-category-wrapper").css("padding-bottom", to + "px");
    });
  });

  //Doc Page Category Padding Left
  wp.customize("betterdocs_doc_page_column_padding_left", function (value) {
    value.bind(function (to) {
      // For Category Grid
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-category-header, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-body, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-footer").css("padding-left", to + "px");

      // For Category Box
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-single-category-wrapper").css("padding-left", to + "px");
    });
  });

  //Doc Page Category Padding Right
  wp.customize("betterdocs_doc_page_column_padding_right", function (value) {
    value.bind(function (to) {
      // For Category Grid
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-category-header, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-body, .betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-footer").css("padding-right", to + "px");

      // For Category Box
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-single-category-wrapper").css("padding-right", to + "px");
    });
  });

  //Grid Category Icon without Layout 4
  wp.customize("betterdocs_doc_page_cat_icon_size_layout1", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-4) .betterdocs-category-grid-wrapper .betterdocs-single-category-wrapper .betterdocs-category-header .betterdocs-category-icon .betterdocs-category-icon-img").css("height", to + "px");
    });
  });

  //Box Category Icon without Layout 4
  wp.customize("betterdocs_doc_page_cat_icon_size_layout2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-2 .betterdocs-category-box-wrapper .betterdocs-single-category-wrapper .betterdocs-category-header .betterdocs-category-icon .betterdocs-category-icon-img").css("height", to + "px");
    });
  });

  //Doc Column Border Radius (Top Left)
  wp.customize("betterdocs_doc_page_column_borderr_topleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("border-top-left-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("border-top-left-radius", to + "px");
    });
  });

  //Doc Column Border Radius (Top Right)
  wp.customize("betterdocs_doc_page_column_borderr_topright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("border-top-right-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("border-top-right-radius", to + "px");
    });
  });

  //Doc Column Border Radius (Bottom Left)
  wp.customize("betterdocs_doc_page_column_borderr_bottomleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("border-bottom-left-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-body:last-child").css("border-bottom-left-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-footer:last-child").css("border-bottom-left-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("border-bottom-left-radius", to + "px");
    });
  });

  //Doc Column Border Radius (Bottom Right)
  wp.customize("betterdocs_doc_page_column_borderr_bottomright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("border-bottom-right-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-body:last-child").css("border-bottom-right-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-footer:last-child").css("border-bottom-right-radius", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper").css("border-bottom-right-radius", to + "px");
    });
  });

  //Doc Category Title Font Size for Layout 1, 2, 3, 5
  wp.customize("betterdocs_doc_page_cat_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-4):not(.betterdocs-category-layout-6) .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-4):not(.betterdocs-category-layout-6) .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title a").css("font-size", to + "px");
      //Doc Box Category Title Font Size for Layout 4
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper > .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title").css("font-size", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-single-category-inner .betterdocs-category-title a").css("font-size", to + "px");
    });
  });

  //DocCategory Title Color For Layout 1
  wp.customize("betterdocs_doc_page_cat_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title:not(a)").css("color", to);
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title a").css("color", to);
    });
  });

  // DocCategory Title Border Color For Layout 1
  wp.customize("betterdocs_doc_page_cat_title_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-inner-wrapper .betterdocs-category-header .betterdocs-category-header-inner").css("border-bottom", "2px solid" + to);
    });
  });

  //DocCategory Title Color For Layout 2, 3, 4, 5, 6 || Layout 6 Specfic selector included because defaults are not working on layout 6
  wp.customize("betterdocs_doc_page_cat_title_color2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-1) .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title, .betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-1) .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title a, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-6 .betterdocs-category-grid-list-wrapper .betterdocs-category-grid-list-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title a").css("color", to);
    });
  });

  // //DocCategory Title Hover Color
  // wp.customize( 'betterdocs_doc_page_cat_title_hover_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-title:hover' ).css( 'color', to );
  //     } );
  // });

  //Doc Box Category Description Color
  wp.customize("betterdocs_doc_page_cat_desc_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-description").css("color", to);
    });
  });

  // //Doc Layout 2 Border Bottom Width
  // wp.customize( 'betterdocs_doc_page_box_border_bottom_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-2 .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper.border-bottom .betterdocs-single-category-wrapper:hover' ).css( 'border-bottom', to + 'px solid transparent' );
  //     } );
  // });

  // //Doc Layout 2 Border Bottom Color
  // wp.customize( 'betterdocs_doc_page_box_border_bottom_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-2 .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper.border-bottom .betterdocs-single-category-wrapper:hover' ).css( 'border-bottom-color', to );
  //     } );
  // });

  //Doc Layout 1 Category Content Background Color
  wp.customize("betterdocs_doc_page_article_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-body,.betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-footer").css("background-color", to);
    });
  });

  // Item Count Font Size (Doc Page Layout 1, 2, 3, 4, 5)
  wp.customize("betterdocs_doc_page_item_count_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-6) .betterdocs-single-category-wrapper .betterdocs-category-items-counts span").css("font-size", to + "px");
    });
  });

  //Doc Layout 1 Item Count Color
  wp.customize("betterdocs_doc_page_item_count_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("color", to);
    });
  });

  //Doc Layout 2,3,4,5 Item Count Color
  wp.customize("betterdocs_doc_page_item_count_color_layout2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper:not(.betterdocs-category-layout-1):not(.betterdocs-category-layout-6) .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-category-items-counts span").css("color", to);
    });
  });

  //Doc Layout 1 Item Count Background
  wp.customize("betterdocs_doc_page_item_count_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts").css("background-color", to);
    });
  });

  //Doc Layout 1 Item Count Inner Circle Background
  wp.customize("betterdocs_doc_page_item_count_inner_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("background-color", to);
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Type
  wp.customize("betterdocs_doc_page_item_count_border_type", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-style", to);
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Color
  wp.customize("betterdocs_doc_page_item_count_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-color", to);
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Top Width
  wp.customize("betterdocs_doc_page_item_count_inner_border_width_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-top-width", to + "px");
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Right Width
  wp.customize("betterdocs_doc_page_item_count_inner_border_width_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-right-width", to + "px");
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Bottom Width
  wp.customize("betterdocs_doc_page_item_count_inner_border_width_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-bottom-width", to + "px");
    });
  });

  //Doc Layout 1 Item Count Inner Circle Border Left Width
  wp.customize("betterdocs_doc_page_item_count_inner_border_width_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("border-left-width", to + "px");
    });
  });

  //Doc Layout 1 Item Count Inner Circle Width / Height
  wp.customize("betterdocs_doc_page_item_counter_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("height", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper > *:not(.betterdocs-grid-top-row-wrapper) .betterdocs-category-items-counts span").css("width", to + "px");
    });
  });

  //Doc Layout 2, 3, 4, 5 Content Space Between Image
  wp.customize("betterdocs_doc_page_column_content_space_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-2 .betterdocs-category-icon").css("margin-bottom", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-3 .betterdocs-category-icon").css("margin-right", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4:not(.betterdocs-category-layout-2):not(.betterdocs-mkb-layout-1) .betterdocs-category-box-inner-wrapper .betterdocs-category-icon").css("margin-right", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-5 .betterdocs-category-icon").css("margin-right", to + "px");
    });
  });

  //Doc Layout 2, 3, 4, 5 Item Title Space
  wp.customize("betterdocs_doc_page_column_content_space_title", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-category-header .betterdocs-category-title").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 2, 3, 4, 5 Item Description Space
  wp.customize("betterdocs_doc_page_column_content_space_desc", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-category-header .betterdocs-category-description").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 2, 3, 4, 5 Item Counter Space
  wp.customize("betterdocs_doc_page_column_content_space_counter", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper .betterdocs-category-box-wrapper .betterdocs-category-box-inner-wrapper .betterdocs-category-header .betterdocs-category-items-counts").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 1 Doc List Background Color
  wp.customize("betterdocs_doc_page_article_list_button_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list").css("background-color", to);
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list .betterdocs-nested-category-list").css("background-color", to);
    });
  });

  //Doc Layout 1 Doc List Padding Top
  wp.customize("betterdocs_doc_page_article_list_padding_top_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper ul").css("padding-top", to + "px");
    });
  });

  //Doc Layout 1 Doc List Padding Bottom
  wp.customize("betterdocs_doc_page_article_list_padding_bottom_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper ul").css("padding-bottom", to + "px");
    });
  });

  //Doc Layout 1 Doc List Padding Right
  wp.customize("betterdocs_doc_page_article_list_padding_right_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper ul").css("padding-right", to + "px");
    });
  });

  //Doc Layout 1 Doc List Padding Left
  wp.customize("betterdocs_doc_page_article_list_padding_left_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper ul").css("padding-left", to + "px");
    });
  });

  //Doc Layout 1 Doc List Color
  wp.customize("betterdocs_doc_page_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li a").css("color", to);
    });
  });

  //Doc Layout 4 Docs List Color
  wp.customize("betterdocs_doc_page_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li a").css("color", to);
    });
  });

  //Doc Layout 1 Doc List Hover Color
  wp.customize("betterdocs_doc_page_article_list_hover_color", function (value) {
    value.bind(function (to) {
      // $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li a:hover' ).css( 'color', to );
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  //Doc Layout 4 Docs List Hover Color
  wp.customize("betterdocs_doc_page_article_list_hover_color", function (value) {
    value.bind(function (to) {
      // $( '.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li a:hover' ).css( 'color', to );
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  //Doc Layout 1 Doc List Font Size
  wp.customize("betterdocs_doc_page_article_list_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  //Doc Layout 4 Docs List Font Size
  wp.customize("betterdocs_doc_page_article_list_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  //Doc Layout 1 Doc List Icon Color
  wp.customize("betterdocs_doc_page_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  //Doc Layout 1 Doc List Icon Font Size
  wp.customize("betterdocs_doc_page_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  //Doc Layout 1 Doc List Item Margin Top
  wp.customize("betterdocs_doc_page_article_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper), .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper").css("margin-top", to + "px");
    });
  });

  //Doc Layout 1 Doc List Item Margin Right
  wp.customize("betterdocs_doc_page_article_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper),.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper .betterdocs-nested-category-title").css("margin-right", to + "px");
    });
  });

  //Doc Layout 1 Doc List Item Margin Bottom
  wp.customize("betterdocs_doc_page_article_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 1 Doc List Item Margin Left
  wp.customize("betterdocs_doc_page_article_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper),.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li.betterdocs-nested-category-wrapper .betterdocs-nested-category-title").css("margin-left", to + "px");
    });
  });

  //Doc Layout 4 Docs List Item Margin Top
  wp.customize("betterdocs_doc_page_article_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });

  //Doc Layout 4 Docs List Item Margin Right
  wp.customize("betterdocs_doc_page_article_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li").css("margin-right", to + "px");
    });
  });

  //Doc Layout 4 Docs List Item Margin Bottom
  wp.customize("betterdocs_doc_page_article_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 4 Docs List Item Margin Left
  wp.customize("betterdocs_doc_page_article_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li").css("margin-left", to + "px");
    });
  });

  // Doc Layout 1 Doc List Item Padding Top
  wp.customize("betterdocs_doc_page_article_list_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("padding-top", to + "px");
    });
  });

  // Doc Layout 1 Doc List Item Padding Right
  wp.customize("betterdocs_doc_page_article_list_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("padding-right", to + "px");
    });
  });

  // Doc Layout 1 Doc List Item Padding Bottom
  wp.customize("betterdocs_doc_page_article_list_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("padding-bottom", to + "px");
    });
  });

  // Doc Layout 1 Doc List Item Padding Left
  wp.customize("betterdocs_doc_page_article_list_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("padding-left", to + "px");
    });
  });

  //Doc Layout 1 Docs Subcategory Color
  wp.customize("betterdocs_doc_page_article_subcategory_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title a,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list .betterdocs-nested-category-title a").css("color", to);
    });
  });

  //Doc Layout 4 Docs Subcategory Color
  wp.customize("betterdocs_doc_page_article_subcategory_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title a").css("color", to);
    });
  });

  //Doc Layout 1 Docs Subcategory Font Size
  wp.customize("betterdocs_doc_page_article_subcategory_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title a").css("font-size", to + "px");
    });
  });

  //Doc Layout 4 Docs Subcategory Font Size
  wp.customize("betterdocs_doc_page_article_subcategory_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title a").css("font-size", to + "px");
    });
  });

  //Doc Layout 1 Subcategory Icon Color
  wp.customize("betterdocs_doc_page_subcategory_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title svg,.betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list .betterdocs-nested-category-title svg").css("fill", to);
    });
  });

  //Doc Layout 4 Subcategory Icon Color
  wp.customize("betterdocs_doc_page_subcategory_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title svg").css("fill", to);
    });
  });

  //Doc Layout 1 Subcategory Icon Font Size
  wp.customize("betterdocs_doc_page_subcategory_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title svg").css("font-size", to + "px");
    });
  });

  //Doc Layout 4 Subcategory Icon Font Size
  wp.customize("betterdocs_doc_page_subcategory_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-title svg").css("font-size", to + "px");
    });
  });

  //Doc Layout 1 Subcategory Docs List Color
  wp.customize("betterdocs_doc_page_subcategory_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list li a").css("color", to);
    });
  });

  //Doc Layout 4 Subcategory Docs List Color
  wp.customize("betterdocs_doc_page_subcategory_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list li a").css("color", to);
    });
  });

  //Doc Layout 1 Subcategory List Icon Color
  wp.customize("betterdocs_doc_page_subcategory_article_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list li svg").css("fill", to);
    });
  });

  //Doc Layout 4 Subcategory List Icon Color
  wp.customize("betterdocs_doc_page_subcategory_article_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-body .betterdocs-articles-list li .betterdocs-nested-category-list li svg").css("fill", to);
    });
  });

  //Doc Layout 1 Doc Explore Button BackColor
  wp.customize("betterdocs_doc_page_explore_btn_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("background-color", to);
    });
  });

  //Doc Layout 4 Doc Explore Button BackColor
  wp.customize("betterdocs_doc_page_explore_btn_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("background-color", to);
    });
  });

  //Doc Layout 1 Doc Explore Button Text Color
  wp.customize("betterdocs_doc_page_explore_btn_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("color", to);
    });
  });

  //Doc Layout 4 Doc Explore Button Text Color
  wp.customize("betterdocs_doc_page_explore_btn_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("color", to);
    });
  });

  //Doc Layout 1 Explore Button Border-Color
  wp.customize("betterdocs_doc_page_explore_btn_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-color", to);
    });
  });

  //Doc Layout 4 Explore Button Border Color
  wp.customize("betterdocs_doc_page_explore_btn_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-color", to);
    });
  });

  //Doc Layout 1 Explore Button Font Size
  wp.customize("betterdocs_doc_page_explore_btn_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("font-size", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Font Size
  wp.customize("betterdocs_doc_page_explore_btn_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("font-size", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Border Width
  wp.customize("betterdocs_doc_page_explore_btn_border_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-width", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Border Width
  wp.customize("betterdocs_doc_page_explore_btn_border_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-width", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Padding Top
  wp.customize("betterdocs_doc_page_explore_btn_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("padding-top", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Padding Top
  wp.customize("betterdocs_doc_page_explore_btn_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("padding-top", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Padding Right
  wp.customize("betterdocs_doc_page_explore_btn_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("padding-right", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Padding Right
  wp.customize("betterdocs_doc_page_explore_btn_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("padding-right", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Padding Bottom
  wp.customize("betterdocs_doc_page_explore_btn_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("padding-bottom", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Padding Bottom
  wp.customize("betterdocs_doc_page_explore_btn_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("padding-bottom", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Padding Left
  wp.customize("betterdocs_doc_page_explore_btn_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("padding-left", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Padding Left
  wp.customize("betterdocs_doc_page_explore_btn_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("padding-left", to + "px");
    });
  });
  //Doc Layout 1 Explore Button Margin Top
  wp.customize("betterdocs_doc_page_explore_btn_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("margin-top", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Margin Top
  wp.customize("betterdocs_doc_page_explore_btn_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("margin-top", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Margin Right
  wp.customize("betterdocs_doc_page_explore_btn_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("margin-right", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Margin Right
  wp.customize("betterdocs_doc_page_explore_btn_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("margin-right", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Margin Bottom
  wp.customize("betterdocs_doc_page_explore_btn_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Margin Bottom
  wp.customize("betterdocs_doc_page_explore_btn_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("margin-bottom", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Margin Left
  wp.customize("betterdocs_doc_page_explore_btn_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("margin-left", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Margin Left
  wp.customize("betterdocs_doc_page_explore_btn_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("margin-left", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Border Radius Top-Left
  wp.customize("betterdocs_doc_page_explore_btn_borderr_topleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-top-left-radius", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Border Radius Top-Left
  wp.customize("betterdocs_doc_page_explore_btn_borderr_topleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-top-left-radius", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Border Radius Top-Right
  wp.customize("betterdocs_doc_page_explore_btn_borderr_topright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-top-right-radius", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Border Radius Top-Right
  wp.customize("betterdocs_doc_page_explore_btn_borderr_topright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-top-right-radius", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Border Bottom-Right
  wp.customize("betterdocs_doc_page_explore_btn_borderr_bottomright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-bottom-right-radius", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Border Bottom-Right
  wp.customize("betterdocs_doc_page_explore_btn_borderr_bottomright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-bottom-right-radius", to + "px");
    });
  });

  //Doc Layout 1 Explore Button Border Bottom-Left
  wp.customize("betterdocs_doc_page_explore_btn_borderr_bottomleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-1 .betterdocs-footer a").css("border-bottom-left-radius", to + "px");
    });
  });

  //Doc Layout 4 Explore Button Border Bottom-Left
  wp.customize("betterdocs_doc_page_explore_btn_borderr_bottomleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer button, .betterdocs-wrapper.betterdocs-docs-archive-wrapper.betterdocs-category-layout-4 .betterdocs-footer a").css("border-bottom-left-radius", to + "px");
    });
  });

  // TODO:
  // FIXME:

  // wp.customize( 'betterdocs_doc_page_column_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.docs-item-container,.betterdocs-category-box.single-kb .docs-single-cat-wrap,.betterdocs-categories-wrap .docs-single-cat-wrap.docs-cat-list-2-box' ).css( 'padding-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_page_column_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-cat-title-wrap,.docs-item-container,.betterdocs-categories-wrap.betterdocs-category-box .docs-single-cat-wrap,.betterdocs-categories-wrap .docs-single-cat-wrap.docs-cat-list-2-box' ).css( 'padding-left', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_page_column_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-item-container' ).css( 'padding-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_page_column_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-item-container' ).css( 'padding-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_page_column_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-item-container' ).css( 'padding-left', to + 'px' );
  //     } );
  // });

  /** Single Doc Start **/

  //Single Doc Common Controllers Content Area Background Color
  wp.customize("betterdocs_doc_single_content_area_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-color", to);
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-color", to);
    });
  });

  //Single Doc Common Controllers Background Property Size | Repeat | Attachment | Position
  wp.customize("betterdocs_doc_single_content_area_bg_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-image", "url(" + to + ")");
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-image", "url(" + to + ")");
    });
  });
  wp.customize("betterdocs_doc_single_content_bg_property_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-size", to);
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-size", to);
    });
  });
  wp.customize("betterdocs_doc_single_content_bg_property_repeat", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-repeat", to);
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-repeat", to);
    });
  });
  wp.customize("betterdocs_doc_single_content_bg_property_attachment", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-attachment", to);
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-attachment", to);
    });
  });
  wp.customize("betterdocs_doc_single_content_bg_property_position", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("background-position", to);
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("background-position", to);
    });
  });

  //Single Doc Common Controllers Content Area Padding Top | Right | Bottom | Left
  wp.customize("betterdocs_doc_single_content_area_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("padding-top", to + "px");
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_content_area_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_content_area_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("padding-bottom", to + "px");
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-full").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_content_area_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper").css("padding-left", to + "px");
    });
  });

  //Single Doc Common Controllers Content Area Padding Top | Right | Bottom | Left (Layout-3)
  wp.customize("betterdocs_doc_single_3_post_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_3_post_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_3_post_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_3_post_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_3_post_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area  .betterdocs-breadcrumb").css("margin-left", "-" + to + "px");
    });
  });

  //Single Doc Common Controllers Doc Content Padding Padding Top | Right | Bottom | Left (Layout-1)
  wp.customize("betterdocs_doc_single_post_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content-area").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_post_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content-area").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_post_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content-area").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_post_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content-area").css("padding-left", to + "px");
    });
  });

  //Single Doc Text Transform
  wp.customize("betterdocs_post_title_text_transform", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper .docs-single-title .betterdocs-entry-title").css("text-transform", to);
    });
  });

  //Single Doc Layout 1 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 1 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Archive Page Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-breadcrumb-item.current span, .betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Archive Page Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 1 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Archive Page Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 1 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 1 TOC Sticky TOC Width
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("width", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Sticky Toc Z-Index
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("width", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Sticky Toc Margin Top
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("margin-top", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Background Color
  wp.customize("betterdocs_toc_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("background-color", to);
    });
  });

  //Single Doc Layout 1 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 1 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 1 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 1 List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 1 List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 1 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 1 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 1 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 1 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-1 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 1 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 1 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-credit p a").css("color", to);
    });
  });

  //Single Doc Layout 4 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 4 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 4 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 4 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 4 TOC Sticky TOC Width
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("width", to + "px");
    });
  });

  //Single Doc Layout 4 TOC Sticky Toc Z-Index
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("width", to + "px");
    });
  });

  //Single Doc Layout 4 TOC Sticky Toc Margin Top
  wp.customize("", function (value) {
    value.bind(function (to) {
      $("").css("margin-top", to + "px");
    });
  });

  //Single Doc Layout 1 TOC Background Color
  wp.customize("betterdocs_toc_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("background-color", to);
    });
  });

  //Single Doc Layout 4 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 4 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 4 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 4 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 4 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 4 TOC List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 4 TOC List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 4 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 4 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 4 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 4 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-4 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 4 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 4 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-credit p a").css("color", to);
    });
  });

  //Single Doc Layout 5 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 5 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 5 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 5 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 5 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 5 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 5 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 5 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 5 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 5 TOC List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 5 TOC List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 5 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 5 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 5 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 5 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-5 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 5 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 5 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-credit p a").css("color", to);
    });
  });

  //Post Content Padding Top | Right | Bottom | Left (Layout-2)(pro)
  wp.customize("betterdocs_doc_single_2_post_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content-inner-area").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content-inner-area").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content-inner-area").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content-inner-area").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 2 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 2 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 2 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 2 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 2 TOC Background Color
  wp.customize("betterdocs_toc_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("background-color", to);
    });
  });

  //Single Doc Layout 2 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 2 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 2 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 2 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 2 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 2 TOC List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 2 TOC List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 2 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 2 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 2 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 2 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-2 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 2 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 2 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-credit p a").css("color", to);
    });
  });

  //Single Doc Layout 3 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 3 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 3 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 3 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 3 TOC Background Color
  wp.customize("betterdocs_toc_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("background-color", to);
    });
  });

  //Single Doc Layout 3 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 3 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 3 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 3 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 3 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 3 TOC List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 3 TOC List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 3 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 3 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 3 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 3 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-3 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 3 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 3 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-credit p a").css("color", to);
    });
  });

  //Single Doc Layout 6 Post Title Font Size
  wp.customize("betterdocs_single_doc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-single-title .betterdocs-entry-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Post Title Color
  wp.customize("betterdocs_single_doc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-single-title .betterdocs-entry-title").css("color", to);
    });
  });

  //Single Doc Layout 6 Breadcrumb Font Size
  wp.customize("betterdocs_single_doc_breadcrumbs_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a, .betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb-item.current span, .betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb .breadcrumb-delimiter").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Breadcrumb Color
  wp.customize("betterdocs_single_doc_breadcrumb_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb .betterdocs-breadcrumb-item a").css("color", to);
    });
  });

  //Single Doc Layout 6 Breadcrumb Seperator Color
  wp.customize("betterdocs_single_doc_breadcrumb_speretor_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb .breadcrumb-delimiter").css("color", to);
    });
  });

  //Single Doc Layout 6 Breadcrumb Active Item Color
  wp.customize("betterdocs_single_doc_breadcrumb_active_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-breadcrumb-item.current span").css("color", to);
    });
  });

  //Single Doc Layout 6 TOC Content Area Padding
  wp.customize("betterdocs_doc_single_toc_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("padding-left", to + "px");
    });
  });

  //Single Doc Layout 6 TOC Content Area Margin
  wp.customize("betterdocs_doc_single_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 6 TOC Title Color
  wp.customize("betterdocs_toc_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc > .toc-title").css("color", to);
    });
  });

  //Single Doc Layout 6 TOC Title Font Size
  wp.customize("betterdocs_toc_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc > .toc-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 TOC List Item Color
  wp.customize("betterdocs_toc_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("color", to);
    });
  });

  //Single Doc Layout 6 TOC List Item Font Size
  wp.customize("betterdocs_toc_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 TOC List Margin
  wp.customize("betterdocs_doc_single_toc_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_toc_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc .toc-list li a").css("margin-left", to + "px");
    });
  });

  //Single Doc Layout 6 TOC List Number Color
  wp.customize("betterdocs_toc_list_number_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc > .toc-list li a:before").css("color", to);
    });
  });

  //Single Doc Layout 6 TOC List Number Font Size
  wp.customize("betterdocs_toc_list_number_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-toc > .toc-list li a:before").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 TOC Margin Bottom
  wp.customize("betterdocs_toc_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-entry-content .betterdocs-toc").css("margin-bottom", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Content Font Size
  wp.customize("betterdocs_single_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-content").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Content Font Color
  wp.customize("betterdocs_single_content_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-content").css("color", to);
    });
  });

  //Single Doc Layout 6 Reactions Text Color
  wp.customize("betterdocs_post_reactions_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-article-reactions .betterdocs-article-reactions-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 6 Reactions Icon Background Color
  wp.customize("betterdocs_post_reactions_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-article-reactions .betterdocs-article-reaction-links li a").css("background-color", to);
    });
  });

  //Single Doc Layout 6 Reactions Icon Color
  wp.customize("betterdocs_post_reactions_icon_svg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-article-reactions .betterdocs-article-reaction-links li a svg path").css("fill", to);
    });
  });

  //Single Doc Layout 6 Social Share Title Text Color
  wp.customize("betterdocs_post_social_share_text_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-social-share .betterdocs-social-share-heading h5").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Feedback Icon Size
  wp.customize("betterdocs_single_doc_feedback_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .feedback-form-link .feedback-form-icon svg, .betterdocs-single-wrapper.betterdocs-single-layout-6 .feedback-form-link .feedback-form-icon img").css("width", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Feedback Link Color
  wp.customize("betterdocs_single_doc_feedback_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-entry-footer .feedback-form-link").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Feedback Link Font Size
  wp.customize("betterdocs_single_doc_feedback_link_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-entry-footer .feedback-form-link").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Feedback Form Title Font Size
  wp.customize("betterdocs_single_doc_feedback_title_font_size", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Feedback Form Title Color
  wp.customize("betterdocs_single_doc_feedback_title_color", function (value) {
    value.bind(function (to) {
      $("#betterdocs-form-modal .modal-inner .modal-content .feedback-form-title").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Navigation Color
  wp.customize("betterdocs_single_doc_navigation_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-navigation a").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Navigation Font Size
  wp.customize("betterdocs_single_doc_navigation_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-navigation a").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Navigation Arrow Color
  wp.customize("betterdocs_single_doc_navigation_arrow_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-navigation a svg").css("fill", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Navigation Arrow Font Size
  wp.customize("betterdocs_single_doc_navigation_arrow_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-navigation a svg").css("width", to + "px");
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .docs-navigation a svg").css("min-width", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Last Updated Time Color
  wp.customize("betterdocs_single_doc_lu_time_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-entry-footer .update-date").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Last Updated Time Font Size
  wp.customize("betterdocs_single_doc_lu_time_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-entry-footer .update-date").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Powered by Color
  wp.customize("betterdocs_single_doc_powered_by_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-credit p").css("color", to);
    });
  });

  //Single Doc Layout 6 Entry Footer Powered By Font Size
  wp.customize("betterdocs_single_doc_powered_by_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-credit p").css("font-size", to + "px");
    });
  });

  //Single Doc Layout 6 Entry Footer Powered By Link Color
  wp.customize("betterdocs_single_doc_powered_by_link_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wrapper.betterdocs-single-layout-6 .betterdocs-credit p a").css("color", to);
    });
  });

  /** Single Doc End **/

  /** SideBar Controls Start **/

  //Sidebar Background Color Layout 1
  wp.customize("betterdocs_sidebar_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content").css("background-color", to);
    });
  });

  //  //Sidebar Background Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Padding Top | Right | Bottom | Left Layout 1
  wp.customize("betterdocs_sidebar_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("padding-left", to + "px");
    });
  });

  // //Sidebar Padding Top | Right | Bottom | Left Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Border Radius Top Left | Top Right | Bottom Right | Bottom Left Layout 1
  wp.customize("betterdocs_sidebar_borderr_topleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content").css("border-top-left-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_topright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content").css("border-top-right-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_bottomright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content").css("border-bottom-right-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_bottomleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content").css("border-bottom-left-radius", to + "px");
    });
  });

  //   //Sidebar Border Radius Top Left | Top Right | Bottom Right | Bottom Left Layout 1 (Single Doc)
  //   wp.customize( 'betterdocs_sidebar_borderr_topleft', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'border-top-left-radius', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_borderr_topright', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'border-top-right-radius', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_borderr_bottomright', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'border-bottom-right-radius', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_borderr_bottomleft', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'border-bottom-left-radius', to + 'px');
  //     } );
  // });

  //Sidebar Icon Size Layout 1
  wp.customize("betterdocs_sidebar_icon_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-category-icon .betterdocs-category-icon-img").css("height", to + "px");
    });
  });

  // //Sidebar Icon Size Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_icon_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-category-icon .betterdocs-category-icon-img' ).css( 'height', to + 'px' );
  //     } );
  // });

  //Sidebar Title Background Color Layout 1
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });

  //  //Sidebar Title Background Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Active Title Background Color | Border Color Layout 1
  wp.customize("betterdocs_sidebar_active_cat_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-category-archive-wrapper .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_active_cat_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-category-archive-wrapper .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header").css("border-color", to);
    });
  });

  //  //Sidebar Active Title Background Color | Border Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_active_cat_border_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'border-color', to );
  //     } );
  // });

  //Sidebar Title Color Layout 1
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  //  //Sidebar Title Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Active Title Color Layout 1
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Active Title Color Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Title Font Size Layout 1
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
    });
  });

  // //Sidebar Title Font Size Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Title Padding Layout 1
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-left", to + "px");
    });
  });

  //  //Sidebar Title Padding Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Margin Layout 1
  wp.customize("betterdocs_sidebar_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-left", to + "px");
    });
  });

  //  //Sidebar Title Margin Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  //SIDEBAR ITEM COUNTER Background Color Layout 1
  wp.customize("betterdocs_sidbebar_item_count_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts").css("background-color", to);
    });
  });

  //  //SIDEBAR ITEM COUNTER Background Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidbebar_item_count_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts' ).css( 'background-color', to );
  //     } );
  // });

  //SIDEBAR ITEM COUNTER Inner Circle Background Color | Color Layout 1
  wp.customize("betterdocs_sidbebar_item_count_inner_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_item_count_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span").css("color", to);
    });
  });

  //  //SIDEBAR ITEM COUNTER Inner Circle Background Color | Color Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidbebar_item_count_inner_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span' ).css( 'background-color', to );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_item_count_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span' ).css( 'color', to );
  //     } );
  // });

  //SIDEBAR ITEM COUNTER Size (Height | Width) Layout 1
  wp.customize("betterdocs_sidebar_item_counter_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span").css("height", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span").css("width", to + "px");
    });
  });

  //  //SIDEBAR ITEM COUNTER Size (Height | Width) Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_item_counter_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span' ).css( 'height', to + 'px' );
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span' ).css( 'width', to + 'px' );
  //     } );
  // });

  //SIDEBAR ITEM COUNTER Font Size Layout 1
  wp.customize("betterdocs_sidebat_item_count_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span").css("font-size", to + "px");
    });
  });

  // //SIDEBAR ITEM COUNTER Font Size Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebat_item_count_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-items-counts span' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content Background Color Layout 1
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-sidebar-content .betterdocs-body").css("background-color", to);
    });
  });

  // //Sidebar Content Background Color Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidbebar_item_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-body' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Content List Item Color Layout 1
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("color", to);
    });
  });

  // //Sidebar Content List Item Color Layout 1 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Content List Item Font Size Layout 1
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  //  //Sidebar Content List Item Font Size Layout 1 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_list_item_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'font-size', to + 'px');
  //     } );
  // });

  //Sidebar Content List Item Icon Color
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  // //Sidebar Content List Item Icon Color (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'fill', to );
  //     } );
  // });

  //Sidebar Content List Item Icon Font Size
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  // //Sidebar Content List Item Icon Font Size (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content List Item Margin
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-left", to + "px");
    });
  });

  // //Sidebar Content List Item Margin (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-left', to + 'px' );
  //     } );
  // });

  //Sidebar Content Active List Item Color Layout 1
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-1 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  // //Sidebar Content Active List Item Color (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-1 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Background Color Layout 5
  wp.customize("betterdocs_sidebar_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("background-color", to);
    });
  });

  //  //Sidebar Background Color Layout 5 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'background-color', to );
  //     } );
  // });

  //  //Sidebar Padding Top | Right | Bottom | Left Layout 5 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Color Layout 5
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  //   //Sidebar Title Color Layout 5 (Single Doc)
  //   wp.customize( 'betterdocs_sidebar_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Active Title Color Layout 5
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Active Title Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Title Background Color Layout 5
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });

  // //Sidebar Title Background Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Active Title Background Color Layout 5
  // wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  // //Sidebar Active Title Background Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Title Font Size Layout 5
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
    });
  });

  // //Sidebar Title Font Size Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Title Padding Layout 5
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-left", to + "px");
    });
  });

  // //Sidebar Title Padding Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Margin Layout 5
  wp.customize("betterdocs_sidebar_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-left", to + "px");
    });
  });

  // //Sidebar Title Margin Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  //Sidebar Content Background Color Layout 5
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-sidebar-content .betterdocs-body").css("background-color", to);
    });
  });

  // //Sidebar Content Background Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidbebar_item_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-body' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Content List Item Color Layout 5
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("color", to);
    });
  });

  //  //Sidebar Content List Item Color Layout 5 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Content List Item Font Size Layout 5
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  // //Sidebar Content List Item Font Size Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'font-size', to + 'px');
  //     } );
  // });

  //Sidebar Content List Item Icon Color Layout 5
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  // //Sidebar Content List Item Icon Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'fill', to );
  //     } );
  // });

  //Sidebar Content List Item Icon Font Size Layout 5
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  // //Sidebar Content List Item Icon Font Size Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content List Item Margin Layout 5 Top | Right | Bottom | Left
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("margin-right", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li.betterdocs-nested-category-wrapper .betterdocs-nested-category-title").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li:not(.betterdocs-nested-category-wrapper)").css("margin-left", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li.betterdocs-nested-category-wrapper .betterdocs-nested-category-title").css("margin-left", to + "px");
    });
  });

  // //Sidebar Content List Item Margin Layout 5 Top | Right | Bottom | Left (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-left', to + 'px' );
  //     } );
  // });

  //Sidebar Content Active List Item Color Layout 5
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-5 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  // //Sidebar Content Active List Item Color Layout 5 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-5 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Background Color Layout 4
  wp.customize("betterdocs_sidebar_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("background-color", to);
    });
  });

  // //Sidebar Background Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'background-color', to );
  //     } );
  // });

  // //Sidebar Padding Top | Right | Bottom | Left Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Color Layout 4
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Title Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Active Title Color Layout 4
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Active Title Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Title Background Color Layout 4
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner").css("background-color", to);
    });
  });

  // //Sidebar Title Background Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Active Title Background Color Layout 4
  // wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner' ).css( 'background-color', to );
  //     } );
  // });

  // //Sidebar Active Title Background Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Title Font Size Layout 4
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
    });
  });

  // //Sidebar Title Font Size Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Title Padding Layout 4
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-left", to + "px");
    });
  });

  // //Sidebar Title Padding Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Margin Layout 4
  wp.customize("betterdocs_sidebar_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-left", to + "px");
    });
  });

  //  //Sidebar Title Margin Layout 4 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper .betterdocs-single-category-inner' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  //Sidebar Content Background Color Layout 4
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-sidebar-content .betterdocs-body").css("background-color", to);
    });
  });

  // //Sidebar Content Background Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidbebar_item_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-body' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Content List Item Color Layout 4
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("color", to);
    });
  });

  // //Sidebar Content List Item Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Content List Item Font Size Layout 4
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  // //Sidebar Content List Item Font Size Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'font-size', to + 'px');
  //     } );
  // });

  //Sidebar Content List Item Icon Color Layout 4
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  // //Sidebar Content List Item Icon Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'fill', to );
  //     } );
  // });

  //Sidebar Content List Item Icon Font Size Layout 4
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  // //Sidebar Content List Item Icon Font Size Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content List Item Margin Layout 4 Top | Right | Bottom | Left
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-left", to + "px");
    });
  });

  // //Sidebar Content List Item Margin Layout 4 Top | Right | Bottom | Left (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-left', to + 'px' );
  //     } );
  // });

  //Sidebar Content Active List Item Color Layout 4
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-4 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  // //Sidebar Content Active List Item Color Layout 4 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-4 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Background Color Layout 2
  wp.customize("betterdocs_sidebar_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-category-list-wrapper").css("background-color", to);
    });
  });

  // //Sidebar Background Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-category-list-wrapper' ).css( 'background-color', to );
  //     } );
  // });

  wp.customize("betterdocs_sidebar_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-category-list-wrapper").css("padding-left", to + "px");
    });
  });

  // //Sidebar Padding Top | Right | Bottom | Left Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-category-list-wrapper' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-category-list-wrapper' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-category-list-wrapper' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-category-list-wrapper' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Color Layout 2
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  //  //Sidebar Title Color Layout 2 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Active Title Color Layout 2
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Active Title Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Title Background Color Layout 2
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });

  // //Sidebar Title Background Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Title Font Size Layout 2
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
    });
  });

  // //Sidebar Title Font Size Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Title Padding Layout 2
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-left", to + "px");
    });
  });

  // //Sidebar Title Padding Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  // //Sidebar Title Margin Layout 2
  // wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  // //Sidebar Title Margin Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  //Sidebar Content Background Color Layout 2
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-body").css("background-color", to);
    });
  });

  // //Sidebar Content Background Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidbebar_item_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-body' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Content List Item Color Layout 2
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("color", to);
    });
  });

  // //Sidebar Content List Item Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Content List Item Font Size Layout 2
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  // //Sidebar Content List Item Font Size Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'font-size', to + 'px');
  //     } );
  // });

  //Sidebar Content List Item Icon Color Layout 2
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  // //Sidebar Content List Item Icon Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'fill', to );
  //     } );
  // });

  //Sidebar Content List Item Icon Font Size Layout 2
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  //  //Sidebar Content List Item Icon Font Size Layout 2 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_list_icon_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content List Item Margin Layout 2 Top | Right | Bottom | Left
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-left", to + "px");
    });
  });

  // //Sidebar Content List Item Margin Layout 2 Top | Right | Bottom | Left (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-left', to + 'px' );
  //     } );
  // });

  //Sidebar Content Active List Item Color Layout 2
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  // //Sidebar Content Active List Item Color Layout 2 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-2 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Background Color Layout 3
  wp.customize("betterdocs_sidebar_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper").css("background-color", to);
    });
  });

  // //Sidebar Background Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'background-color', to );
  //     } );
  // });

  // //Sidebar Padding Top | Right | Bottom | Left Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Background Color Layout 3
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });

  //  //Sidebar Title Background Color Layout 3 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Active Title Background Color | Border Color Layout 3
  wp.customize("betterdocs_sidebar_active_cat_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_active_cat_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header").css("border-color", to);
    });
  });

  //  //Sidebar Active Title Background Color | Border Color Layout 3 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_active_cat_background_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'background-color', to );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_active_cat_border_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'border-color', to );
  //     } );
  // });

  //Sidebar Title Color Layout 3
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Title Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Active Title Color Layout 3
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("color", to);
    });
  });

  // //Sidebar Active Title Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_title_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper.active .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Title Font Size Layout 3
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a, .betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title:not(a)").css("font-size", to + "px");
    });
  });

  // //Sidebar Title Font Size Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_title_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header .betterdocs-category-header-inner .betterdocs-category-title a' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Title Padding Layout 3
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header").css("padding-left", to + "px");
    });
  });

  //  //Sidebar Title Padding Layout 3 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-category-header' ).css( 'padding-left', to + 'px');
  //     } );
  // });

  //Sidebar Title Margin Layout 3
  wp.customize("betterdocs_sidebar_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper").css("margin-left", to + "px");
    });
  });

  //  //Sidebar Title Margin Layout 3 (Single Doc)
  //  wp.customize( 'betterdocs_sidebar_title_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-top', to + 'px');
  //     } );
  // });

  //  wp.customize( 'betterdocs_sidebar_title_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-right', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-bottom', to + 'px');
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_title_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-category-grid-wrapper .betterdocs-category-grid-inner-wrapper .betterdocs-single-category-wrapper' ).css( 'margin-left', to + 'px');
  //     } );
  // });

  //Sidebar Content Background Color Layout 3
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-sidebar-content .betterdocs-body").css("background-color", to);
    });
  });

  // //Sidebar Content Background Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidbebar_item_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-sidebar-content .betterdocs-body' ).css( 'background-color', to );
  //     } );
  // });

  //Sidebar Content List Item Color Layout 3
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("color", to);
    });
  });

  // //Sidebar Content List Item Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'color', to );
  //     } );
  // });

  //Sidebar Content List Item Font Size Layout 3
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a").css("font-size", to + "px");
    });
  });

  // //Sidebar Content List Item Font Size Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a' ).css( 'font-size', to + 'px');
  //     } );
  // });

  //Sidebar Content List Item Icon Color Layout 3
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("fill", to);
    });
  });

  // //Sidebar Content List Item Icon Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'fill', to );
  //     } );
  // });

  //Sidebar Content List Item Icon Font Size Layout 3
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });

  // //Sidebar Content List Item Icon Font Size Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_icon_font_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-articles-list li svg' ).css( 'font-size', to + 'px' );
  //     } );
  // });

  //Sidebar Content List Item Margin Layout 3
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li").css("margin-left", to + "px");
    });
  });

  // //Sidebar Content List Item Margin Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_list_item_margin_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_list_item_margin_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li' ).css( 'margin-left', to + 'px' );
  //     } );
  // });

  //Sidebar Content Active List Item Color Layout 3
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-3 .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active").css("color", to);
    });
  });

  // //Sidebar Content Active List Item Color Layout 3 (Single Doc)
  // wp.customize( 'betterdocs_sidebar_active_list_item_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-wrapper.betterdocs-single-layout-3 .betterdocs-sidebar .betterdocs-single-category-wrapper .betterdocs-single-category-inner .betterdocs-articles-list li a.active' ).css( 'color', to );
  //     } );
  // });

  /** SideBar Controls End **/

  /** Archive Page Controls Start **/

  //Archive Page Background Color
  wp.customize("betterdocs_archive_page_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-color", to);
    });
  });

  //Archive Page Background Image/Properties
  wp.customize("betterdocs_archive_page_background_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-image", "url(" + to + ")");
    });
  });
  wp.customize("betterdocs_archive_page_background_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-size", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_repeat", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-repeat", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_attachment", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-attachment", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_position", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper").css("background-position", to);
    });
  });

  // //Archive Content Area Width
  wp.customize("betterdocs_archive_content_area_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("width", to + "%");
    });
  });

  // //Archive Content Area Maximum Width
  wp.customize("betterdocs_archive_content_area_max_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("max-width", to + "px");
    });
  });

  //Archive Content Area Padding Top | Right | Bottom | Left          @since betterdocs-revamped version
  wp.customize("category_archive_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("padding-top", to + "px");
    });
  });
  wp.customize("category_archive_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("category_archive_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("padding-bottom", to + "px");
    });
  });
  wp.customize("category_archive_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper").css("padding-left", to + "px");
    });
  });

  //Archive Content Area Background Color
  wp.customize("betterdocs_archive_content_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("background-color", to);
    });
  });

  //Archive Content Area Margin Top | Right | Bottom | Left
  wp.customize("betterdocs_archive_content_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("margin-left", to + "px");
    });
  });

  //Archive Content Area Padding Top | Right | Bottom | Left
  wp.customize("betterdocs_archive_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("padding-left", to + "px");
    });
  });

  //Archive Content Border Radius
  wp.customize("betterdocs_archive_content_border_radius", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area").css("border-radius", to + "px");
    });
  });

  //Archive Title Color
  wp.customize("betterdocs_archive_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("color", to);
    });
  });

  //Archive Title Font Size
  wp.customize("betterdocs_archive_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("font-size", to + "px");
    });
  });

  //Archive Archive Title Margin Top | Right | Bottom | Left
  wp.customize("betterdocs_archive_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title .betterdocs-entry-heading").css("margin-left", to + "px");
    });
  });

  //Archive Description Color
  wp.customize("betterdocs_archive_description_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("color", to);
    });
  });

  //Archive Description Font Size
  wp.customize("betterdocs_archive_description_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("font-size", to + "px");
    });
  });

  //Archive Description Margin Top | Right | Bottom | Left
  wp.customize("betterdocs_archive_description_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-title p").css("margin-left", to + "px");
    });
  });

  //Archive List Icon Color
  wp.customize("betterdocs_archive_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li svg").css("fill", to);
    });
  });

  //Archive List Icon Font Size
  wp.customize("betterdocs_archive_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li svg").css("font-size", to + "px");
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li svg").css("min-width", to + "px");
    });
  });

  //Archive List Item Color
  wp.customize("betterdocs_archive_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li a").css("color", to);
    });
  });

  //Archive List Item Font Size
  wp.customize("betterdocs_archive_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li a").css("font-size", to + "px");
    });
  });

  //Archive Docs List Margin Top | Right | Bottom | Left
  wp.customize("betterdocs_archive_article_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body ul li").css("margin-left", to + "px");
    });
  });

  //Archive Docs Subcategory Color
  wp.customize("betterdocs_archive_article_subcategory_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-title a").css("color", to);
    });
  });

  //Archive Docs Subcategory Font Size
  wp.customize("betterdocs_archive_article_subcategory_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-title a").css("font-size", to + "px");
    });
  });

  //Archive Subcategory Icon Color
  wp.customize("betterdocs_archive_subcategory_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-title svg").css("fill", to);
    });
  });

  //Archive Subcategory Icon Font Size
  wp.customize("betterdocs_archive_subcategory_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-title svg").css("font-size", to + "px");
    });
  });

  //Archive Subcategory Docs List Color
  wp.customize("betterdocs_archive_subcategory_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-list li a").css("color", to);
    });
  });

  //Archive Subcategory List Icon Color
  wp.customize("betterdocs_archive_subcategory_article_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-wrapper.betterdocs-taxonomy-wrapper .betterdocs-content-area .betterdocs-content-inner-area .betterdocs-entry-body .betterdocs-nested-category-wrapper .betterdocs-nested-category-list li svg").css("fill", to);
    });
  });
  wp.customize("betterdocs_doc_page_cat_title_color", function (value) {
    value.bind(function (to) {
      $(".single-kb .docs-cat-title-inner .docs-cat-heading").css("color", to);
    });
  });
  wp.customize("betterdocs_doc_page_cat_title_color2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-box.single-kb .docs-single-cat-wrap .docs-cat-title, .single-kb .docs-cat-list-2 .docs-cat-title, .betterdocs-category-grid-layout-6 .betterdocs-term-info .betterdocs-term-title").css("color", to);
    });
  });

  // wp.customize( 'betterdocs_doc_page_item_counter_size', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-cat-title-inner .docs-item-count span' ).css( 'width', to + 'px' );
  //         $( '.betterdocs-categories-wrap.single-kb .docs-cat-title-inner .docs-item-count span' ).css( 'height', to + 'px' );
  //     } );
  // });

  wp.customize("betterdocs_doc_single_2_post_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout2 .docs-content-full-main .doc-single-content-wrapper").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout2 .docs-content-full-main .doc-single-content-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout2 .docs-content-full-main .doc-single-content-wrapper").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_doc_single_2_post_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout2 .docs-content-full-main .doc-single-content-wrapper").css("padding-left", to + "px");
    });
  });

  // wp.customize( 'betterdocs_doc_single_3_post_content_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-layout3 .docs-content-full-main .doc-single-content-wrapper' ).css( 'padding-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_single_3_post_content_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-layout3 .docs-content-full-main .doc-single-content-wrapper' ).css( 'padding-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_single_3_post_content_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-layout3 .docs-content-full-main .doc-single-content-wrapper' ).css( 'padding-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_doc_single_3_post_content_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-single-layout3 .docs-content-full-main .doc-single-content-wrapper' ).css( 'padding-left', to + 'px' );
  //     } );
  // });

  wp.customize("betterdocs_sticky_toc_width", function (value) {
    value.bind(function (to) {
      $(".sticky-toc-container").css("width", to + "px");
    });
  });
  wp.customize("betterdocs_sticky_toc_zindex", function (value) {
    value.bind(function (to) {
      $(".sticky-toc-container").css("z-index", to);
    });
  });
  wp.customize("betterdocs_sticky_toc_margin_top", function (value) {
    value.bind(function (to) {
      $(".sticky-toc-container").css("margin-top", to + "px");
    });
  });

  // wp.customize( 'betterdocs_sidebar_padding_top', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar-content .betterdocs-categories-wrap, .betterdocs-full-sidebar-left .betterdocs-categories-wrap' ).css( 'padding-top', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_right', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar-content .betterdocs-categories-wrap, .betterdocs-full-sidebar-left .betterdocs-categories-wrap' ).css( 'padding-right', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar-content .betterdocs-categories-wrap, .betterdocs-full-sidebar-left .betterdocs-categories-wrap' ).css( 'padding-bottom', to + 'px' );
  //     } );
  // });

  // wp.customize( 'betterdocs_sidebar_padding_left', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-sidebar-content .betterdocs-categories-wrap, .betterdocs-full-sidebar-left .betterdocs-categories-wrap' ).css( 'padding-left', to + 'px' );
  //     } );
  // });

  wp.customize("betterdocs_sidebar_borderr_topleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout1 .betterdocs-sidebar-content .betterdocs-categories-wrap").css("border-top-left-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_topright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout1 .betterdocs-sidebar-content .betterdocs-categories-wrap").css("border-top-right-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_bottomright", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout1 .betterdocs-sidebar-content .betterdocs-categories-wrap").css("border-bottom-right-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_borderr_bottomleft", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-layout1 .betterdocs-sidebar-content .betterdocs-categories-wrap").css("border-bottom-left-radius", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_icon_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title img").css("height", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .docs-cat-title-wrap").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .docs-cat-heading,.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .cat-list-arrow-down").css("color", to);
    });
  });
  wp.customize("betterdocs_sidebar_active_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .active-title .docs-cat-title-inner .docs-cat-heading,.betterdocs-sidebar-content.betterdocs-category-sidebar .active-title .docs-cat-title-inner .docs-cat-heading,.betterdocs-category-wraper .betterdocs-full-sidebar-left .docs-cat-title-wrap::after").css("color", to);
    });
  });
  wp.customize("betterdocs_sidebar_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .docs-cat-heading").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap .docs-cat-title-wrap").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap .docs-cat-title-wrap").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap .docs-cat-title-wrap").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap .docs-cat-title-wrap").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_sidbebar_item_list_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-container").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidbebar_item_count_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidbebar_item_count_inner_bg_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_item_counter_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span").css("width", to + "px");
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span").css("height", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_item_count_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span").css("color", to);
    });
  });
  wp.customize("betterdocs_sidebat_item_count_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_active_cat_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .docs-cat-title-wrap.active-title").css("background-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_active_cat_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .docs-cat-title-wrap.active-title").css("border-color", to);
    });
  });
  wp.customize("betterdocs_sidebar_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap li a").css("color", to);
    });
  });
  wp.customize("betterdocs_sidebar_active_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content .betterdocs-categories-wrap li a.active, .betterdocs-sidebar-content .betterdocs-categories-wrap li.sub-list a.active").css("color", to);
    });
  });
  wp.customize("betterdocs_sidebar_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap li a").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_item_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_sidebar_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li svg").css("fill", to);
    });
  });
  wp.customize("betterdocs_sidebar_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li svg").css("font-size", to + "px");
      $(".betterdocs-sidebar.betterdocs-sidebar-layout-2 .betterdocs-single-category-wrapper .betterdocs-articles-list li svg").css("min-width", to + "px");
    });
  });
  wp.customize("betterdocs_archive_page_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-color", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-image", "url(" + to + ")");
    });
  });
  wp.customize("betterdocs_archive_page_background_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-size", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_repeat", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-repeat", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_attachment", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-attachment", to);
    });
  });
  wp.customize("betterdocs_archive_page_background_position", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper").css("background-position", to);
    });
  });
  wp.customize("betterdocs_archive_content_area_max_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wraper .betterdocs-content-area, .betterdocs-content-area.doc-category-layout-2").css("max-width", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_area_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-single-wraper .betterdocs-content-area, .betterdocs-content-area.doc-category-layout-2").css("width", to + "%");
    });
  });
  wp.customize("betterdocs_archive_content_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("background-color", to);
    });
  });
  wp.customize("betterdocs_archive_content_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_archive_content_border_radius", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing").css("border-radius", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("color", to);
    });
  });
  wp.customize("betterdocs_archive_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_title_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("color", to);
    });
  });
  wp.customize("betterdocs_archive_description_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_description_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-category-listing .docs-cat-title p").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li, .betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li, .betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li, .betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_list_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li, .betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_archive_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li svg").css("fill", to);
    });
  });
  wp.customize("betterdocs_archive_list_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li svg").css("font-size", to + "px");
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li svg").css("min-width", to + "px");
    });
  });
  wp.customize("betterdocs_archive_list_item_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li a").css("color", to);
    });
  });
  wp.customize("betterdocs_archive_list_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li a").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_archive_article_subcategory_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title a").css("color", to);
    });
  });
  wp.customize("betterdocs_archive_article_subcategory_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title a").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_archive_subcategory_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title svg").css("fill", to);
    });
  });
  wp.customize("betterdocs_archive_subcategory_icon_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title svg").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_archive_subcategory_article_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat li a").css("color", to);
    });
  });
  wp.customize("betterdocs_archive_subcategory_article_list_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat li svg").css("fill", to);
    });
  });

  //Live Search Start

  wp.customize("betterdocs_live_search_heading_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_heading_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("color", to);
    });
  });
  wp.customize("betterdocs_live_search_subheading_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, betterdocs-search-heading h6.subheading").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_subheading_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading").css("color", to);
    });
  });
  wp.customize("betterdocs_search_heading_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_search_heading_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_search_heading_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_search_heading_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_search_subheading_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_search_subheading_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_search_subheading_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_search_subheading_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading").css("margin-left", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-color", to);
    });
  });
  wp.customize("betterdocs_live_search_background_image", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-image", "url(" + to + ")");
    });
  });
  wp.customize("betterdocs_live_search_background_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-size", to);
    });
  });
  wp.customize("betterdocs_live_search_background_repeat", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-repeat", to);
    });
  });
  wp.customize("betterdocs_live_search_background_attachment", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-attachment", to);
    });
  });
  wp.customize("betterdocs_live_search_background_position", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("background-position", to);
    });
  });
  wp.customize("betterdocs_live_search_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("background-color", to);
    });
  });
  wp.customize("betterdocs_search_field_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform .betterdocs-search-field").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform .betterdocs-search-field").css("color", to);
    });
  });
  wp.customize("betterdocs_search_field_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_search_field_border_radius", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform").css("border-radius", to + "px");
    });
  });
  wp.customize("betterdocs_search_icon_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform svg.docs-search-icon").css("height", to + "px");
    });
  });
  wp.customize("betterdocs_search_icon_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-searchform svg.docs-search-icon").css("fill", to);
    });
  });
  wp.customize("betterdocs_search_close_icon_color", function (value) {
    value.bind(function (to) {
      $(".docs-search-close .close-line").css("fill", to);
    });
  });
  wp.customize("betterdocs_search_close_icon_border_color", function (value) {
    value.bind(function (to) {
      $(".docs-search-close .close-border").css("fill", to);
    });
  });
  wp.customize("betterdocs_search_close_icon_border_color", function (value) {
    value.bind(function (to) {
      $(".docs-search-loader").css("stroke", to);
    });
  });
  wp.customize("betterdocs_search_result_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result").css("width", to + "%");
    });
  });
  wp.customize("betterdocs_search_result_max_width", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result").css("max-width", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result").css("background-color", to);
    });
  });
  wp.customize("betterdocs_search_result_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result").css("border-color", to);
    });
  });
  wp.customize("betterdocs_search_result_item_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a,.betterdocs-live-search .docs-search-result li:only-child").css("font-size", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_item_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a .betterdocs-search-title").css("color", to);
    });
  });

  //Search Result Item Cat Font Color
  wp.customize("betterdocs_search_result_item_cat_font_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a .betterdocs-search-category").css("color", to);
    });
  });
  wp.customize("betterdocs_search_result_item_padding_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a").css("padding-top", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_item_padding_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a").css("padding-right", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_item_padding_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a").css("padding-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_item_padding_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li a").css("padding-left", to + "px");
    });
  });
  wp.customize("betterdocs_search_result_item_border_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-live-search .docs-search-result li").css("border-color", to);
    });
  });

  // live search form margin
  wp.customize("betterdocs_live_search_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-left", to + "px");
    });
  });

  // live search form margin
  wp.customize("betterdocs_live_search_margin_top", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-top", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_right", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-right", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_bottom", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-bottom", to + "px");
    });
  });
  wp.customize("betterdocs_live_search_margin_left", function (value) {
    value.bind(function (to) {
      $(".betterdocs-search-form-wrapper").css("margin-left", to + "px");
    });
  });

  //Live Search End

  // //Inner Circle Border Width Top
  // wp.customize( 'betterdocs_doc_page_item_count_inner_border_width_top', function( value ) {
  //     value.bind( function( to ) {
  //         $('.betterdocs-categories-wrap.single-kb .docs-cat-title-inner span').css( 'border-top-width', to + 'px');
  //     } );
  // });

  // //Inner Circle Border Width Right
  // wp.customize( 'betterdocs_doc_page_item_count_inner_border_width_right', function( value ) {
  //     value.bind( function( to ) {
  //         $('.betterdocs-categories-wrap.single-kb .docs-cat-title-inner span').css( 'border-right-width', to + 'px');
  //     } );
  // });

  // //Inner Circle Border Width Bottom
  // wp.customize( 'betterdocs_doc_page_item_count_inner_border_width_bottom', function( value ) {
  //     value.bind( function( to ) {
  //         $('.betterdocs-categories-wrap.single-kb .docs-cat-title-inner span').css( 'border-bottom-width', to + 'px');
  //     } );
  // });

  // //Inner Circle Border Width Left
  // wp.customize( 'betterdocs_doc_page_item_count_inner_border_width_left', function( value ) {
  //     value.bind( function( to ) {
  //         $('.betterdocs-categories-wrap.single-kb .docs-cat-title-inner span').css( 'border-left-width', to + 'px');
  //     } );
  // });

  // //Doc List And Button Background Color
  // wp.customize( 'betterdocs_doc_page_article_list_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-categories-wrap.single-kb .docs-item-container' ).css( 'background-color', to );
  //     } );
  // });

  // wp.customize( 'betterdocs_post_reactions_icon_hover_bg_color', function( value ) {
  //     value.bind( function( to ) {
  //         $( '.betterdocs-article-reaction-links li a:hover' ).css( 'background-color', to );
  //     } );
  // });

  //FAQ Section Title Margin FAQ Layout 1

  wp.customize("betterdocs_faq_title_margin", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper .betterdocs-faq-section-title").css("margin", formatData(JSON.parse(to)));
    });
  });

  // FAQ Title Color FAQ Layout 1

  wp.customize("betterdocs_faq_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper .betterdocs-faq-section-title").css("color", to);
    });
  });

  // Entry Content Font Size FAQ Layout 1

  wp.customize("betterdocs_faq_title_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper .betterdocs-faq-section-title").css("font-size", to + "px");
    });
  });

  // FAQ Category Title Color FAQ Layout 1

  wp.customize("betterdocs_faq_category_title_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("color", to);
    });
  });

  // FAQ Category Font Size FAQ Layout 1

  wp.customize("betterdocs_faq_category_name_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("font-size", to + "px");
    });
  });

  // FAQ Category Name Padding FAQ Layout 1
  wp.customize("betterdocs_faq_category_name_padding", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("padding", formatData(JSON.parse(to)));
    });
  });

  // FAQ List Color FAQ Layout 1
  wp.customize("betterdocs_faq_list_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post .betterdocs-faq-post-name").css("color", to);
    });
  });

  // FAQ List Background Color FAQ Layout 1
  wp.customize("betterdocs_faq_list_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post").css("background-color", to);
    });
  });

  // FAQ List Content Background Color Layout 1
  wp.customize("betterdocs_faq_list_content_background_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("background-color", to);
    });
  });

  // FAQ List Content Color Layout 1

  wp.customize("betterdocs_faq_list_content_color", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("color", to);
    });
  });

  // FAQ List Content Background Font Size Layout 1
  wp.customize("betterdocs_faq_list_content_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("font-size", to + "px");
    });
  });

  // FAQ List Font Size FAQ Layout 1
  wp.customize("betterdocs_faq_list_font_size", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post .betterdocs-faq-post-name").css("font-size", to + "px");
    });
  });

  // FAQ List Padding FAQ Layout 1
  wp.customize("betterdocs_faq_list_padding", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-1 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post").css("padding", formatData(JSON.parse(to)));
    });
  });

  /** FAQ LAYOUT 2 CONTROLLERS **/

  // FAQ Category Title Color
  wp.customize("betterdocs_faq_category_title_color_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("color", to);
    });
  });

  // FAQ Category Name Font Size
  wp.customize("betterdocs_faq_category_name_font_size_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("font-size", to + "px");
    });
  });

  // FAQ Category List Box Padding
  wp.customize("betterdocs_faq_category_name_padding_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-title h2").css("padding", formatData(JSON.parse(to)));
    });
  });

  // FAQ List Color
  wp.customize("betterdocs_faq_list_color_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post .betterdocs-faq-post-name").css("color", to);
    });
  });

  // FAQ List Background Color
  wp.customize("betterdocs_faq_list_background_color_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group").css("background-color", to);
    });
  });

  // FAQ List Content Background Color
  wp.customize("betterdocs_faq_list_content_background_color_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("background-color", to);
    });
  });

  // FAQ List Content Color

  wp.customize("betterdocs_faq_list_content_color_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("color", to);
    });
  });

  // FAQ List Content Font Size
  wp.customize("betterdocs_faq_list_content_font_size_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-main-content").css("font-size", to + "px");
    });
  });

  //FAQ List Font Size
  wp.customize("betterdocs_faq_list_font_size_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post .betterdocs-faq-post-name").css("font-size", to + "px");
    });
  });

  //FAQ List Padding
  wp.customize("betterdocs_faq_list_padding_layout_2", function (value) {
    value.bind(function (to) {
      $(".betterdocs-docs-archive-wrapper .betterdocs-faq-wrapper.betterdocs-faq-layout-2 .betterdocs-faq-inner-wrapper .betterdocs-faq-list > li .betterdocs-faq-group.active .betterdocs-faq-post").css("padding", formatData(JSON.parse(to)));
    });
  });
})(jQuery);
function formatData(data) {
  var dimensions = "";
  for (let key in data) {
    if (data[key] != "") {
      dimensions += data[key] + "px ";
    } else {
      dimensions += 0 + "px ";
    }
  }
  return dimensions;
}
/******/ })()
;
//# sourceMappingURL=customizer.js.map