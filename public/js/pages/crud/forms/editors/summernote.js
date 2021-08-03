/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // Class definition

var KTSummernoteDemo = function () {
  // Private functions
  var demos = function demos() {
    $('.summernote').summernote({
      height: 150
    });
  };

  return {
    // public functions
    init: function init() {
      demos();
    }
  };
}(); // Initialization


jQuery(document).ready(function () {
  KTSummernoteDemo.init();
});
/******/ })()
;