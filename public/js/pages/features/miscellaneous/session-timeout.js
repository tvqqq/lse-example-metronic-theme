/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


var KTSessionTimeoutDemo = function () {
  var initDemo = function initDemo() {
    $.sessionTimeout({
      title: 'Session Timeout Notification',
      message: 'Your session is about to expire.',
      keepAliveUrl: HOST_URL + '/api//session-timeout/keepalive.php',
      redirUrl: '?p=page_user_lock_1',
      logoutUrl: '?p=page_user_login_1',
      warnAfter: 5000,
      //warn after 5 seconds
      redirAfter: 15000,
      //redirect after 15 secons,
      ignoreUserActivity: true,
      countdownMessage: 'Redirecting in {timer} seconds.',
      countdownBar: true
    });
  };

  return {
    //main function to initiate the module
    init: function init() {
      initDemo();
    }
  };
}();

jQuery(document).ready(function () {
  KTSessionTimeoutDemo.init();
});
/******/ })()
;