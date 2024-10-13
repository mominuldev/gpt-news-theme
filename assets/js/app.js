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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJNT01JTiIsIiQiLCJ3aW5kb3ciLCJHUFQiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsImhhbmRsZU1vYmlsZUhlYWRlciIsInJlbW92ZUNsYXNzIiwib24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsImdwdFNjcm9sbFRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2dyZXNzUGF0Y2giLCJwYXRoTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJvZmZzZXQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwic2Nyb2xsRWxlbWVudFBvcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsIiRib2R5IiwiJHBvcHVwIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmVBdHRyIiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwiZWFjaCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5Iiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJsb29wIiwiZWZmZWN0IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImFsbG93VG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJkZWxheSIsInNldFRpbWVvdXQiLCJoYW5kbGVGaXhlZEhlYWRlciIsImZpeGVkIiwiZG9jdW1lbnRPblJlYWR5IiwiZG9jdW1lbnRPbkxvYWQiLCJmYWRlT3V0IiwiZG9jdW1lbnRPblJlc2l6ZSIsImRvY3VtZW50T25TY3JvbGwiLCJyZWFkeSIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVB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QUNnRSxLQUFLLENBQUN6RyxLQUFLLENBQUNvRyxlQUFlLENBQUNoRyxJQUFJLENBQUM7RUFDN0NILENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNpQyxFQUFFLENBQUMsTUFBTSxFQUFFbkMsS0FBSyxDQUFDcUcsY0FBYyxDQUFDakcsSUFBSSxDQUFDO0VBQy9DSCxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDaUMsRUFBRSxDQUFDLFFBQVEsRUFBRW5DLEtBQUssQ0FBQ3VHLGdCQUFnQixDQUFDbkcsSUFBSSxDQUFDO0VBQ25ESCxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDaUMsRUFBRSxDQUFDLFFBQVEsRUFBRW5DLEtBQUssQ0FBQ3dHLGdCQUFnQixDQUFDcEcsSUFBSSxDQUFDO0FBRXZELENBQUMsRUFBRXNHLE1BQU0sQ0FBQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBNT01JTiA9IE1PTUlOIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAgIC8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgIyBUaGlzIGJlYXV0aWZ1bCBjb2RlIHdyaXR0ZW4gd2l0aCBoZWFydFxuICAgICAgICAjIGJ5IEdwdCBJc2xhbSA8aGVsbG9AbW9taW51bC5tZT5cbiAgICAgICAgIyBJbiBEaGFrYSwgQkQgYXQgdGhlIEdwdElzbGFtIHdvcmtzdGF0aW9uLlxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLy8gVVNFIFNUUklDVFxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgd2luZG93LkdQVCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSGVhZGVyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9ICQoJy5oZWFkZXItZml4ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHRoaXMud3BhZG1pbmJhciA9ICQoJyN3cGFkbWluYmFyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuaGVhZGVyRml4ZWQgPSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldDogcGFyc2VJbnQodGhpcy5oZWFkZXIuYXR0cignZGF0YS1maXhlZC1pbml0aWFsLW9mZnNldCcpKSB8fCAxMDAsXG5cbiAgICAgICAgICAgICAgICBlbmFibGVkOiAkKCdbZGF0YS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIG1vYmlsZUVuYWJsZWQ6ICQoJ1tkYXRhLW1vYmlsZS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG1vYmlsZVZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTG9nb3NcbiAgICAgICAgICAgIHRoaXMuc2l0ZVRpdGxlID0gdGhpcy5oZWFkZXIuZmluZCgnLnNpdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nbyA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tYWluLWxvZ28nKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2UgPSB0aGlzLmhlYWRlci5maW5kKCcuZm9yLW9uZXBhZ2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2VMaWdodCA9IHRoaXMubG9nb0Zvck9uZXBhZ2UuZmluZCgnLmxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIC8vIE1lbnVzXG4gICAgICAgICAgICB0aGlzLm1lZ2FNZW51ID0gdGhpcy5oZWFkZXIuZmluZCgnI21lZ2EtbWVudS13cmFwJyk7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSAkKCdbZGF0YS1tb2JpbGUtbWVudS1yZXNvbHV0aW9uXScpLmRhdGEoJ21vYmlsZS1tZW51LXJlc29sdXRpb24nKTtcblxuXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSAkKHdpbmRvdykud2lkdGgoKSA+PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxO1xuICAgICAgICAgICAgdGhpcy5pc1BhZCA9ICQod2luZG93KS53aWR0aCgpIDw9IDEwMjQ7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlTWVudSA9ICQod2luZG93KS53aWR0aCgpIDw9IEdQVC5tb2JpbGVNZW51XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTU9NSU4uaW5pdGlhbGl6ZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5nZW5lcmFsKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbGxlY3Rpb24gb2Ygc25pcHBldCBhbmQgdHdlYWtzICAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgZ2VuZXJhbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvL1BvcHVwIFNlYXJjaFxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS50b2dnbGVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgICAgICQoXCIjcG9wdXAtc2VhcmNoXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIgaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIsIGJvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgfSk7XG5cblxuXG5cbiAgICAgICAgICAgIC8vIEJhY2sgVG8gVG9wXG4gICAgICAgICAgICB2YXIgZ3B0U2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncHQtc2Nyb2xsLXRvcFwiKTtcbiAgICAgICAgICAgIGlmIChncHRTY3JvbGxUb3AgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxQcm9ncmVzc1BhdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncHQtc2Nyb2xsLXRvcCBwYXRoXCIpO1xuICAgICAgICAgICAgICAgIHZhciBwYXRoTGVuZ3RoID0gc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5nZXRUb3RhbExlbmd0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSA1MDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnRyYW5zaXRpb24gPSBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLldlYmtpdFRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IHBhdGhMZW5ndGggKyBcIiBcIiArIHBhdGhMZW5ndGg7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGF0aExlbmd0aDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUudHJhbnNpdGlvbiA9IHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hvZmZzZXQgMTBtcyBsaW5lYXJcIjtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gcGF0aExlbmd0aCAtIChzY3JvbGwgKiBwYXRoTGVuZ3RoKSAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxFbGVtZW50UG9zID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbEVsZW1lbnRQb3MgPj0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncHRTY3JvbGxUb3AuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWRvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncHRTY3JvbGxUb3AuY2xhc3NMaXN0LnJlbW92ZShcInByb2dyZXNzLWRvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBncHRTY3JvbGxUb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoXCJhZG1pbi1iYXJcIikpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hlYWRlci1wb3NpdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB2YXIgJHBvcHVwID0gJCgnLmNhbnZhcy1tZW51LXdyYXBwZXInKTtcblxuICAgICAgICAgICAgJChcIiNwYWdlLW9wZW4tbWFpbi1tZW51XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoXCIuZ3B0LWhhbWJ1cmdlclwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3BhZ2UtcG9wdXAtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsIHNpZGViYXItb3BlblwiKS5oZWlnaHQod2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2UtY2xvc2UtbWFpbi1tZW51XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICQoJy5tYXNrLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLnN1Yi1tZW51LCAuc3ViLW1lbnUtd2lkZScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodChcImF1dG9cIik7XG4gICAgICAgICAgICAgICAgJChcIi5ncHQtaGFtYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKCcuaGFzLXN1Ym1lbnUgLm1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcubW9iaWxlLW1lbnUtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9ICc8ZGl2IGNsYXNzPVwibWFzay1vdmVybGF5XCI+JztcbiAgICAgICAgICAgICAgICAkKG1hc2spLmhpZGUoKS5hcHBlbmRUbygnYm9keScpLmZhZGVJbignZmFzdCcpO1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5hZGRDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gQ2xvc2UgbWVudVxuICAgICAgICAgICAgJCgnI3NpdGUtY29udGVudCcpLm9uKCdjbGljaycsICcuY2xvc2UtbWVudScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLWlubmVyJykucmVtb3ZlQ2xhc3MoJ21lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbWFza1xuICAgICAgICAgICAgICAgICQoJy5tYXNrLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qIE1hZ25lZmljIFBvcHVwICovXG4gICAgICAgICAgICAkKCcucGxheS1idXR0b24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcucGxheS1idXR0b24nKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAyNjAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvL3RyZW5kaW5nLW5ld3Mtc2xpZGVyIHN3aXBlclxuICAgICAgICAgICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy50cmVuZGluZy1uZXdzLXNsaWRlcicsIHtcbiAgICAgICAgICAgICAgICBzcGVlZDogNzAwLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgICAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICB9LFxuXG5cblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBNb2JpbGUgSGVhZGVyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZU1vYmlsZUhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoR1BULmhlYWRlciAmJiBHUFQuaGVhZGVyLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKEdQVC5pc01vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgR1BULmhlYWRlci5hZGRDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBHUFQuYm9keS5hZGRDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndW5oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCdtb2JpbGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5ib2R5LnJlbW92ZUNsYXNzKCdpcy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgaGFuZGxlIEZpeGVkIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZUZpeGVkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIEdQVC5pbml0KCk7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSBHUFQuaGVhZGVyRml4ZWQ7XG5cbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IGZpeGVkLmluaXRpYWxPZmZzZXQpIHtcblxuICAgICAgICAgICAgICAgIGlmICgoIUdQVC5pc01vYmlsZU1lbnUgJiYgZml4ZWQuZW5hYmxlZCAmJiAhZml4ZWQudmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIChHUFQuaXNNb2JpbGVNZW51ICYmIGZpeGVkLm1vYmlsZUVuYWJsZWQgJiYgIWZpeGVkLm1vYmlsZVZhbHVlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChHUFQuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC5tb2JpbGVWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR1BULmhlYWRlci5hZGRDbGFzcygnaGVhZGVyLWZpeGVkIG5vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZml4ZWQudmFsdWUgfHwgZml4ZWQubW9iaWxlVmFsdWUpIHtcblxuICAgICAgICAgICAgICAgIGZpeGVkLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIucmVtb3ZlQ2xhc3MoJ2hlYWRlci1maXhlZCcpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVmZmVjdCBhcHBlYXJhbmNlXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0ICsgNTApIHtcbiAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCduby10cmFuc2l0aW9uJykuYWRkQ2xhc3MoJ3Nob3dlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCdzaG93ZWQnKS5hZGRDbGFzcygnbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPblJlYWR5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPbkxvYWQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEdQVC5pbml0KCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgJChcIiNwcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25SZXNpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1BULnJlc2l6ZSgpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPblNjcm9sbCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykuYWRkQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGdW5jdGlvbnNcbiAgICAkKGRvY3VtZW50KS5yZWFkeShNT01JTi5kb2N1bWVudE9uUmVhZHkuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgTU9NSU4uZG9jdW1lbnRPbkxvYWQuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBNT01JTi5kb2N1bWVudE9uUmVzaXplLmluaXQpO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgTU9NSU4uZG9jdW1lbnRPblNjcm9sbC5pbml0KTtcblxufSkoalF1ZXJ5KTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=