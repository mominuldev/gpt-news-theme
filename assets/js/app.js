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

      /* Magnefic Popup */
      $('.play-button').each(function () {
        $('.play-button').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-zoom-in',
          removalDelay: 260
        });
      });

      //trending-news-slider swiper
      var swiper = new Swiper('.trending-news-slider', {
        slidesPerView: 1,
        speed: 1000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJNT01JTiIsIiQiLCJ3aW5kb3ciLCJHUFQiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsImhhbmRsZU1vYmlsZUhlYWRlciIsInJlbW92ZUNsYXNzIiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsImdwdFNjcm9sbFRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2dyZXNzUGF0Y2giLCJwYXRoTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJvZmZzZXQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwic2Nyb2xsRWxlbWVudFBvcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsIiRib2R5IiwiJHBvcHVwIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVBdHRyIiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwiZWFjaCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5Iiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwZWVkIiwibG9vcCIsImVmZmVjdCIsImZhZGVFZmZlY3QiLCJjcm9zc0ZhZGUiLCJhbGxvd1RvdWNoTW92ZSIsImF1dG9wbGF5IiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRml4ZWRIZWFkZXIiLCJmaXhlZCIsImRvY3VtZW50T25SZWFkeSIsImRvY3VtZW50T25Mb2FkIiwiZmFkZU91dCIsImRvY3VtZW50T25SZXNpemUiLCJkb2N1bWVudE9uU2Nyb2xsIiwicmVhZHkiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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OztFQUVEO0VBQ0FqQyxDQUFDLENBQUN3QyxRQUFRLENBQUMsQ0FBQ2lFLEtBQUssQ0FBQzFHLEtBQUssQ0FBQ3FHLGVBQWUsQ0FBQ2pHLElBQUksQ0FBQztFQUM3Q0gsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ2lDLEVBQUUsQ0FBQyxNQUFNLEVBQUVuQyxLQUFLLENBQUNzRyxjQUFjLENBQUNsRyxJQUFJLENBQUM7RUFDL0NILENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNpQyxFQUFFLENBQUMsUUFBUSxFQUFFbkMsS0FBSyxDQUFDd0csZ0JBQWdCLENBQUNwRyxJQUFJLENBQUM7RUFDbkRILENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNpQyxFQUFFLENBQUMsUUFBUSxFQUFFbkMsS0FBSyxDQUFDeUcsZ0JBQWdCLENBQUNyRyxJQUFJLENBQUM7QUFFdkQsQ0FBQyxFQUFFdUcsTUFBTSxDQUFDLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIE1PTUlOID0gTU9NSU4gfHwge307XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAjIFRoaXMgYmVhdXRpZnVsIGNvZGUgd3JpdHRlbiB3aXRoIGhlYXJ0XG4gICAgICAgICMgYnkgR3B0IElzbGFtIDxoZWxsb0Btb21pbnVsLm1lPlxuICAgICAgICAjIEluIERoYWthLCBCRCBhdCB0aGUgR3B0SXNsYW0gd29ya3N0YXRpb24uXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBVU0UgU1RSSUNUXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB3aW5kb3cuR1BUID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlci1maXhlZCcpO1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdGhpcy53cGFkbWluYmFyID0gJCgnI3dwYWRtaW5iYXInKTtcblxuICAgICAgICAgICAgdGhpcy5oZWFkZXJGaXhlZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0OiBwYXJzZUludCh0aGlzLmhlYWRlci5hdHRyKCdkYXRhLWZpeGVkLWluaXRpYWwtb2Zmc2V0JykpIHx8IDEwMCxcblxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICQoJ1tkYXRhLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgbW9iaWxlRW5hYmxlZDogJCgnW2RhdGEtbW9iaWxlLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbW9iaWxlVmFsdWU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBMb2dvc1xuICAgICAgICAgICAgdGhpcy5zaXRlVGl0bGUgPSB0aGlzLmhlYWRlci5maW5kKCcuc2l0ZS10aXRsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5oZWFkZXIuZmluZCgnLm1haW4tbG9nbycpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5mb3Itb25lcGFnZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZUxpZ2h0ID0gdGhpcy5sb2dvRm9yT25lcGFnZS5maW5kKCcubGlnaHQnKTtcblxuICAgICAgICAgICAgLy8gTWVudXNcbiAgICAgICAgICAgIHRoaXMubWVnYU1lbnUgPSB0aGlzLmhlYWRlci5maW5kKCcjbWVnYS1tZW51LXdyYXAnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudSA9ICQoJ1tkYXRhLW1vYmlsZS1tZW51LXJlc29sdXRpb25dJykuZGF0YSgnbW9iaWxlLW1lbnUtcmVzb2x1dGlvbicpO1xuXG5cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9ICQod2luZG93KS53aWR0aCgpID49IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzUGFkID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNDtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGVNZW51ID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gR1BULm1vYmlsZU1lbnVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNT01JTi5pbml0aWFsaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmdlbmVyYWwoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlTW9iaWxlSGVhZGVyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ29sbGVjdGlvbiBvZiBzbmlwcGV0IGFuZCB0d2Vha3MgICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBnZW5lcmFsOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vUG9wdXAgU2VhcmNoXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkJyk7XG5cbiAgICAgICAgICAgICQoJyNzZWFyY2gtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICAgICAgJChcIiNwb3B1cC1zZWFyY2hcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlciBpbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlciwgYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLW1lbnUtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICAgICAgLy8gQmFjayBUbyBUb3BcbiAgICAgICAgICAgIHZhciBncHRTY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wXCIpO1xuICAgICAgICAgICAgaWYgKGdwdFNjcm9sbFRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFByb2dyZXNzUGF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wIHBhdGhcIik7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBzY3JvbGxQcm9ncmVzc1BhdGNoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDUwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUudHJhbnNpdGlvbiA9IHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS50cmFuc2l0aW9uID0gc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5XZWJraXRUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldCAxMG1zIGxpbmVhclwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwYXRoTGVuZ3RoIC0gKHNjcm9sbCAqIHBhdGhMZW5ndGgpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEVsZW1lbnRQb3MgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsRWxlbWVudFBvcyA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhcImFkbWluLWJhclwiKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSAkKCcuY2FudmFzLW1lbnUtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2Utb3Blbi1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcIi5ncHQtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1jbG9zZS1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmdwdC1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoJy5oYXMtc3VibWVudSAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gJzxkaXYgY2xhc3M9XCJtYXNrLW92ZXJsYXlcIj4nO1xuICAgICAgICAgICAgICAgICQobWFzaykuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgICAgICAkKCcjc2l0ZS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5jbG9zZS1tZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBtYXNrXG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyogTWFnbmVmaWMgUG9wdXAgKi9cbiAgICAgICAgICAgICQoJy5wbGF5LWJ1dHRvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5wbGF5LWJ1dHRvbicpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLXpvb20taW4nLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmFsRGVsYXk6IDI2MCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vdHJlbmRpbmctbmV3cy1zbGlkZXIgc3dpcGVyXG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnRyZW5kaW5nLW5ld3Mtc2xpZGVyJywge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAgICAgICAgICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAyMDAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgIH0sXG5cblxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgaGFuZGxlIE1vYmlsZSBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgaGFuZGxlTW9iaWxlSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChHUFQuaGVhZGVyICYmIEdQVC5oZWFkZXIubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoR1BULmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLmFkZENsYXNzKCdtb2JpbGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5ib2R5LmFkZENsYXNzKCdpcy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tYWluLW5hdicpLmFkZENsYXNzKCd1bmhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIucmVtb3ZlQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgR1BULmJvZHkucmVtb3ZlQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWluLW5hdicpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgRml4ZWQgSGVhZGVyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgaGFuZGxlRml4ZWRIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgR1BULmluaXQoKTtcbiAgICAgICAgICAgIHZhciBmaXhlZCA9IEdQVC5oZWFkZXJGaXhlZDtcblxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCghR1BULmlzTW9iaWxlTWVudSAmJiBmaXhlZC5lbmFibGVkICYmICFmaXhlZC52YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKEdQVC5pc01vYmlsZU1lbnUgJiYgZml4ZWQubW9iaWxlRW5hYmxlZCAmJiAhZml4ZWQubW9iaWxlVmFsdWUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEdQVC5pc01vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLmFkZENsYXNzKCdoZWFkZXItZml4ZWQgbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXhlZC52YWx1ZSB8fCBmaXhlZC5tb2JpbGVWYWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmaXhlZC5tb2JpbGVWYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnaGVhZGVyLWZpeGVkJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWZmZWN0IGFwcGVhcmFuY2VcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IGZpeGVkLmluaXRpYWxPZmZzZXQgKyA1MCkge1xuICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIucmVtb3ZlQ2xhc3MoJ25vLXRyYW5zaXRpb24nKS5hZGRDbGFzcygnc2hvd2VkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpLmFkZENsYXNzKCduby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuICAgIH07XG5cbiAgICBNT01JTi5kb2N1bWVudE9uUmVhZHkgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaW5pdCgpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBNT01JTi5kb2N1bWVudE9uTG9hZCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgR1BULmluaXQoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlTW9iaWxlSGVhZGVyKCk7XG4gICAgICAgICAgICAkKFwiI3ByZWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPblJlc2l6ZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHUFQucmVzaXplKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBNT01JTi5kb2N1bWVudE9uU2Nyb2xsID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZUZpeGVkSGVhZGVyKCk7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJldHVybi10by10b3AnKS5hZGRDbGFzcygnYmFjay10b3AnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLnJldHVybi10by10b3AnKS5yZW1vdmVDbGFzcygnYmFjay10b3AnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIEZ1bmN0aW9uc1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KE1PTUlOLmRvY3VtZW50T25SZWFkeS5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBNT01JTi5kb2N1bWVudE9uTG9hZC5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIE1PTUlOLmRvY3VtZW50T25SZXNpemUuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBNT01JTi5kb2N1bWVudE9uU2Nyb2xsLmluaXQpO1xuXG59KShqUXVlcnkpO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==