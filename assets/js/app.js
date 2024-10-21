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
        itemSelector: '.col-sm-6',
        columnWidth: '.col-sm-6',
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

module.exports = __webpack_require__(/*! /Users/mominul/Sites/unitrix/wp-content/themes/gpt-news/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJNT01JTiIsIiQiLCJ3aW5kb3ciLCJHUFQiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsImhhbmRsZU1vYmlsZUhlYWRlciIsInJlbW92ZUNsYXNzIiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsImdwdFNjcm9sbFRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2dyZXNzUGF0Y2giLCJwYXRoTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJvZmZzZXQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwic2Nyb2xsRWxlbWVudFBvcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsIiRib2R5IiwiJHBvcHVwIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVBdHRyIiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwibWFzb25yeSIsIml0ZW1TZWxlY3RvciIsImNvbHVtbldpZHRoIiwicGVyY2VudFBvc2l0aW9uIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwiZWZmZWN0IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImFsbG93VG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJkZWxheSIsInNlYXJjaFRlcm0iLCJ2YWwiLCJhamF4IiwidXJsIiwiZ3B0X3NjcmlwdHNfdmFycyIsImFqYXh1cmwiLCJ0eXBlIiwiYWN0aW9uIiwic2VhcmNoIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsImVtcHR5Iiwic2V0VGltZW91dCIsImhhbmRsZUZpeGVkSGVhZGVyIiwiZml4ZWQiLCJkb2N1bWVudE9uUmVhZHkiLCJkb2N1bWVudE9uTG9hZCIsImZhZGVPdXQiLCJkb2N1bWVudE9uUmVzaXplIiwiZG9jdW1lbnRPblNjcm9sbCIsInJlYWR5IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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bkMsS0FBSyxDQUFDb0gsZ0JBQWdCLENBQUNoSCxJQUFJLENBQUM7QUFFdkQsQ0FBQyxFQUFFa0gsTUFBTSxDQUFDLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIE1PTUlOID0gTU9NSU4gfHwge307XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAjIFRoaXMgYmVhdXRpZnVsIGNvZGUgd3JpdHRlbiB3aXRoIGhlYXJ0XG4gICAgICAgICMgYnkgR3B0IElzbGFtIDxoZWxsb0Btb21pbnVsLm1lPlxuICAgICAgICAjIEluIERoYWthLCBCRCBhdCB0aGUgR3B0SXNsYW0gd29ya3N0YXRpb24uXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBVU0UgU1RSSUNUXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB3aW5kb3cuR1BUID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlci1maXhlZCcpO1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdGhpcy53cGFkbWluYmFyID0gJCgnI3dwYWRtaW5iYXInKTtcblxuICAgICAgICAgICAgdGhpcy5oZWFkZXJGaXhlZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0OiBwYXJzZUludCh0aGlzLmhlYWRlci5hdHRyKCdkYXRhLWZpeGVkLWluaXRpYWwtb2Zmc2V0JykpIHx8IDEwMCxcblxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICQoJ1tkYXRhLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgbW9iaWxlRW5hYmxlZDogJCgnW2RhdGEtbW9iaWxlLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbW9iaWxlVmFsdWU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBMb2dvc1xuICAgICAgICAgICAgdGhpcy5zaXRlVGl0bGUgPSB0aGlzLmhlYWRlci5maW5kKCcuc2l0ZS10aXRsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5oZWFkZXIuZmluZCgnLm1haW4tbG9nbycpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5mb3Itb25lcGFnZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZUxpZ2h0ID0gdGhpcy5sb2dvRm9yT25lcGFnZS5maW5kKCcubGlnaHQnKTtcblxuICAgICAgICAgICAgLy8gTWVudXNcbiAgICAgICAgICAgIHRoaXMubWVnYU1lbnUgPSB0aGlzLmhlYWRlci5maW5kKCcjbWVnYS1tZW51LXdyYXAnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudSA9ICQoJ1tkYXRhLW1vYmlsZS1tZW51LXJlc29sdXRpb25dJykuZGF0YSgnbW9iaWxlLW1lbnUtcmVzb2x1dGlvbicpO1xuXG5cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9ICQod2luZG93KS53aWR0aCgpID49IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzUGFkID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNDtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGVNZW51ID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gR1BULm1vYmlsZU1lbnVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNT01JTi5pbml0aWFsaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmdlbmVyYWwoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlTW9iaWxlSGVhZGVyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ29sbGVjdGlvbiBvZiBzbmlwcGV0IGFuZCB0d2Vha3MgICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBnZW5lcmFsOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vUG9wdXAgU2VhcmNoXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkJyk7XG5cbiAgICAgICAgICAgICQoJyNzZWFyY2gtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICAgICAgJChcIiNwb3B1cC1zZWFyY2hcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlciBpbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlciwgYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICAgICAgLy8gQmFjayBUbyBUb3BcbiAgICAgICAgICAgIHZhciBncHRTY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wXCIpO1xuICAgICAgICAgICAgaWYgKGdwdFNjcm9sbFRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFByb2dyZXNzUGF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wIHBhdGhcIik7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBzY3JvbGxQcm9ncmVzc1BhdGNoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDUwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUudHJhbnNpdGlvbiA9IHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS50cmFuc2l0aW9uID0gc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5XZWJraXRUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldCAxMG1zIGxpbmVhclwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwYXRoTGVuZ3RoIC0gKHNjcm9sbCAqIHBhdGhMZW5ndGgpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEVsZW1lbnRQb3MgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsRWxlbWVudFBvcyA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhcImFkbWluLWJhclwiKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSAkKCcuY2FudmFzLW1lbnUtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2Utb3Blbi1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcIi5ncHQtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1jbG9zZS1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmdwdC1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoJy5oYXMtc3VibWVudSAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gJzxkaXYgY2xhc3M9XCJtYXNrLW92ZXJsYXlcIj4nO1xuICAgICAgICAgICAgICAgICQobWFzaykuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgICAgICAkKCcjc2l0ZS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5jbG9zZS1tZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBtYXNrXG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJMb2cgTGF5b3V0IE1hc29uYXJ5XG4gICAgICAgICAgICAkKCcuYmxvZy1wb3N0cycpLm1hc29ucnkoe1xuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5jb2wtc20tNicsXG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuY29sLXNtLTYnLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy90cmVuZGluZy1uZXdzLXNsaWRlciBzd2lwZXJcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcudHJlbmRpbmctbmV3cy1zbGlkZXInLCB7XG4gICAgICAgICAgICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgICAgICAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDIwMDAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWlucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaFRlcm0gPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm0ubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZ3B0X3NjcmlwdHNfdmFycy5hamF4dXJsLCAvLyBXb3JkUHJlc3Mtc3BlY2lmaWMgYWpheCBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4X3NlYXJjaCcsIC8vIFBIUCBmdW5jdGlvbiBob29rIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHNlYXJjaFRlcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtcmVzdWx0cycpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLXJlc3VsdHMnKS5lbXB0eSgpOyAvLyBDbGVhciByZXN1bHRzIGlmIHNlYXJjaCB0ZXJtIGlzIHRvbyBzaG9ydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cblxuXG5cbiAgICAgICAgfSxcblxuXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgTW9iaWxlIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVNb2JpbGVIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKEdQVC5oZWFkZXIgJiYgR1BULmhlYWRlci5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChHUFQuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgR1BULmJvZHkuYWRkQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3VuaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBHUFQuYm9keS5yZW1vdmVDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBGaXhlZCBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVGaXhlZEhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBHUFQuaW5pdCgpO1xuICAgICAgICAgICAgdmFyIGZpeGVkID0gR1BULmhlYWRlckZpeGVkO1xuXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKCFHUFQuaXNNb2JpbGVNZW51ICYmIGZpeGVkLmVuYWJsZWQgJiYgIWZpeGVkLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAoR1BULmlzTW9iaWxlTWVudSAmJiBmaXhlZC5tb2JpbGVFbmFibGVkICYmICFmaXhlZC5tb2JpbGVWYWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoR1BULmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci1maXhlZCBuby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkLnZhbHVlIHx8IGZpeGVkLm1vYmlsZVZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFZmZlY3QgYXBwZWFyYW5jZVxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCArIDUwKSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbm8tdHJhbnNpdGlvbicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnc2hvd2VkJykuYWRkQ2xhc3MoJ25vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25SZWFkeSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25Mb2FkID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBHUFQuaW5pdCgpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgICQoXCIjcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBNT01JTi5kb2N1bWVudE9uUmVzaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIiN3cGFkbWluYmFyXCIpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoXCIjd3BhZG1pbmJhclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdQVC5yZXNpemUoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlTW9iaWxlSGVhZGVyKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZUZpeGVkSGVhZGVyKCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25TY3JvbGwgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAkKCcucmV0dXJuLXRvLXRvcCcpLmFkZENsYXNzKCdiYWNrLXRvcCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcucmV0dXJuLXRvLXRvcCcpLnJlbW92ZUNsYXNzKCdiYWNrLXRvcCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgRnVuY3Rpb25zXG4gICAgJChkb2N1bWVudCkucmVhZHkoTU9NSU4uZG9jdW1lbnRPblJlYWR5LmluaXQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIE1PTUlOLmRvY3VtZW50T25Mb2FkLmluaXQpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgTU9NSU4uZG9jdW1lbnRPblJlc2l6ZS5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIE1PTUlOLmRvY3VtZW50T25TY3JvbGwuaW5pdCk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9