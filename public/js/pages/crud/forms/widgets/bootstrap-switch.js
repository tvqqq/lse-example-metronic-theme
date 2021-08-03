/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Class definition
var KTBootstrapSwitch = function () {
  // Private functions
  var demos = function demos() {
    // minimum setup
    $('[data-switch=true]').bootstrapSwitch();
  };

  return {
    // public functions
    init: function init() {
      demos();
    }
  };
}();

jQuery(document).ready(function () {
  KTBootstrapSwitch.init();
});
/******/ })()
;