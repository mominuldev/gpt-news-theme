/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var MOMIN = MOMIN || {};
(function ($) {
  /*!----------------------------------------------
      # This beautiful code written with heart
      # by Gpt Islam <hello@mominul.me>
      # In Dhaka, BD at the GptIslam workstation.
      ---------------------------------------------*/

  // USE STRICT
  "use strict";

  window.GPT = {
    init: function init() {
      // Header
      this.header = $('.header-fixed');
      this.body = $('body');
      this.wpadminbar = $('#wpadminbar');
      this.headerFixed = {
        initialOffset: parseInt(this.header.attr('data-fixed-initial-offset')) || 100,
        enabled: $('[data-header-fixed]').length,
        value: false,
        mobileEnabled: $('[data-mobile-header-fixed]').length,
        mobileValue: false
      };

      // Logos
      this.siteTitle = this.header.find('.site-title');
      this.logo = this.header.find('.main-logo');
      this.logoForOnepage = this.header.find('.for-onepage');
      this.logoForOnepageLight = this.logoForOnepage.find('.light');

      // Menus
      this.megaMenu = this.header.find('#mega-menu-wrap');
      this.mobileMenu = $('[data-mobile-menu-resolution]').data('mobile-menu-resolution');
      this.resize();
    },
    resize: function resize() {
      this.isDesktop = $(window).width() >= 991;
      this.isMobile = $(window).width() <= 991;
      this.isPad = $(window).width() <= 1024;
      this.isMobileMenu = $(window).width() <= GPT.mobileMenu;
    }
  };
  MOMIN.initialize = {
    init: function init() {
      MOMIN.initialize.general();
      MOMIN.initialize.handleMobileHeader();
    },
    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function general() {
      //Popup Search
      $('#search-menu-wrapper').removeClass('toggled');
      $('#search-icon').on('click', function (e) {
        e.stopPropagation();
        $('#search-menu-wrapper').toggleClass('toggled');
        $("#popup-search").focus();
      });
      $('#search-menu-wrapper input').on('click', function (e) {
        e.stopPropagation();
      });
      $('#search-menu-wrapper, body').on('click', function () {
        $('#search-menu-wrapper').removeClass('toggled');
      });

      // Back To Top
      var gptScrollTop = document.querySelector(".gpt-scroll-top");
      if (gptScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".gpt-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
          var scroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var progress = pathLength - scroll * pathLength / height;
          scrollProgressPatch.style.strokeDashoffset = progress;
          var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollElementPos >= offset) {
            gptScrollTop.classList.add("progress-done");
          } else {
            gptScrollTop.classList.remove("progress-done");
          }
        });
        gptScrollTop.addEventListener("click", function (e) {
          e.preventDefault();
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
      }
      if ($('body').hasClass("admin-bar")) {
        $('body').addClass('header-position');
      }
      var $body = $('body');
      var $popup = $('.canvas-menu-wrapper');
      $("#page-open-main-menu").on('click', function (e) {
        e.preventDefault();
        $popup.addClass('open');
        $(".gpt-hamburger").addClass('active');
        $body.addClass('page-popup-open');
        $("html").addClass("no-scroll sidebar-open").height(window.innerHeight + "px");
      });
      $("#page-close-main-menu").on('click', function (e) {
        e.preventDefault();
        $('.mask-overlay').remove();
        $body.removeClass('page-popup-open');
        $popup.removeClass('open');
        $('.sub-menu, .sub-menu-wide').removeAttr('style');
        $("html").removeClass("no-scroll sidebar-open").height("auto");
        $(".gpt-hamburger").removeClass('active');
        $('.sub-menu, .sub-menu-wide').removeAttr('style');
        $('.has-submenu .menu-link').removeClass('active');
      });
      $('.mobile-menu-icon').on('click', function (event) {
        event.preventDefault();
        var mask = '<div class="mask-overlay">';
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.header-inner').addClass('menu-open');
        $('body').addClass('no-scroll');
        $(this).addClass('active');
      });

      // Close menu
      $('#site-content').on('click', '.close-menu', function (event) {
        event.preventDefault();
        $('.header-inner').removeClass('menu-open');
        $('.mobile-menu-icon').removeClass('active');
        $('body').removeClass('no-scroll');

        // Remove mask
        $('.mask-overlay').remove();
      });
      if ($("#wpadminbar").length && $(window).width() < 768) {
        $("#wpadminbar").css({
          position: "fixed",
          top: "0"
        });
      }

      // BLog Layout Masonary
      $('.blog-posts').masonry({
        itemSelector: '.blog-masonary-item',
        columnWidth: '.blog-masonary-item',
        percentPosition: true
      });

      //trending-news-slider swiper
      var swiper = new Swiper('.trending-news-slider', {
        speed: 700,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        allowTouchMove: false,
        autoplay: {
          delay: 2000
        }
      });
      $('#search-input').on('keyup', function () {
        var searchTerm = $(this).val();
        if (searchTerm.length >= 1) {
          $.ajax({
            url: gpt_scripts_vars.ajaxurl,
            // WordPress-specific ajax URL
            type: 'POST',
            data: {
              action: 'ajax_search',
              // PHP function hook name
              search: searchTerm
            },
            success: function success(response) {
              $('#search-results').html(response);
            }
          });
        } else {
          $('#search-results').empty(); // Clear results if search term is too short
        }
      });
    },
    /*===========================================*/
    /*=           handle Mobile Header          =*/
    /*===========================================*/

    handleMobileHeader: function handleMobileHeader() {
      if (GPT.header && GPT.header.length) {
        if (GPT.isMobileMenu) {
          GPT.header.addClass('mobile-header');
          GPT.body.addClass('is-mobile-menu');
          setTimeout(function () {
            $('.main-nav').addClass('unhidden');
          }, 300);
        } else {
          GPT.header.removeClass('mobile-header');
          GPT.body.removeClass('is-mobile-menu');
          $('.main-nav').addClass('visible');
        }
      }
    },
    /*==========================================*/
    /*=           handle Fixed Header          =*/
    /*==========================================*/

    handleFixedHeader: function handleFixedHeader() {
      GPT.init();
      var fixed = GPT.headerFixed;
      if ($(document).scrollTop() > fixed.initialOffset) {
        if (!GPT.isMobileMenu && fixed.enabled && !fixed.value || GPT.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue) {
          if (GPT.isMobileMenu) {
            fixed.mobileValue = true;
          } else {
            fixed.value = true;
          }
          GPT.header.addClass('header-fixed no-transition');
        }
      } else if (fixed.value || fixed.mobileValue) {
        fixed.value = false;
        fixed.mobileValue = false;
        GPT.header.removeClass('header-fixed');
      }

      // Effect appearance
      if ($(document).scrollTop() > fixed.initialOffset + 50) {
        GPT.header.removeClass('no-transition').addClass('showed');
      } else {
        GPT.header.removeClass('showed').addClass('no-transition');
      }
    }
  };
  MOMIN.documentOnReady = {
    init: function init() {
      MOMIN.initialize.init();
    }
  };
  MOMIN.documentOnLoad = {
    init: function init() {
      GPT.init();
      MOMIN.initialize.handleMobileHeader();
      $("#preloader").fadeOut("slow");
    }
  };
  MOMIN.documentOnResize = {
    init: function init() {
      if ($("#wpadminbar").length && $(window).width() < 768) {
        $("#wpadminbar").css({
          position: "fixed",
          top: "0"
        });
      }
      GPT.resize();
      MOMIN.initialize.handleMobileHeader();
      MOMIN.initialize.handleFixedHeader();
    }
  };
  MOMIN.documentOnScroll = {
    init: function init() {
      MOMIN.initialize.handleFixedHeader();
      if ($(window).scrollTop() > 300) {
        $('.return-to-top').addClass('back-top');
      } else {
        $('.return-to-top').removeClass('back-top');
      }
    }
  };

  // Initialize Functions
  $(document).ready(MOMIN.documentOnReady.init);
  $(window).on('load', MOMIN.documentOnLoad.init);
  $(window).on('resize', MOMIN.documentOnResize.init);
  $(window).on('scroll', MOMIN.documentOnScroll.init);
})(jQuery);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Development/Sites/unitrix/wp-content/themes/gpt-news/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJNT01JTiIsIiQiLCJ3aW5kb3ciLCJHUFQiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsImhhbmRsZU1vYmlsZUhlYWRlciIsInJlbW92ZUNsYXNzIiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsImdwdFNjcm9sbFRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2dyZXNzUGF0Y2giLCJwYXRoTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJvZmZzZXQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwic2Nyb2xsRWxlbWVudFBvcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsIiRib2R5IiwiJHBvcHVwIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVBdHRyIiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwibWFzb25yeSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwicGVyY2VudFBvc2l0aW9uIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwiZWZmZWN0IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImFsbG93VG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ2YWwiLCJhamF4IiwidXJsIiwiZ3B0X3NjcmlwdHNfdmFycyIsImFqYXh1cmwiLCJ0eXBlIiwiYWN0aW9uIiwic2VhcmNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsImVtcHR5Iiwic2V0VGltZW91dCIsImhhbmRsZUZpeGVkSGVhZGVyIiwiZml4ZWQiLCJkb2N1bWVudE9uUmVhZHkiLCJkb2N1bWVudE9uTG9hZCIsImZhZGVPdXQiLCJkb2N1bWVudE9uUmVzaXplIiwiZG9jdW1lbnRPblNjcm9sbCIsInJlYWR5IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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RUFBRW5DLEtBQUssQ0FBQ29ILGdCQUFnQixDQUFDaEgsSUFBSSxDQUFDO0FBRXZELENBQUMsRUFBRWtILE1BQU0sQ0FBQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBNT01JTiA9IE1PTUlOIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAgIC8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgIyBUaGlzIGJlYXV0aWZ1bCBjb2RlIHdyaXR0ZW4gd2l0aCBoZWFydFxuICAgICAgICAjIGJ5IEdwdCBJc2xhbSA8aGVsbG9AbW9taW51bC5tZT5cbiAgICAgICAgIyBJbiBEaGFrYSwgQkQgYXQgdGhlIEdwdElzbGFtIHdvcmtzdGF0aW9uLlxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLy8gVVNFIFNUUklDVFxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgd2luZG93LkdQVCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSGVhZGVyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9ICQoJy5oZWFkZXItZml4ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHRoaXMud3BhZG1pbmJhciA9ICQoJyN3cGFkbWluYmFyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuaGVhZGVyRml4ZWQgPSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldDogcGFyc2VJbnQodGhpcy5oZWFkZXIuYXR0cignZGF0YS1maXhlZC1pbml0aWFsLW9mZnNldCcpKSB8fCAxMDAsXG5cbiAgICAgICAgICAgICAgICBlbmFibGVkOiAkKCdbZGF0YS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIG1vYmlsZUVuYWJsZWQ6ICQoJ1tkYXRhLW1vYmlsZS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG1vYmlsZVZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTG9nb3NcbiAgICAgICAgICAgIHRoaXMuc2l0ZVRpdGxlID0gdGhpcy5oZWFkZXIuZmluZCgnLnNpdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nbyA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tYWluLWxvZ28nKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2UgPSB0aGlzLmhlYWRlci5maW5kKCcuZm9yLW9uZXBhZ2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2VMaWdodCA9IHRoaXMubG9nb0Zvck9uZXBhZ2UuZmluZCgnLmxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIC8vIE1lbnVzXG4gICAgICAgICAgICB0aGlzLm1lZ2FNZW51ID0gdGhpcy5oZWFkZXIuZmluZCgnI21lZ2EtbWVudS13cmFwJyk7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSAkKCdbZGF0YS1tb2JpbGUtbWVudS1yZXNvbHV0aW9uXScpLmRhdGEoJ21vYmlsZS1tZW51LXJlc29sdXRpb24nKTtcblxuXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSAkKHdpbmRvdykud2lkdGgoKSA+PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxO1xuICAgICAgICAgICAgdGhpcy5pc1BhZCA9ICQod2luZG93KS53aWR0aCgpIDw9IDEwMjQ7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlTWVudSA9ICQod2luZG93KS53aWR0aCgpIDw9IEdQVC5tb2JpbGVNZW51XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTU9NSU4uaW5pdGlhbGl6ZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5nZW5lcmFsKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbGxlY3Rpb24gb2Ygc25pcHBldCBhbmQgdHdlYWtzICAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgZ2VuZXJhbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvL1BvcHVwIFNlYXJjaFxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS50b2dnbGVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgICAgICQoXCIjcG9wdXAtc2VhcmNoXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIgaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIsIGJvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gQmFjayBUbyBUb3BcbiAgICAgICAgICAgIHZhciBncHRTY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wXCIpO1xuICAgICAgICAgICAgaWYgKGdwdFNjcm9sbFRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFByb2dyZXNzUGF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wIHBhdGhcIik7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBzY3JvbGxQcm9ncmVzc1BhdGNoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDUwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUudHJhbnNpdGlvbiA9IHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS50cmFuc2l0aW9uID0gc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5XZWJraXRUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldCAxMG1zIGxpbmVhclwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwYXRoTGVuZ3RoIC0gKHNjcm9sbCAqIHBhdGhMZW5ndGgpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEVsZW1lbnRQb3MgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsRWxlbWVudFBvcyA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhcImFkbWluLWJhclwiKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSAkKCcuY2FudmFzLW1lbnUtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2Utb3Blbi1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcIi5ncHQtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1jbG9zZS1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmdwdC1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoJy5oYXMtc3VibWVudSAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gJzxkaXYgY2xhc3M9XCJtYXNrLW92ZXJsYXlcIj4nO1xuICAgICAgICAgICAgICAgICQobWFzaykuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgICAgICAkKCcjc2l0ZS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5jbG9zZS1tZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBtYXNrXG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJMb2cgTGF5b3V0IE1hc29uYXJ5XG4gICAgICAgICAgICAkKCcuYmxvZy1wb3N0cycpLm1hc29ucnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ibG9nLW1hc29uYXJ5LWl0ZW0nLFxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmJsb2ctbWFzb25hcnktaXRlbScsXG4gICAgICAgICAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvL3RyZW5kaW5nLW5ld3Mtc2xpZGVyIHN3aXBlclxuICAgICAgICAgICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy50cmVuZGluZy1uZXdzLXNsaWRlcicsIHtcbiAgICAgICAgICAgICAgICBzcGVlZDogNzAwLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgICAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICQoJyNzZWFyY2gtaW5wdXQnKS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoVGVybSA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBncHRfc2NyaXB0c192YXJzLmFqYXh1cmwsIC8vIFdvcmRQcmVzcy1zcGVjaWZpYyBhamF4IFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhfc2VhcmNoJywgLy8gUEhQIGZ1bmN0aW9uIGhvb2sgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoVGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1yZXN1bHRzJykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtcmVzdWx0cycpLmVtcHR5KCk7IC8vIENsZWFyIHJlc3VsdHMgaWYgc2VhcmNoIHRlcm0gaXMgdG9vIHNob3J0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgTW9iaWxlIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVNb2JpbGVIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKEdQVC5oZWFkZXIgJiYgR1BULmhlYWRlci5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChHUFQuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgR1BULmJvZHkuYWRkQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3VuaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBHUFQuYm9keS5yZW1vdmVDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBGaXhlZCBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVGaXhlZEhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBHUFQuaW5pdCgpO1xuICAgICAgICAgICAgdmFyIGZpeGVkID0gR1BULmhlYWRlckZpeGVkO1xuXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKCFHUFQuaXNNb2JpbGVNZW51ICYmIGZpeGVkLmVuYWJsZWQgJiYgIWZpeGVkLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAoR1BULmlzTW9iaWxlTWVudSAmJiBmaXhlZC5tb2JpbGVFbmFibGVkICYmICFmaXhlZC5tb2JpbGVWYWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoR1BULmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci1maXhlZCBuby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkLnZhbHVlIHx8IGZpeGVkLm1vYmlsZVZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFZmZlY3QgYXBwZWFyYW5jZVxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCArIDUwKSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbm8tdHJhbnNpdGlvbicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnc2hvd2VkJykuYWRkQ2xhc3MoJ25vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25SZWFkeSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25Mb2FkID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBHUFQuaW5pdCgpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgICQoXCIjcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBNT01JTi5kb2N1bWVudE9uUmVzaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIiN3cGFkbWluYmFyXCIpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoXCIjd3BhZG1pbmJhclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdQVC5yZXNpemUoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlTW9iaWxlSGVhZGVyKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZUZpeGVkSGVhZGVyKCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25TY3JvbGwgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAkKCcucmV0dXJuLXRvLXRvcCcpLmFkZENsYXNzKCdiYWNrLXRvcCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcucmV0dXJuLXRvLXRvcCcpLnJlbW92ZUNsYXNzKCdiYWNrLXRvcCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgRnVuY3Rpb25zXG4gICAgJChkb2N1bWVudCkucmVhZHkoTU9NSU4uZG9jdW1lbnRPblJlYWR5LmluaXQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIE1PTUlOLmRvY3VtZW50T25Mb2FkLmluaXQpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgTU9NSU4uZG9jdW1lbnRPblJlc2l6ZS5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIE1PTUlOLmRvY3VtZW50T25TY3JvbGwuaW5pdCk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9