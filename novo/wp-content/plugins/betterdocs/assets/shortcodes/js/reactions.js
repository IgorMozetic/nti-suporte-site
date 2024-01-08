/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./react-src/public/shortcodes/reactions.js ***!
  \**************************************************/
jQuery(document).ready(function ($) {
  $(".betterdocs-feelings").on('click', function (e) {
    var _betterdocsReactionsC;
    e.preventDefault();
    let feelings = e.currentTarget.dataset.feelings;
    let betterdocsConfig = (_betterdocsReactionsC = betterdocsReactionsConfig) !== null && _betterdocsReactionsC !== void 0 ? _betterdocsReactionsC : undefined;
    if (betterdocsConfig != undefined && betterdocsConfig.FEEDBACK != undefined && betterdocsConfig.FEEDBACK.DISPLAY != undefined && betterdocsConfig.FEEDBACK.DISPLAY == true) {
      var URL = betterdocsConfig.FEEDBACK.URL;
      if (URL.indexOf('?') > -1) {
        URL += '/' + betterdocsConfig.post_id + '&feelings=' + feelings;
      } else {
        URL += '/' + betterdocsConfig.post_id + '?feelings=' + feelings;
      }
      jQuery.ajax({
        url: URL,
        method: 'POST',
        success: function (res) {
          if (res === true) {
            $('.betterdocs-article-reactions-heading,.betterdocs-article-reaction-links').fadeOut(1000);
            $('.betterdocs-article-reactions').html('<p>' + betterdocsConfig.FEEDBACK.SUCCESS + '</p>').fadeIn(1000);
          }
        }
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=reactions.js.map