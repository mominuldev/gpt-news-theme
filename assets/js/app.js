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
      MOMIN.initialize.sectionSwitch();
      MOMIN.initialize.contactFrom();
      MOMIN.initialize.handleMobileHeader();
    },
    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function general() {
      // object-fit polyfill run
      // objectFitImages();
      // /* init Jarallax */
      // jarallax(document.querySelectorAll('.jarallax'));
      // jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      //     keepImg: true,
      // });

      // Gsap Register Plugin
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // PRELOADER
      var settings = {
        progressSize: 320,
        progressColor: '#ffffff',
        lineWidth: 2,
        lineCap: 'round',
        preloaderAnimationDuration: 800,
        startDegree: -90,
        finalDegree: 270
      };
      function setAttributes(elem, attrs) {
        for (var key in attrs) {
          elem.setAttribute(key, attrs[key]);
        }
      }
      var preloader = document.createElement('div'),
        canvas = document.createElement('canvas'),
        size;
      (function () {
        var width = window.innerWidth,
          height = window.innerHeight;
        if (width > height) {
          size = Math.min(settings.progressSize, height / 2);
        } else {
          size = Math.min(settings.progressSize, width - 50);
        }
      })();
      setAttributes(preloader, {
        "class": "preloader",
        id: 'preloader',
        style: 'transition: opacity ' + settings.preloaderAnimationDuration / 1000 + 's'
      });
      setAttributes(canvas, {
        "class": 'progress-bar',
        id: 'progress-bar',
        width: settings.progressSize,
        height: settings.progressSize
      });
      preloader = document.getElementById('preloader');
      var progressBar = document.getElementById('progress-bar'),
        images = document.images,
        imagesAmount = images.length,
        imagesLoaded = 0,
        barCtx = progressBar.getContext('2d'),
        circleCenterX = progressBar.width / 2,
        circleCenterY = progressBar.height / 2,
        circleRadius = circleCenterX - settings.lineWidth,
        degreesPerPercent = 3.6,
        currentProgress = 0,
        showedProgress = 0,
        progressStep = 0,
        progressDelta = 0,
        startTime = null,
        running;
      (function () {
        return requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame || function (callback) {
          setTimeout(callback, 1000 / 60);
        };
      })();
      Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
      };
      progressBar.style.opacity = settings.progressOpacity;
      barCtx.strokeStyle = settings.progressColor;
      barCtx.lineWidth = settings.lineWidth;
      barCtx.lineCap = settings.lineCap;
      var angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
      var startAngle = Math.radians(settings.startDegree);
      document.body.style.overflowY = 'hidden';
      preloader.style.backgroundColor = settings.preloaderBackground;
      for (var i = 0; i < imagesAmount; i++) {
        var imageClone = new Image();
        imageClone.onload = onImageLoad;
        imageClone.onerror = onImageLoad;
        imageClone.src = images[i].src;
      }
      function onImageLoad() {
        if (running === true) running = false;
        imagesLoaded++;
        if (imagesLoaded >= imagesAmount) hidePreloader();
        progressStep = showedProgress;
        currentProgress = 100 / imagesAmount * imagesLoaded << 0;
        progressDelta = currentProgress - showedProgress;
        setTimeout(function () {
          if (startTime === null) startTime = performance.now();
          running = true;
          animate();
        }, 10);
      }
      function animate() {
        if (running === false) {
          startTime = null;
          return;
        }
        var timeDelta = Math.min(1, (performance.now() - startTime) / settings.preloaderAnimationDuration);
        showedProgress = progressStep + progressDelta * timeDelta;
        if (timeDelta <= 1) {
          barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
          barCtx.beginPath();
          barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, Math.radians(showedProgress * degreesPerPercent) * angleMultiplier + startAngle);
          barCtx.stroke();
          requestAnimationFrame(animate);
        } else {
          startTime = null;
        }
      }
      function hidePreloader() {
        setTimeout(function () {
          $("body").addClass("page-loaded");
          document.body.style.overflowY = '';
        }, settings.preloaderAnimationDuration + 100);
      }
      var resizeTimer;

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

      // Counter
      $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
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

      // Gsap Smooth Scroll
      // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      //
      // // Scroll to Top
      // let smoother = ScrollSmoother.create({
      //     wrapper: '#site-content',
      //     content: '#main',
      //     smooth: 2,
      //     effect: true
      // });

      var lenis = new Lenis({
        duration: 1.2,
        easing: function easing(t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical',
        // vertical, horizontal
        gestureDirection: 'vertical',
        // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 2,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
      });

      //get scroll value
      lenis.on('scroll', function (_ref) {
        var scroll = _ref.scroll,
          limit = _ref.limit,
          velocity = _ref.velocity,
          direction = _ref.direction,
          progress = _ref.progress;
      } // console.log({ scroll, limit, velocity, direction, progress })
      );
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Cursor
      var cursor = document.querySelector('.cursor');
      var cursorFollower = document.querySelector('.cursor-follower');
      document.addEventListener('mousemove', function (e) {
        gsap.to('.cursor', {
          duration: 1,
          x: e.pageX * 2 - 50 + "%",
          y: e.pageY * 2 - 50 + "%",
          ease: "power3.out"
        });
        cursorFollower.style.top = e.pageY + 'px';
        cursorFollower.style.left = e.pageX + 'px';
      });

      // Mouse Leave
      document.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursorBlock');
        cursor.classList.add('cursorNone');
        cursorFollower.classList.remove('cursorBlock');
        cursorFollower.classList.add('cursorNone');
      });

      // Mouse Enter
      document.addEventListener('mouseenter', function () {
        cursor.classList.remove('cursorNone');
        cursor.classList.add('cursorBlock');
        cursorFollower.classList.remove('cursorNone');
        cursorFollower.classList.add('cursorBlock');
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
    },
    /*==================================*/
    /*=           Progressbar          =*/
    /*==================================*/
    progressBar: function progressBar() {
      if ($('.skill-wrapper').length) {
        $('.skills').not('.active').each(function () {
          if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
            $(this).addClass('active');
            $(this).find('.skill').each(function () {
              var procent = $(this).attr('data-value');
              $(this).find('.active-line').css('width', procent + '%');
            });
          }
        });
      }
    },
    /*=====================================*/
    /*=           Section Switch          =*/
    /*=====================================*/

    sectionSwitch: function sectionSwitch() {
      $('.page-scroll, .site-header .menu li a, .canvas-nav .site-main-menu li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
            return false;
          }
        }
      });
      $('[data-type="section-switch"], .gp-btn, .gpt-main-menu li a, .site-main-menu > li > a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },
    /*==============================*/
    /*=           Countup          =*/
    /*==============================*/

    countUp: function countUp() {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      };
      var counteEl = $('[data-counter]');
      if (counteEl) {
        counteEl.each(function () {
          var val = $(this).data('counter');
          var countup = new CountUp(this, 0, val, 0, 2.5, options);
          $(this).appear(function () {
            countup.start();
          }, {
            accX: 0,
            accY: 0
          });
        });
      }
    },
    /*=================================*/
    /*=           Contact Form         =*/
    /*=================================*/
    contactFrom: function contactFrom() {
      $('[data-gpt-form]').each(function () {
        var $this = $(this);
        $('.form-result', $this).css('display', 'none');
        $this.submit(function () {
          $('button[type="submit"]', $this).addClass('clicked');
          // Create a object and assign all fields name and value.
          var values = {};
          var security = $('.gpt-newsletter-security').data('security');
          values["nonce"] = security;
          $('[name]', $this).each(function () {
            var $this = $(this),
              $name = $this.attr('name'),
              $value = $this.val();
            values[$name] = $value;
          });

          // Make Request
          $.ajax({
            url: $this.attr('action'),
            type: 'POST',
            data: values,
            success: function success(data) {
              if (data.error == true) {
                $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
              } else {
                $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
              }
              $('.form-result > .content', $this).html(data.message);
              $('button[type="submit"]', $this).removeClass('clicked');
            },
            error: function error() {
              $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
              $('.form-result > .content', $this).html('Sorry, an error occurred.');
              $('button[type="submit"]', $this).removeClass('clicked');
            }
          });
          return false;
        });
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJNT01JTiIsIiQiLCJ3aW5kb3ciLCJHUFQiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsInNlY3Rpb25Td2l0Y2giLCJjb250YWN0RnJvbSIsImhhbmRsZU1vYmlsZUhlYWRlciIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJTY3JvbGxTbW9vdGhlciIsInNldHRpbmdzIiwicHJvZ3Jlc3NTaXplIiwicHJvZ3Jlc3NDb2xvciIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJwcmVsb2FkZXJBbmltYXRpb25EdXJhdGlvbiIsInN0YXJ0RGVncmVlIiwiZmluYWxEZWdyZWUiLCJzZXRBdHRyaWJ1dGVzIiwiZWxlbSIsImF0dHJzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwicHJlbG9hZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FudmFzIiwic2l6ZSIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIk1hdGgiLCJtaW4iLCJpZCIsInN0eWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9ncmVzc0JhciIsImltYWdlcyIsImltYWdlc0Ftb3VudCIsImltYWdlc0xvYWRlZCIsImJhckN0eCIsImdldENvbnRleHQiLCJjaXJjbGVDZW50ZXJYIiwiY2lyY2xlQ2VudGVyWSIsImNpcmNsZVJhZGl1cyIsImRlZ3JlZXNQZXJQZXJjZW50IiwiY3VycmVudFByb2dyZXNzIiwic2hvd2VkUHJvZ3Jlc3MiLCJwcm9ncmVzc1N0ZXAiLCJwcm9ncmVzc0RlbHRhIiwic3RhcnRUaW1lIiwicnVubmluZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInJhZGlhbnMiLCJkZWdyZWVzIiwiUEkiLCJvcGFjaXR5IiwicHJvZ3Jlc3NPcGFjaXR5Iiwic3Ryb2tlU3R5bGUiLCJhbmdsZU11bHRpcGxpZXIiLCJhYnMiLCJzdGFydEFuZ2xlIiwib3ZlcmZsb3dZIiwiYmFja2dyb3VuZENvbG9yIiwicHJlbG9hZGVyQmFja2dyb3VuZCIsImkiLCJpbWFnZUNsb25lIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbkltYWdlTG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJoaWRlUHJlbG9hZGVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJhbmltYXRlIiwidGltZURlbHRhIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ2xhc3MiLCJyZXNpemVUaW1lciIsImdwdFNjcm9sbFRvcCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxQcm9ncmVzc1BhdGNoIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwib2Zmc2V0IiwidHJhbnNpdGlvbiIsIldlYmtpdFRyYW5zaXRpb24iLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvZ3Jlc3MiLCJzY3JvbGxFbGVtZW50UG9zIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiYXBwZWFyIiwib2RvIiwiZWFjaCIsImNvdW50TnVtYmVyIiwiaHRtbCIsImhhc0NsYXNzIiwiJGJvZHkiLCIkcG9wdXAiLCJvbiIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsIm1hc2siLCJoaWRlIiwiYXBwZW5kVG8iLCJmYWRlSW4iLCJjc3MiLCJwb3NpdGlvbiIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5IiwibGVuaXMiLCJMZW5pcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwidCIsInBvdyIsImRpcmVjdGlvbiIsImdlc3R1cmVEaXJlY3Rpb24iLCJzbW9vdGgiLCJtb3VzZU11bHRpcGxpZXIiLCJzbW9vdGhUb3VjaCIsInRvdWNoTXVsdGlwbGllciIsImluZmluaXRlIiwiX3JlZiIsImxpbWl0IiwidmVsb2NpdHkiLCJyYWYiLCJ0aW1lIiwiY3Vyc29yIiwiY3Vyc29yRm9sbG93ZXIiLCJ0byIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImVhc2UiLCJoYW5kbGVGaXhlZEhlYWRlciIsImZpeGVkIiwibm90IiwicHJvY2VudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwic2xpY2UiLCJjb3VudFVwIiwib3B0aW9ucyIsInVzZUVhc2luZyIsInVzZUdyb3VwaW5nIiwic2VwYXJhdG9yIiwiZGVjaW1hbCIsInByZWZpeCIsInN1ZmZpeCIsImNvdW50ZUVsIiwidmFsIiwiY291bnR1cCIsIkNvdW50VXAiLCJzdGFydCIsImFjY1giLCJhY2NZIiwiJHRoaXMiLCJzdWJtaXQiLCJ2YWx1ZXMiLCJzZWN1cml0eSIsIiRuYW1lIiwiJHZhbHVlIiwiYWpheCIsInVybCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJkb2N1bWVudE9uUmVhZHkiLCJkb2N1bWVudE9uTG9hZCIsImZhZGVPdXQiLCJkb2N1bWVudE9uUmVzaXplIiwiZG9jdW1lbnRPblNjcm9sbCIsInJlYWR5IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBQyxDQUFDO0FBRXZCLENBQUMsVUFBVUMsQ0FBQyxFQUFFO0VBRVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7RUFFSTtFQUNBLFlBQVk7O0VBRVpDLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHO0lBQ1RDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQWM7TUFDZDtNQUNBLElBQUksQ0FBQ0MsTUFBTSxHQUFHSixDQUFDLENBQUMsZUFBZSxDQUFDO01BQ2hDLElBQUksQ0FBQ0ssSUFBSSxHQUFHTCxDQUFDLENBQUMsTUFBTSxDQUFDO01BQ3JCLElBQUksQ0FBQ00sVUFBVSxHQUFHTixDQUFDLENBQUMsYUFBYSxDQUFDO01BRWxDLElBQUksQ0FBQ08sV0FBVyxHQUFHO1FBQ2ZDLGFBQWEsRUFBRUMsUUFBUSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLEdBQUc7UUFFN0VDLE9BQU8sRUFBRVgsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNZLE1BQU07UUFDeENDLEtBQUssRUFBRSxLQUFLO1FBRVpDLGFBQWEsRUFBRWQsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNZLE1BQU07UUFDckRHLFdBQVcsRUFBRTtNQUNqQixDQUFDOztNQUVEO01BQ0EsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDWixNQUFNLENBQUNhLElBQUksQ0FBQyxhQUFhLENBQUM7TUFDaEQsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDZCxNQUFNLENBQUNhLElBQUksQ0FBQyxZQUFZLENBQUM7TUFDMUMsSUFBSSxDQUFDRSxjQUFjLEdBQUcsSUFBSSxDQUFDZixNQUFNLENBQUNhLElBQUksQ0FBQyxjQUFjLENBQUM7TUFDdEQsSUFBSSxDQUFDRyxtQkFBbUIsR0FBRyxJQUFJLENBQUNELGNBQWMsQ0FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7TUFFN0Q7TUFDQSxJQUFJLENBQUNJLFFBQVEsR0FBRyxJQUFJLENBQUNqQixNQUFNLENBQUNhLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztNQUNuRCxJQUFJLENBQUNLLFVBQVUsR0FBR3RCLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BR25GLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEQSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFjO01BQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHekIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lCLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRztNQUN6QyxJQUFJLENBQUNDLFFBQVEsR0FBRzNCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUN5QixLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUc7TUFDeEMsSUFBSSxDQUFDRSxLQUFLLEdBQUc1QixDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDeUIsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJO01BQ3RDLElBQUksQ0FBQ0csWUFBWSxHQUFHN0IsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lCLEtBQUssQ0FBQyxDQUFDLElBQUl4QixHQUFHLENBQUNvQixVQUFVO0lBQzNEO0VBQ0osQ0FBQztFQUVEdkIsS0FBSyxDQUFDK0IsVUFBVSxHQUFHO0lBQ2YzQixJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFjO01BQ2RKLEtBQUssQ0FBQytCLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7TUFDMUJoQyxLQUFLLENBQUMrQixVQUFVLENBQUNFLGFBQWEsQ0FBQyxDQUFDO01BQ2hDakMsS0FBSyxDQUFDK0IsVUFBVSxDQUFDRyxXQUFXLENBQUMsQ0FBQztNQUM5QmxDLEtBQUssQ0FBQytCLFVBQVUsQ0FBQ0ksa0JBQWtCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7SUFDQTtJQUNBOztJQUVBSCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQSxFQUFjO01BRWpCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0FJLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxhQUFhLEVBQUVDLGNBQWMsQ0FBQzs7TUFHbEQ7TUFDQSxJQUFJQyxRQUFRLEdBQUc7UUFDWEMsWUFBWSxFQUFFLEdBQUc7UUFDakJDLGFBQWEsRUFBRSxTQUFTO1FBQ3hCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxPQUFPLEVBQUUsT0FBTztRQUNoQkMsMEJBQTBCLEVBQUUsR0FBRztRQUMvQkMsV0FBVyxFQUFFLENBQUMsRUFBRTtRQUNoQkMsV0FBVyxFQUFFO01BQ2pCLENBQUM7TUFFRCxTQUFTQyxhQUFhQSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUVoQyxLQUFLLElBQUlDLEdBQUcsSUFBSUQsS0FBSyxFQUFFO1VBQ25CRCxJQUFJLENBQUNHLFlBQVksQ0FBQ0QsR0FBRyxFQUFFRCxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDO01BRUo7TUFFQSxJQUFJRSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6Q0MsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekNFLElBQUk7TUFFUixDQUFDLFlBQVk7UUFFVCxJQUFJOUIsS0FBSyxHQUFHekIsTUFBTSxDQUFDd0QsVUFBVTtVQUN6QkMsTUFBTSxHQUFHekQsTUFBTSxDQUFDMEQsV0FBVztRQUUvQixJQUFJakMsS0FBSyxHQUFHZ0MsTUFBTSxFQUFFO1VBRWhCRixJQUFJLEdBQUdJLElBQUksQ0FBQ0MsR0FBRyxDQUFDdEIsUUFBUSxDQUFDQyxZQUFZLEVBQUVrQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXRELENBQUMsTUFBTTtVQUVIRixJQUFJLEdBQUdJLElBQUksQ0FBQ0MsR0FBRyxDQUFDdEIsUUFBUSxDQUFDQyxZQUFZLEVBQUVkLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFdEQ7TUFFSixDQUFDLEVBQUUsQ0FBQztNQUVKcUIsYUFBYSxDQUFDSyxTQUFTLEVBQUU7UUFDckIsU0FBTyxXQUFXO1FBQ2xCVSxFQUFFLEVBQUUsV0FBVztRQUNmQyxLQUFLLEVBQUUsc0JBQXNCLEdBQUd4QixRQUFRLENBQUNLLDBCQUEwQixHQUFHLElBQUksR0FBRztNQUNqRixDQUFDLENBQUM7TUFDRkcsYUFBYSxDQUFDUSxNQUFNLEVBQUU7UUFDbEIsU0FBTyxjQUFjO1FBQ3JCTyxFQUFFLEVBQUUsY0FBYztRQUNsQnBDLEtBQUssRUFBRWEsUUFBUSxDQUFDQyxZQUFZO1FBQzVCa0IsTUFBTSxFQUFFbkIsUUFBUSxDQUFDQztNQUNyQixDQUFDLENBQUM7TUFHRlksU0FBUyxHQUFHQyxRQUFRLENBQUNXLGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFFaEQsSUFBSUMsV0FBVyxHQUFHWixRQUFRLENBQUNXLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDckRFLE1BQU0sR0FBR2IsUUFBUSxDQUFDYSxNQUFNO1FBQ3hCQyxZQUFZLEdBQUdELE1BQU0sQ0FBQ3RELE1BQU07UUFDNUJ3RCxZQUFZLEdBQUcsQ0FBQztRQUNoQkMsTUFBTSxHQUFHSixXQUFXLENBQUNLLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDckNDLGFBQWEsR0FBR04sV0FBVyxDQUFDdkMsS0FBSyxHQUFHLENBQUM7UUFDckM4QyxhQUFhLEdBQUdQLFdBQVcsQ0FBQ1AsTUFBTSxHQUFHLENBQUM7UUFDdENlLFlBQVksR0FBR0YsYUFBYSxHQUFHaEMsUUFBUSxDQUFDRyxTQUFTO1FBQ2pEZ0MsaUJBQWlCLEdBQUcsR0FBRztRQUN2QkMsZUFBZSxHQUFHLENBQUM7UUFDbkJDLGNBQWMsR0FBRyxDQUFDO1FBQ2xCQyxZQUFZLEdBQUcsQ0FBQztRQUNoQkMsYUFBYSxHQUFHLENBQUM7UUFDakJDLFNBQVMsR0FBRyxJQUFJO1FBQ2hCQyxPQUFPO01BRVgsQ0FBQyxZQUFZO1FBRVQsT0FBT0MscUJBQXFCLElBQ3JCQyx3QkFBd0IsSUFDeEJDLDJCQUEyQixJQUMzQkMsc0JBQXNCLElBQ3RCQyx1QkFBdUIsSUFDdkIsVUFBVUMsUUFBUSxFQUFFO1VBQ25CQyxVQUFVLENBQUNELFFBQVEsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25DLENBQUM7TUFFVCxDQUFDLEVBQUUsQ0FBQztNQUVKMUIsSUFBSSxDQUFDNEIsT0FBTyxHQUFHLFVBQVVDLE9BQU8sRUFBRTtRQUM5QixPQUFPQSxPQUFPLEdBQUc3QixJQUFJLENBQUM4QixFQUFFLEdBQUcsR0FBRztNQUNsQyxDQUFDO01BR0R6QixXQUFXLENBQUNGLEtBQUssQ0FBQzRCLE9BQU8sR0FBR3BELFFBQVEsQ0FBQ3FELGVBQWU7TUFDcER2QixNQUFNLENBQUN3QixXQUFXLEdBQUd0RCxRQUFRLENBQUNFLGFBQWE7TUFDM0M0QixNQUFNLENBQUMzQixTQUFTLEdBQUdILFFBQVEsQ0FBQ0csU0FBUztNQUNyQzJCLE1BQU0sQ0FBQzFCLE9BQU8sR0FBR0osUUFBUSxDQUFDSSxPQUFPO01BQ2pDLElBQUltRCxlQUFlLEdBQUcsQ0FBQ2xDLElBQUksQ0FBQ21DLEdBQUcsQ0FBQ3hELFFBQVEsQ0FBQ00sV0FBVyxDQUFDLEdBQUdlLElBQUksQ0FBQ21DLEdBQUcsQ0FBQ3hELFFBQVEsQ0FBQ08sV0FBVyxDQUFDLElBQUksR0FBRztNQUM3RixJQUFJa0QsVUFBVSxHQUFHcEMsSUFBSSxDQUFDNEIsT0FBTyxDQUFDakQsUUFBUSxDQUFDTSxXQUFXLENBQUM7TUFDbkRRLFFBQVEsQ0FBQ2hELElBQUksQ0FBQzBELEtBQUssQ0FBQ2tDLFNBQVMsR0FBRyxRQUFRO01BQ3hDN0MsU0FBUyxDQUFDVyxLQUFLLENBQUNtQyxlQUFlLEdBQUczRCxRQUFRLENBQUM0RCxtQkFBbUI7TUFHOUQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdqQyxZQUFZLEVBQUVpQyxDQUFDLEVBQUUsRUFBRTtRQUVuQyxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7UUFDNUJELFVBQVUsQ0FBQ0UsTUFBTSxHQUFHQyxXQUFXO1FBQy9CSCxVQUFVLENBQUNJLE9BQU8sR0FBR0QsV0FBVztRQUNoQ0gsVUFBVSxDQUFDSyxHQUFHLEdBQUd4QyxNQUFNLENBQUNrQyxDQUFDLENBQUMsQ0FBQ00sR0FBRztNQUVsQztNQUVBLFNBQVNGLFdBQVdBLENBQUEsRUFBRztRQUVuQixJQUFJeEIsT0FBTyxLQUFLLElBQUksRUFBRUEsT0FBTyxHQUFHLEtBQUs7UUFFckNaLFlBQVksRUFBRTtRQUVkLElBQUlBLFlBQVksSUFBSUQsWUFBWSxFQUFFd0MsYUFBYSxDQUFDLENBQUM7UUFFakQ5QixZQUFZLEdBQUdELGNBQWM7UUFDN0JELGVBQWUsR0FBSyxHQUFHLEdBQUdSLFlBQVksR0FBSUMsWUFBWSxJQUFLLENBQUM7UUFDNURVLGFBQWEsR0FBR0gsZUFBZSxHQUFHQyxjQUFjO1FBRWhEVyxVQUFVLENBQUMsWUFBWTtVQUVuQixJQUFJUixTQUFTLEtBQUssSUFBSSxFQUFFQSxTQUFTLEdBQUc2QixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1VBQ3JEN0IsT0FBTyxHQUFHLElBQUk7VUFDZDhCLE9BQU8sQ0FBQyxDQUFDO1FBRWIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUVWO01BRUEsU0FBU0EsT0FBT0EsQ0FBQSxFQUFHO1FBRWYsSUFBSTlCLE9BQU8sS0FBSyxLQUFLLEVBQUU7VUFDbkJELFNBQVMsR0FBRyxJQUFJO1VBQ2hCO1FBQ0o7UUFFQSxJQUFJZ0MsU0FBUyxHQUFHbkQsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMrQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUc5QixTQUFTLElBQUl4QyxRQUFRLENBQUNLLDBCQUEwQixDQUFDO1FBQ2xHZ0MsY0FBYyxHQUFHQyxZQUFZLEdBQUlDLGFBQWEsR0FBR2lDLFNBQVU7UUFFM0QsSUFBSUEsU0FBUyxJQUFJLENBQUMsRUFBRTtVQUVoQjFDLE1BQU0sQ0FBQzJDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFL0MsV0FBVyxDQUFDdkMsS0FBSyxFQUFFdUMsV0FBVyxDQUFDUCxNQUFNLENBQUM7VUFDN0RXLE1BQU0sQ0FBQzRDLFNBQVMsQ0FBQyxDQUFDO1VBQ2xCNUMsTUFBTSxDQUFDNkMsR0FBRyxDQUFDM0MsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRXVCLFVBQVUsRUFBR3BDLElBQUksQ0FBQzRCLE9BQU8sQ0FBQ1osY0FBYyxHQUFHRixpQkFBaUIsQ0FBQyxHQUFHb0IsZUFBZSxHQUFJRSxVQUFVLENBQUM7VUFDckozQixNQUFNLENBQUM4QyxNQUFNLENBQUMsQ0FBQztVQUNmbEMscUJBQXFCLENBQUM2QixPQUFPLENBQUM7UUFFbEMsQ0FBQyxNQUFNO1VBQ0gvQixTQUFTLEdBQUcsSUFBSTtRQUNwQjtNQUVKO01BRUEsU0FBUzRCLGFBQWFBLENBQUEsRUFBRztRQUNyQnBCLFVBQVUsQ0FBQyxZQUFZO1VBQ25CdkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDb0gsUUFBUSxDQUFDLGFBQWEsQ0FBQztVQUNqQy9ELFFBQVEsQ0FBQ2hELElBQUksQ0FBQzBELEtBQUssQ0FBQ2tDLFNBQVMsR0FBRyxFQUFFO1FBQ3RDLENBQUMsRUFBRTFELFFBQVEsQ0FBQ0ssMEJBQTBCLEdBQUcsR0FBRyxDQUFDO01BQ2pEO01BQ0EsSUFBSXlFLFdBQVc7O01BR2Y7TUFDQSxJQUFJQyxZQUFZLEdBQUdqRSxRQUFRLENBQUNrRSxhQUFhLENBQUMsaUJBQWlCLENBQUM7TUFDNUQsSUFBSUQsWUFBWSxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJRSxtQkFBbUIsR0FBR25FLFFBQVEsQ0FBQ2tFLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztRQUN4RSxJQUFJRSxVQUFVLEdBQUdELG1CQUFtQixDQUFDRSxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJQyxNQUFNLEdBQUcsRUFBRTtRQUNmSCxtQkFBbUIsQ0FBQ3pELEtBQUssQ0FBQzZELFVBQVUsR0FBR0osbUJBQW1CLENBQUN6RCxLQUFLLENBQUM4RCxnQkFBZ0IsR0FBRyxNQUFNO1FBQzFGTCxtQkFBbUIsQ0FBQ3pELEtBQUssQ0FBQytELGVBQWUsR0FBR0wsVUFBVSxHQUFHLEdBQUcsR0FBR0EsVUFBVTtRQUN6RUQsbUJBQW1CLENBQUN6RCxLQUFLLENBQUNnRSxnQkFBZ0IsR0FBR04sVUFBVTtRQUN2REQsbUJBQW1CLENBQUNRLHFCQUFxQixDQUFDLENBQUM7UUFDM0NSLG1CQUFtQixDQUFDekQsS0FBSyxDQUFDNkQsVUFBVSxHQUFHSixtQkFBbUIsQ0FBQ3pELEtBQUssQ0FBQzhELGdCQUFnQixHQUM3RSwrQkFBK0I7UUFDbkM1SCxNQUFNLENBQUNnSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsS0FBSyxFQUFFO1VBQy9DLElBQUlDLE1BQU0sR0FBRzlFLFFBQVEsQ0FBQ2hELElBQUksQ0FBQytILFNBQVMsSUFBSS9FLFFBQVEsQ0FBQ2dGLGVBQWUsQ0FBQ0QsU0FBUztVQUMxRSxJQUFJMUUsTUFBTSxHQUFHTCxRQUFRLENBQUNnRixlQUFlLENBQUNDLFlBQVksR0FBR2pGLFFBQVEsQ0FBQ2dGLGVBQWUsQ0FBQ0UsWUFBWTtVQUMxRixJQUFJQyxRQUFRLEdBQUdmLFVBQVUsR0FBSVUsTUFBTSxHQUFHVixVQUFVLEdBQUkvRCxNQUFNO1VBQzFEOEQsbUJBQW1CLENBQUN6RCxLQUFLLENBQUNnRSxnQkFBZ0IsR0FBR1MsUUFBUTtVQUNyRCxJQUFJQyxnQkFBZ0IsR0FBR3BGLFFBQVEsQ0FBQ2hELElBQUksQ0FBQytILFNBQVMsSUFBSS9FLFFBQVEsQ0FBQ2dGLGVBQWUsQ0FBQ0QsU0FBUztVQUNwRixJQUFJSyxnQkFBZ0IsSUFBSWQsTUFBTSxFQUFFO1lBQzVCTCxZQUFZLENBQUNvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7VUFDL0MsQ0FBQyxNQUFNO1lBQ0hyQixZQUFZLENBQUNvQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7VUFDbEQ7UUFDSixDQUFDLENBQUM7UUFDRnRCLFlBQVksQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVZLENBQUMsRUFBRTtVQUNoREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNsQjdJLE1BQU0sQ0FBQ2tJLE1BQU0sQ0FBQztZQUNWWSxHQUFHLEVBQUUsQ0FBQztZQUNOQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxRQUFRLEVBQUU7VUFDZCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjs7TUFFQTtNQUNBakosQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDa0osTUFBTSxDQUFDLFVBQVVMLENBQUMsRUFBRTtRQUMvQixJQUFJTSxHQUFHLEdBQUduSixDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3hCbUosR0FBRyxDQUFDQyxJQUFJLENBQUMsWUFBWTtVQUNqQixJQUFJQyxXQUFXLEdBQUdySixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLElBQUksQ0FBQyxZQUFZLENBQUM7VUFDNUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NKLElBQUksQ0FBQ0QsV0FBVyxDQUFDO1FBQzdCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztNQUdGLElBQUlySixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1SixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDakN2SixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNvSCxRQUFRLENBQUMsaUJBQWlCLENBQUM7TUFDekM7TUFFQSxJQUFJb0MsS0FBSyxHQUFHeEosQ0FBQyxDQUFDLE1BQU0sQ0FBQztNQUNyQixJQUFJeUosTUFBTSxHQUFHekosQ0FBQyxDQUFDLHNCQUFzQixDQUFDO01BRXRDQSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzBKLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVWIsQ0FBQyxFQUFFO1FBQy9DQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCVyxNQUFNLENBQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZCcEgsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNvSCxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3RDb0MsS0FBSyxDQUFDcEMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pDcEgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDb0gsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMxRCxNQUFNLENBQUN6RCxNQUFNLENBQUMwRCxXQUFXLEdBQUcsSUFBSSxDQUFDO01BQ2xGLENBQUMsQ0FBQztNQUVGM0QsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMwSixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVViLENBQUMsRUFBRTtRQUNoREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUNsQjlJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzRJLE1BQU0sQ0FBQyxDQUFDO1FBQzNCWSxLQUFLLENBQUNHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwQ0YsTUFBTSxDQUFDRSxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzFCM0osQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM0SixVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2xENUosQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMkosV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUNqRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlEMUQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMySixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDM0osQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM0SixVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2xENUosQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMySixXQUFXLENBQUMsUUFBUSxDQUFDO01BQ3RELENBQUMsQ0FBQztNQUVGM0osQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMwSixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVV4QixLQUFLLEVBQUU7UUFDaERBLEtBQUssQ0FBQ1ksY0FBYyxDQUFDLENBQUM7UUFFdEIsSUFBSWUsSUFBSSxHQUFHLDRCQUE0QjtRQUN2QzdKLENBQUMsQ0FBQzZKLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDOUNoSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNvSCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDcEgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDb0gsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUMvQnBILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29ILFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFFOUIsQ0FBQyxDQUFDOztNQUdGO01BQ0FwSCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMwSixFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVeEIsS0FBSyxFQUFFO1FBQzNEQSxLQUFLLENBQUNZLGNBQWMsQ0FBQyxDQUFDO1FBRXRCOUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDMkosV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUMzQzNKLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMkosV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUM1QzNKLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzJKLFdBQVcsQ0FBQyxXQUFXLENBQUM7O1FBRWxDO1FBQ0EzSixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM0SSxNQUFNLENBQUMsQ0FBQztNQUMvQixDQUFDLENBQUM7TUFHRixJQUFJNUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDWSxNQUFNLElBQUlaLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUN5QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNwRDFCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ2lLLEdBQUcsQ0FBQztVQUNqQkMsUUFBUSxFQUFFLE9BQU87VUFDakJuQixHQUFHLEVBQUU7UUFDVCxDQUFDLENBQUM7TUFDTjs7TUFHQTtNQUNBL0ksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDb0osSUFBSSxDQUFDLFlBQVk7UUFDL0JwSixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNtSyxhQUFhLENBQUM7VUFDNUJDLElBQUksRUFBRSxRQUFRO1VBQ2RDLFNBQVMsRUFBRSxhQUFhO1VBQ3hCQyxZQUFZLEVBQUU7UUFDbEIsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDOztNQUdGO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUVBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUM7UUFDcEJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHQyxDQUFDO1VBQUEsT0FBSy9HLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUdELElBQUksQ0FBQ2dILEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUdELENBQUMsQ0FBQyxDQUFDO1FBQUE7UUFBRTtRQUMxREUsU0FBUyxFQUFFLFVBQVU7UUFBRTtRQUN2QkMsZ0JBQWdCLEVBQUUsVUFBVTtRQUFFO1FBQzlCQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxlQUFlLEVBQUUsQ0FBQztRQUNsQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLGVBQWUsRUFBRSxDQUFDO1FBQ2xCQyxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUM7O01BRUY7TUFDQVosS0FBSyxDQUFDYixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEwQixJQUFBLEVBQW9EO1FBQUEsSUFBbERqRCxNQUFNLEdBQUFpRCxJQUFBLENBQU5qRCxNQUFNO1VBQUVrRCxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztVQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtVQUFFVCxTQUFTLEdBQUFPLElBQUEsQ0FBVFAsU0FBUztVQUFFckMsUUFBUSxHQUFBNEMsSUFBQSxDQUFSNUMsUUFBUTtNQUVqRSxDQUFDLENBREc7TUFDSCxDQUFDO01BRUYsU0FBUytDLEdBQUdBLENBQUNDLElBQUksRUFBRTtRQUNmakIsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDQyxJQUFJLENBQUM7UUFDZnZHLHFCQUFxQixDQUFDc0csR0FBRyxDQUFDO01BQzlCO01BRUF0RyxxQkFBcUIsQ0FBQ3NHLEdBQUcsQ0FBQzs7TUFFMUI7TUFDQSxJQUFNRSxNQUFNLEdBQUdwSSxRQUFRLENBQUNrRSxhQUFhLENBQUMsU0FBUyxDQUFDO01BQ2hELElBQU1tRSxjQUFjLEdBQUdySSxRQUFRLENBQUNrRSxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFJakVsRSxRQUFRLENBQUM0RSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQVksQ0FBQyxFQUFJO1FBRXhDMUcsSUFBSSxDQUFDd0osRUFBRSxDQUFDLFNBQVMsRUFBRTtVQUNmbEIsUUFBUSxFQUFFLENBQUM7VUFDWG1CLENBQUMsRUFBRS9DLENBQUMsQ0FBQ2dELEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUc7VUFDekJDLENBQUMsRUFBRWpELENBQUMsQ0FBQ2tELEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUc7VUFDekJDLElBQUksRUFBRTtRQUNWLENBQUMsQ0FBQztRQUVGTixjQUFjLENBQUMzSCxLQUFLLENBQUNnRixHQUFHLEdBQUdGLENBQUMsQ0FBQ2tELEtBQUssR0FBRyxJQUFJO1FBQ3pDTCxjQUFjLENBQUMzSCxLQUFLLENBQUNpRixJQUFJLEdBQUdILENBQUMsQ0FBQ2dELEtBQUssR0FBRyxJQUFJO01BQzlDLENBQUMsQ0FBQzs7TUFFRjtNQUNBeEksUUFBUSxDQUFDNEUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07UUFDMUN3RCxNQUFNLENBQUMvQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdEM2QyxNQUFNLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFFbEMrQyxjQUFjLENBQUNoRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDOUM4QyxjQUFjLENBQUNoRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDOUMsQ0FBQyxDQUFDOztNQUVGO01BQ0F0RixRQUFRLENBQUM0RSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtRQUMxQ3dELE1BQU0sQ0FBQy9DLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNyQzZDLE1BQU0sQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUVuQytDLGNBQWMsQ0FBQ2hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3QzhDLGNBQWMsQ0FBQ2hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUMvQyxDQUFDLENBQUM7SUFNTixDQUFDO0lBSUQ7SUFDQTtJQUNBOztJQUVBekcsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBQSxFQUFjO01BRTVCLElBQUloQyxHQUFHLENBQUNFLE1BQU0sSUFBSUYsR0FBRyxDQUFDRSxNQUFNLENBQUNRLE1BQU0sRUFBRTtRQUVqQyxJQUFJVixHQUFHLENBQUMyQixZQUFZLEVBQUU7VUFDbEIzQixHQUFHLENBQUNFLE1BQU0sQ0FBQ2dILFFBQVEsQ0FBQyxlQUFlLENBQUM7VUFDcENsSCxHQUFHLENBQUNHLElBQUksQ0FBQytHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztVQUNuQzdCLFVBQVUsQ0FBQyxZQUFZO1lBQ25CdkYsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDb0gsUUFBUSxDQUFDLFVBQVUsQ0FBQztVQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1gsQ0FBQyxNQUFNO1VBQ0hsSCxHQUFHLENBQUNFLE1BQU0sQ0FBQ3VKLFdBQVcsQ0FBQyxlQUFlLENBQUM7VUFDdkN6SixHQUFHLENBQUNHLElBQUksQ0FBQ3NKLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztVQUN0QzNKLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ29ILFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDdEM7TUFDSjtJQUNKLENBQUM7SUFFRDtJQUNBO0lBQ0E7O0lBRUE2RSxpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFBLEVBQWM7TUFFM0IvTCxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQ1YsSUFBSStMLEtBQUssR0FBR2hNLEdBQUcsQ0FBQ0ssV0FBVztNQUUzQixJQUFJUCxDQUFDLENBQUNxRCxRQUFRLENBQUMsQ0FBQytFLFNBQVMsQ0FBQyxDQUFDLEdBQUc4RCxLQUFLLENBQUMxTCxhQUFhLEVBQUU7UUFFL0MsSUFBSyxDQUFDTixHQUFHLENBQUMyQixZQUFZLElBQUlxSyxLQUFLLENBQUN2TCxPQUFPLElBQUksQ0FBQ3VMLEtBQUssQ0FBQ3JMLEtBQUssSUFDbERYLEdBQUcsQ0FBQzJCLFlBQVksSUFBSXFLLEtBQUssQ0FBQ3BMLGFBQWEsSUFBSSxDQUFDb0wsS0FBSyxDQUFDbkwsV0FBWSxFQUFFO1VBRWpFLElBQUliLEdBQUcsQ0FBQzJCLFlBQVksRUFBRTtZQUNsQnFLLEtBQUssQ0FBQ25MLFdBQVcsR0FBRyxJQUFJO1VBQzVCLENBQUMsTUFBTTtZQUNIbUwsS0FBSyxDQUFDckwsS0FBSyxHQUFHLElBQUk7VUFDdEI7VUFDQVgsR0FBRyxDQUFDRSxNQUFNLENBQUNnSCxRQUFRLENBQUMsNEJBQTRCLENBQUM7UUFDckQ7TUFFSixDQUFDLE1BQU0sSUFBSThFLEtBQUssQ0FBQ3JMLEtBQUssSUFBSXFMLEtBQUssQ0FBQ25MLFdBQVcsRUFBRTtRQUV6Q21MLEtBQUssQ0FBQ3JMLEtBQUssR0FBRyxLQUFLO1FBQ25CcUwsS0FBSyxDQUFDbkwsV0FBVyxHQUFHLEtBQUs7UUFFekJiLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDdUosV0FBVyxDQUFDLGNBQWMsQ0FBQztNQUUxQzs7TUFFQTtNQUNBLElBQUkzSixDQUFDLENBQUNxRCxRQUFRLENBQUMsQ0FBQytFLFNBQVMsQ0FBQyxDQUFDLEdBQUc4RCxLQUFLLENBQUMxTCxhQUFhLEdBQUcsRUFBRSxFQUFFO1FBQ3BETixHQUFHLENBQUNFLE1BQU0sQ0FBQ3VKLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQ3ZDLFFBQVEsQ0FBQyxRQUFRLENBQUM7TUFDOUQsQ0FBQyxNQUFNO1FBQ0hsSCxHQUFHLENBQUNFLE1BQU0sQ0FBQ3VKLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQ3ZDLFFBQVEsQ0FBQyxlQUFlLENBQUM7TUFDOUQ7SUFDSixDQUFDO0lBRUQ7SUFDQTtJQUNBO0lBQ0FuRCxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFjO01BQ3JCLElBQUlqRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1ksTUFBTSxFQUFFO1FBQzVCWixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNtTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMvQyxJQUFJLENBQUMsWUFBWTtVQUN6QyxJQUFJcEosQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ21JLFNBQVMsQ0FBQyxDQUFDLElBQUlwSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMySCxNQUFNLENBQUMsQ0FBQyxDQUFDb0IsR0FBRyxHQUFHL0ksQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hFMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDb0gsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUMxQnBILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ21JLElBQUksQ0FBQyxZQUFZO2NBQ3BDLElBQUlnRCxPQUFPLEdBQUdwTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLElBQUksQ0FBQyxZQUFZLENBQUM7Y0FDeENWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxPQUFPLEVBQUVtQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzVELENBQUMsQ0FBQztVQUNOO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDO0lBRUQ7SUFDQTtJQUNBOztJQUVBcEssYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBYztNQUN2QmhDLENBQUMsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDMEosRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1FBQ2pHLElBQUkyQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSUYsUUFBUSxDQUFDRyxRQUFRLElBQUksSUFBSSxDQUFDQSxRQUFRLEVBQUU7VUFDaEgsSUFBSUMsTUFBTSxHQUFHek0sQ0FBQyxDQUFDLElBQUksQ0FBQzBNLElBQUksQ0FBQztVQUN6QixJQUFJRCxNQUFNLENBQUM3TCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRW5CNkwsTUFBTSxHQUFHQSxNQUFNLENBQUM3TCxNQUFNLEdBQUc2TCxNQUFNLEdBQUd6TSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzBNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4RTNNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzhHLE9BQU8sQ0FBQztjQUNuQnNCLFNBQVMsRUFBRXFFLE1BQU0sQ0FBQzlFLE1BQU0sQ0FBQyxDQUFDLENBQUNvQixHQUFHLEdBQUc7WUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNSLE9BQU8sS0FBSztVQUNoQjtRQUNKO01BQ0osQ0FBQyxDQUFDO01BRUYvSSxDQUFDLENBQUMsc0ZBQXNGLENBQUMsQ0FBQzBKLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUM5RyxJQUFJMkMsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDRCxRQUFRLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUlGLFFBQVEsQ0FBQ0csUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxFQUFFO1VBQ2hILElBQUlDLE1BQU0sR0FBR3pNLENBQUMsQ0FBQyxJQUFJLENBQUMwTSxJQUFJLENBQUM7VUFDekIsSUFBSUQsTUFBTSxDQUFDN0wsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUVuQjZMLE1BQU0sR0FBR0EsTUFBTSxDQUFDN0wsTUFBTSxHQUFHNkwsTUFBTSxHQUFHek0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMwTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDeEUzTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM4RyxPQUFPLENBQUM7Y0FDbkJzQixTQUFTLEVBQUVxRSxNQUFNLENBQUM5RSxNQUFNLENBQUMsQ0FBQyxDQUFDb0I7WUFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNSLE9BQU8sS0FBSztVQUNoQjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEO0lBQ0E7SUFDQTs7SUFFQTZELE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBLEVBQWM7TUFDakIsSUFBSUMsT0FBTyxHQUFHO1FBQ1ZDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxTQUFTLEVBQUUsR0FBRztRQUNkQyxPQUFPLEVBQUUsR0FBRztRQUNaQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxNQUFNLEVBQUU7TUFDWixDQUFDO01BRUQsSUFBSUMsUUFBUSxHQUFHcE4sQ0FBQyxDQUFDLGdCQUFnQixDQUFDO01BRWxDLElBQUlvTixRQUFRLEVBQUU7UUFDVkEsUUFBUSxDQUFDaEUsSUFBSSxDQUFDLFlBQVk7VUFDdEIsSUFBSWlFLEdBQUcsR0FBR3JOLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxTQUFTLENBQUM7VUFFakMsSUFBSStMLE9BQU8sR0FBRyxJQUFJQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRUYsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUVSLE9BQU8sQ0FBQztVQUN4RDdNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tKLE1BQU0sQ0FBQyxZQUFZO1lBQ3ZCb0UsT0FBTyxDQUFDRSxLQUFLLENBQUMsQ0FBQztVQUNuQixDQUFDLEVBQUU7WUFDQ0MsSUFBSSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDO0lBQ0Q7SUFDQTtJQUNBO0lBQ0F6TCxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFjO01BQ3JCakMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNvSixJQUFJLENBQUMsWUFBWTtRQUNsQyxJQUFJdUUsS0FBSyxHQUFHM04sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQkEsQ0FBQyxDQUFDLGNBQWMsRUFBRTJOLEtBQUssQ0FBQyxDQUFDMUQsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFFL0MwRCxLQUFLLENBQUNDLE1BQU0sQ0FBQyxZQUFZO1VBQ3JCNU4sQ0FBQyxDQUFDLHVCQUF1QixFQUFFMk4sS0FBSyxDQUFDLENBQUN2RyxRQUFRLENBQUMsU0FBUyxDQUFDO1VBQ3JEO1VBQ0EsSUFBSXlHLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDZixJQUFNQyxRQUFRLEdBQUc5TixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxVQUFVLENBQUM7VUFDL0RzTSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUdDLFFBQVE7VUFFMUI5TixDQUFDLENBQUMsUUFBUSxFQUFFMk4sS0FBSyxDQUFDLENBQUN2RSxJQUFJLENBQUMsWUFBWTtZQUNoQyxJQUFJdUUsS0FBSyxHQUFHM04sQ0FBQyxDQUFDLElBQUksQ0FBQztjQUNmK04sS0FBSyxHQUFHSixLQUFLLENBQUNqTixJQUFJLENBQUMsTUFBTSxDQUFDO2NBQzFCc04sTUFBTSxHQUFHTCxLQUFLLENBQUNOLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCUSxNQUFNLENBQUNFLEtBQUssQ0FBQyxHQUFHQyxNQUFNO1VBQzFCLENBQUMsQ0FBQzs7VUFFRjtVQUNBaE8sQ0FBQyxDQUFDaU8sSUFBSSxDQUFDO1lBQ0hDLEdBQUcsRUFBRVAsS0FBSyxDQUFDak4sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QjBKLElBQUksRUFBRSxNQUFNO1lBQ1o3SSxJQUFJLEVBQUVzTSxNQUFNO1lBQ1pNLE9BQU8sRUFBRSxTQUFTQSxPQUFPQSxDQUFDNU0sSUFBSSxFQUFFO2NBRTVCLElBQUlBLElBQUksQ0FBQzZNLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCcE8sQ0FBQyxDQUFDLGNBQWMsRUFBRTJOLEtBQUssQ0FBQyxDQUFDdkcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDdUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUNNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2NBQ3hILENBQUMsTUFBTTtnQkFDSGpLLENBQUMsQ0FBQyxjQUFjLEVBQUUyTixLQUFLLENBQUMsQ0FBQ3ZHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDTSxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztjQUN4SDtjQUNBakssQ0FBQyxDQUFDLHlCQUF5QixFQUFFMk4sS0FBSyxDQUFDLENBQUNyRSxJQUFJLENBQUMvSCxJQUFJLENBQUM4TSxPQUFPLENBQUM7Y0FDdERyTyxDQUFDLENBQUMsdUJBQXVCLEVBQUUyTixLQUFLLENBQUMsQ0FBQ2hFLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDNUQsQ0FBQztZQUNEeUUsS0FBSyxFQUFFLFNBQVNBLEtBQUtBLENBQUEsRUFBRztjQUNwQnBPLENBQUMsQ0FBQyxjQUFjLEVBQUUyTixLQUFLLENBQUMsQ0FBQ3ZHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDTSxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztjQUNwSGpLLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTJOLEtBQUssQ0FBQyxDQUFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDO2NBQ3JFdEosQ0FBQyxDQUFDLHVCQUF1QixFQUFFMk4sS0FBSyxDQUFDLENBQUNoRSxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQzVEO1VBQ0osQ0FBQyxDQUFDO1VBQ0YsT0FBTyxLQUFLO1FBQ2hCLENBQUMsQ0FBQztNQUVOLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVENUosS0FBSyxDQUFDdU8sZUFBZSxHQUFHO0lBQ3BCbk8sSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUEsRUFBYztNQUNkSixLQUFLLENBQUMrQixVQUFVLENBQUMzQixJQUFJLENBQUMsQ0FBQztJQUMzQjtFQUNKLENBQUM7RUFFREosS0FBSyxDQUFDd08sY0FBYyxHQUFHO0lBQ25CcE8sSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUEsRUFBYztNQUNkRCxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQ1ZKLEtBQUssQ0FBQytCLFVBQVUsQ0FBQ0ksa0JBQWtCLENBQUMsQ0FBQztNQUNyQ2xDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ3dPLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbkM7RUFDSixDQUFDO0VBRUR6TyxLQUFLLENBQUMwTyxnQkFBZ0IsR0FBRztJQUNyQnRPLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQWM7TUFDZCxJQUFJSCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNZLE1BQU0sSUFBSVosQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lCLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ3BEMUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDaUssR0FBRyxDQUFDO1VBQ2pCQyxRQUFRLEVBQUUsT0FBTztVQUNqQm5CLEdBQUcsRUFBRTtRQUNULENBQUMsQ0FBQztNQUNOO01BQ0E3SSxHQUFHLENBQUNzQixNQUFNLENBQUMsQ0FBQztNQUNaekIsS0FBSyxDQUFDK0IsVUFBVSxDQUFDSSxrQkFBa0IsQ0FBQyxDQUFDO01BQ3JDbkMsS0FBSyxDQUFDK0IsVUFBVSxDQUFDbUssaUJBQWlCLENBQUMsQ0FBQztJQUN4QztFQUNKLENBQUM7RUFFRGxNLEtBQUssQ0FBQzJPLGdCQUFnQixHQUFHO0lBQ3JCdk8sSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUEsRUFBYztNQUNkSixLQUFLLENBQUMrQixVQUFVLENBQUNtSyxpQkFBaUIsQ0FBQyxDQUFDO01BQ3BDLElBQUlqTSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDbUksU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDN0JwSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ29ILFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDNUMsQ0FBQyxNQUFNO1FBQ0hwSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzJKLFdBQVcsQ0FBQyxVQUFVLENBQUM7TUFDL0M7SUFFSjtFQUNKLENBQUM7O0VBRUQ7RUFDQTNKLENBQUMsQ0FBQ3FELFFBQVEsQ0FBQyxDQUFDc0wsS0FBSyxDQUFDNU8sS0FBSyxDQUFDdU8sZUFBZSxDQUFDbk8sSUFBSSxDQUFDO0VBQzdDSCxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDeUosRUFBRSxDQUFDLE1BQU0sRUFBRTNKLEtBQUssQ0FBQ3dPLGNBQWMsQ0FBQ3BPLElBQUksQ0FBQztFQUMvQ0gsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lKLEVBQUUsQ0FBQyxRQUFRLEVBQUUzSixLQUFLLENBQUMwTyxnQkFBZ0IsQ0FBQ3RPLElBQUksQ0FBQztFQUNuREgsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3lKLEVBQUUsQ0FBQyxRQUFRLEVBQUUzSixLQUFLLENBQUMyTyxnQkFBZ0IsQ0FBQ3ZPLElBQUksQ0FBQztBQUV2RCxDQUFDLEVBQUV5TyxNQUFNLENBQUMsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgTU9NSU4gPSBNT01JTiB8fCB7fTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICMgVGhpcyBiZWF1dGlmdWwgY29kZSB3cml0dGVuIHdpdGggaGVhcnRcbiAgICAgICAgIyBieSBHcHQgSXNsYW0gPGhlbGxvQG1vbWludWwubWU+XG4gICAgICAgICMgSW4gRGhha2EsIEJEIGF0IHRoZSBHcHRJc2xhbSB3b3Jrc3RhdGlvbi5cbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vIFVTRSBTVFJJQ1RcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHdpbmRvdy5HUFQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEhlYWRlclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCcuaGVhZGVyLWZpeGVkJyk7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB0aGlzLndwYWRtaW5iYXIgPSAkKCcjd3BhZG1pbmJhcicpO1xuXG4gICAgICAgICAgICB0aGlzLmhlYWRlckZpeGVkID0ge1xuICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXQ6IHBhcnNlSW50KHRoaXMuaGVhZGVyLmF0dHIoJ2RhdGEtZml4ZWQtaW5pdGlhbC1vZmZzZXQnKSkgfHwgMTAwLFxuXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJCgnW2RhdGEtaGVhZGVyLWZpeGVkXScpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBtb2JpbGVFbmFibGVkOiAkKCdbZGF0YS1tb2JpbGUtaGVhZGVyLWZpeGVkXScpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBtb2JpbGVWYWx1ZTogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIExvZ29zXG4gICAgICAgICAgICB0aGlzLnNpdGVUaXRsZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5zaXRlLXRpdGxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmhlYWRlci5maW5kKCcubWFpbi1sb2dvJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ29Gb3JPbmVwYWdlID0gdGhpcy5oZWFkZXIuZmluZCgnLmZvci1vbmVwYWdlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ29Gb3JPbmVwYWdlTGlnaHQgPSB0aGlzLmxvZ29Gb3JPbmVwYWdlLmZpbmQoJy5saWdodCcpO1xuXG4gICAgICAgICAgICAvLyBNZW51c1xuICAgICAgICAgICAgdGhpcy5tZWdhTWVudSA9IHRoaXMuaGVhZGVyLmZpbmQoJyNtZWdhLW1lbnUtd3JhcCcpO1xuICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gJCgnW2RhdGEtbW9iaWxlLW1lbnUtcmVzb2x1dGlvbl0nKS5kYXRhKCdtb2JpbGUtbWVudS1yZXNvbHV0aW9uJyk7XG5cblxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkxO1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICQod2luZG93KS53aWR0aCgpIDw9IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNQYWQgPSAkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0O1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZU1lbnUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSBHUFQubW9iaWxlTWVudVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIE1PTUlOLmluaXRpYWxpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuZ2VuZXJhbCgpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5zZWN0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmNvbnRhY3RGcm9tKCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbGxlY3Rpb24gb2Ygc25pcHBldCBhbmQgdHdlYWtzICAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgZ2VuZXJhbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBvYmplY3QtZml0IHBvbHlmaWxsIHJ1blxuICAgICAgICAgICAgLy8gb2JqZWN0Rml0SW1hZ2VzKCk7XG4gICAgICAgICAgICAvLyAvKiBpbml0IEphcmFsbGF4ICovXG4gICAgICAgICAgICAvLyBqYXJhbGxheChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamFyYWxsYXgnKSk7XG4gICAgICAgICAgICAvLyBqYXJhbGxheChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamFyYWxsYXgta2VlcC1pbWcnKSwge1xuICAgICAgICAgICAgLy8gICAgIGtlZXBJbWc6IHRydWUsXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gR3NhcCBSZWdpc3RlciBQbHVnaW5cbiAgICAgICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgU2Nyb2xsU21vb3RoZXIpO1xuXG5cbiAgICAgICAgICAgIC8vIFBSRUxPQURFUlxuICAgICAgICAgICAgbGV0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzU2l6ZTogMzIwLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXJBbmltYXRpb25EdXJhdGlvbjogODAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGVncmVlOiAtOTAsXG4gICAgICAgICAgICAgICAgZmluYWxEZWdyZWU6IDI3MFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW0sIGF0dHJzKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgICAgICAgICAgICAgIHNpemU7XG5cbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IE1hdGgubWluKHNldHRpbmdzLnByb2dyZXNzU2l6ZSwgaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLm1pbihzZXR0aW5ncy5wcm9ncmVzc1NpemUsIHdpZHRoIC0gNTApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHByZWxvYWRlciwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInByZWxvYWRlclwiLFxuICAgICAgICAgICAgICAgIGlkOiAncHJlbG9hZGVyJyxcbiAgICAgICAgICAgICAgICBzdHlsZTogJ3RyYW5zaXRpb246IG9wYWNpdHkgJyArIHNldHRpbmdzLnByZWxvYWRlckFuaW1hdGlvbkR1cmF0aW9uIC8gMTAwMCArICdzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGNhbnZhcywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZ3Jlc3MtYmFyJyxcbiAgICAgICAgICAgICAgICBpZDogJ3Byb2dyZXNzLWJhcicsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNldHRpbmdzLnByb2dyZXNzU2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNldHRpbmdzLnByb2dyZXNzU2l6ZVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRlcicpO1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyksXG4gICAgICAgICAgICAgICAgaW1hZ2VzID0gZG9jdW1lbnQuaW1hZ2VzLFxuICAgICAgICAgICAgICAgIGltYWdlc0Ftb3VudCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaW1hZ2VzTG9hZGVkID0gMCxcbiAgICAgICAgICAgICAgICBiYXJDdHggPSBwcm9ncmVzc0Jhci5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgICAgICAgIGNpcmNsZUNlbnRlclggPSBwcm9ncmVzc0Jhci53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgY2lyY2xlQ2VudGVyWSA9IHByb2dyZXNzQmFyLmhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgY2lyY2xlUmFkaXVzID0gY2lyY2xlQ2VudGVyWCAtIHNldHRpbmdzLmxpbmVXaWR0aCxcbiAgICAgICAgICAgICAgICBkZWdyZWVzUGVyUGVyY2VudCA9IDMuNixcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgPSAwLFxuICAgICAgICAgICAgICAgIHNob3dlZFByb2dyZXNzID0gMCxcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0ZXAgPSAwLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzRGVsdGEgPSAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgcnVubmluZztcblxuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgfHwgbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IHdlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICB8fCBvUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IG1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgTWF0aC5yYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLm9wYWNpdHkgPSBzZXR0aW5ncy5wcm9ncmVzc09wYWNpdHk7XG4gICAgICAgICAgICBiYXJDdHguc3Ryb2tlU3R5bGUgPSBzZXR0aW5ncy5wcm9ncmVzc0NvbG9yO1xuICAgICAgICAgICAgYmFyQ3R4LmxpbmVXaWR0aCA9IHNldHRpbmdzLmxpbmVXaWR0aDtcbiAgICAgICAgICAgIGJhckN0eC5saW5lQ2FwID0gc2V0dGluZ3MubGluZUNhcDtcbiAgICAgICAgICAgIGxldCBhbmdsZU11bHRpcGxpZXIgPSAoTWF0aC5hYnMoc2V0dGluZ3Muc3RhcnREZWdyZWUpICsgTWF0aC5hYnMoc2V0dGluZ3MuZmluYWxEZWdyZWUpKSAvIDM2MDtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gTWF0aC5yYWRpYW5zKHNldHRpbmdzLnN0YXJ0RGVncmVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBwcmVsb2FkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3MucHJlbG9hZGVyQmFja2dyb3VuZDtcblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlc0Ftb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VDbG9uZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltYWdlQ2xvbmUub25sb2FkID0gb25JbWFnZUxvYWQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VDbG9uZS5vbmVycm9yID0gb25JbWFnZUxvYWQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VDbG9uZS5zcmMgPSBpbWFnZXNbaV0uc3JjO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcgPT09IHRydWUpIHJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGltYWdlc0xvYWRlZCsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlc0xvYWRlZCA+PSBpbWFnZXNBbW91bnQpIGhpZGVQcmVsb2FkZXIoKTtcblxuICAgICAgICAgICAgICAgIHByb2dyZXNzU3RlcCA9IHNob3dlZFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9ICgoMTAwIC8gaW1hZ2VzQW1vdW50KSAqIGltYWdlc0xvYWRlZCkgPDwgMDtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0RlbHRhID0gY3VycmVudFByb2dyZXNzIC0gc2hvd2VkUHJvZ3Jlc3M7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgICAgICAgICAgIH0sIDEwKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgdGltZURlbHRhID0gTWF0aC5taW4oMSwgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lKSAvIHNldHRpbmdzLnByZWxvYWRlckFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzaG93ZWRQcm9ncmVzcyA9IHByb2dyZXNzU3RlcCArIChwcm9ncmVzc0RlbHRhICogdGltZURlbHRhKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aW1lRGVsdGEgPD0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGJhckN0eC5jbGVhclJlY3QoMCwgMCwgcHJvZ3Jlc3NCYXIud2lkdGgsIHByb2dyZXNzQmFyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJhckN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYmFyQ3R4LmFyYyhjaXJjbGVDZW50ZXJYLCBjaXJjbGVDZW50ZXJZLCBjaXJjbGVSYWRpdXMsIHN0YXJ0QW5nbGUsIChNYXRoLnJhZGlhbnMoc2hvd2VkUHJvZ3Jlc3MgKiBkZWdyZWVzUGVyUGVyY2VudCkgKiBhbmdsZU11bHRpcGxpZXIpICsgc3RhcnRBbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJhckN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGlkZVByZWxvYWRlcigpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwYWdlLWxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICAgICAgICAgICAgICB9LCBzZXR0aW5ncy5wcmVsb2FkZXJBbmltYXRpb25EdXJhdGlvbiArIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzaXplVGltZXI7XG5cblxuICAgICAgICAgICAgLy8gQmFjayBUbyBUb3BcbiAgICAgICAgICAgIHZhciBncHRTY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wXCIpO1xuICAgICAgICAgICAgaWYgKGdwdFNjcm9sbFRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFByb2dyZXNzUGF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdwdC1zY3JvbGwtdG9wIHBhdGhcIik7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBzY3JvbGxQcm9ncmVzc1BhdGNoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDUwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUudHJhbnNpdGlvbiA9IHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcbiAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xuICAgICAgICAgICAgICAgIHNjcm9sbFByb2dyZXNzUGF0Y2guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS50cmFuc2l0aW9uID0gc2Nyb2xsUHJvZ3Jlc3NQYXRjaC5zdHlsZS5XZWJraXRUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldCAxMG1zIGxpbmVhclwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwYXRoTGVuZ3RoIC0gKHNjcm9sbCAqIHBhdGhMZW5ndGgpIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQcm9ncmVzc1BhdGNoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEVsZW1lbnRQb3MgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsRWxlbWVudFBvcyA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKFwicHJvZ3Jlc3MtZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdwdFNjcm9sbFRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvdW50ZXJcbiAgICAgICAgICAgICQoXCIub2RvbWV0ZXJcIikuYXBwZWFyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9kbyA9ICQoXCIub2RvbWV0ZXJcIik7XG4gICAgICAgICAgICAgICAgb2RvLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnROdW1iZXIgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWNvdW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoY291bnROdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhcImFkbWluLWJhclwiKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSAkKCcuY2FudmFzLW1lbnUtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2Utb3Blbi1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcIi5ncHQtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1jbG9zZS1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmdwdC1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoJy5oYXMtc3VibWVudSAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gJzxkaXYgY2xhc3M9XCJtYXNrLW92ZXJsYXlcIj4nO1xuICAgICAgICAgICAgICAgICQobWFzaykuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgICAgICAkKCcjc2l0ZS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5jbG9zZS1tZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBtYXNrXG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyogTWFnbmVmaWMgUG9wdXAgKi9cbiAgICAgICAgICAgICQoJy5wbGF5LWJ1dHRvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5wbGF5LWJ1dHRvbicpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLXpvb20taW4nLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmFsRGVsYXk6IDI2MCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vIEdzYXAgU21vb3RoIFNjcm9sbFxuICAgICAgICAgICAgLy8gZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBTY3JvbGxTbW9vdGhlcik7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gLy8gU2Nyb2xsIHRvIFRvcFxuICAgICAgICAgICAgLy8gbGV0IHNtb290aGVyID0gU2Nyb2xsU21vb3RoZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB3cmFwcGVyOiAnI3NpdGUtY29udGVudCcsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogJyNtYWluJyxcbiAgICAgICAgICAgIC8vICAgICBzbW9vdGg6IDIsXG4gICAgICAgICAgICAvLyAgICAgZWZmZWN0OiB0cnVlXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgY29uc3QgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAodCkgPT4gTWF0aC5taW4oMSwgMS4wMDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KSksIC8vIGh0dHBzOi8vd3d3LmRlc21vcy5jb20vY2FsY3VsYXRvci9icnM1NGw0eG91XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLCAvLyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsIC8vIHZlcnRpY2FsLCBob3Jpem9udGFsLCBib3RoXG4gICAgICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1vdXNlTXVsdGlwbGllcjogMixcbiAgICAgICAgICAgICAgICBzbW9vdGhUb3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vZ2V0IHNjcm9sbCB2YWx1ZVxuICAgICAgICAgICAgbGVuaXMub24oJ3Njcm9sbCcsICh7c2Nyb2xsLCBsaW1pdCwgdmVsb2NpdHksIGRpcmVjdGlvbiwgcHJvZ3Jlc3N9KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeyBzY3JvbGwsIGxpbWl0LCB2ZWxvY2l0eSwgZGlyZWN0aW9uLCBwcm9ncmVzcyB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZnVuY3Rpb24gcmFmKHRpbWUpIHtcbiAgICAgICAgICAgICAgICBsZW5pcy5yYWYodGltZSlcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuXG4gICAgICAgICAgICAvLyBDdXJzb3JcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJzb3InKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvckZvbGxvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvci1mb2xsb3dlcicpO1xuXG5cblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG5cbiAgICAgICAgICAgICAgICBnc2FwLnRvKCcuY3Vyc29yJywge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgeDogZS5wYWdlWCAqIDIgLSA1MCArIFwiJVwiLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZICogMiAtIDUwICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6IFwicG93ZXIzLm91dFwiLFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjdXJzb3JGb2xsb3dlci5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjdXJzb3JGb2xsb3dlci5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArICdweCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gTW91c2UgTGVhdmVcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnNvckJsb2NrJyk7XG4gICAgICAgICAgICAgICAgY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2N1cnNvck5vbmUnKTtcblxuICAgICAgICAgICAgICAgIGN1cnNvckZvbGxvd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnNvckJsb2NrJyk7XG4gICAgICAgICAgICAgICAgY3Vyc29yRm9sbG93ZXIuY2xhc3NMaXN0LmFkZCgnY3Vyc29yTm9uZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE1vdXNlIEVudGVyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCdjdXJzb3JOb25lJyk7XG4gICAgICAgICAgICAgICAgY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2N1cnNvckJsb2NrJyk7XG5cbiAgICAgICAgICAgICAgICBjdXJzb3JGb2xsb3dlci5jbGFzc0xpc3QucmVtb3ZlKCdjdXJzb3JOb25lJyk7XG4gICAgICAgICAgICAgICAgY3Vyc29yRm9sbG93ZXIuY2xhc3NMaXN0LmFkZCgnY3Vyc29yQmxvY2snKTtcbiAgICAgICAgICAgIH0pO1xuXG5cblxuXG5cbiAgICAgICAgfSxcblxuXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgTW9iaWxlIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVNb2JpbGVIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKEdQVC5oZWFkZXIgJiYgR1BULmhlYWRlci5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChHUFQuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgR1BULmJvZHkuYWRkQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3VuaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBHUFQuYm9keS5yZW1vdmVDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBGaXhlZCBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVGaXhlZEhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBHUFQuaW5pdCgpO1xuICAgICAgICAgICAgdmFyIGZpeGVkID0gR1BULmhlYWRlckZpeGVkO1xuXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKCFHUFQuaXNNb2JpbGVNZW51ICYmIGZpeGVkLmVuYWJsZWQgJiYgIWZpeGVkLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAoR1BULmlzTW9iaWxlTWVudSAmJiBmaXhlZC5tb2JpbGVFbmFibGVkICYmICFmaXhlZC5tb2JpbGVWYWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoR1BULmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdQVC5oZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci1maXhlZCBuby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkLnZhbHVlIHx8IGZpeGVkLm1vYmlsZVZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBHUFQuaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFZmZlY3QgYXBwZWFyYW5jZVxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCArIDUwKSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnbm8tdHJhbnNpdGlvbicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgR1BULmhlYWRlci5yZW1vdmVDbGFzcygnc2hvd2VkJykuYWRkQ2xhc3MoJ25vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIFByb2dyZXNzYmFyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBwcm9ncmVzc0JhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoJy5za2lsbC13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNraWxscycpLm5vdCgnLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICQodGhpcykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLmhlaWdodCgpICogMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5za2lsbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZW50ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuYWN0aXZlLWxpbmUnKS5jc3MoJ3dpZHRoJywgcHJvY2VudCArICclJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgU2VjdGlvbiBTd2l0Y2ggICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgc2VjdGlvblN3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2Utc2Nyb2xsLCAuc2l0ZS1oZWFkZXIgLm1lbnUgbGkgYSwgLmNhbnZhcy1uYXYgLnNpdGUtbWFpbi1tZW51IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdHlwZT1cInNlY3Rpb24tc3dpdGNoXCJdLCAuZ3AtYnRuLCAuZ3B0LW1haW4tbWVudSBsaSBhLCAuc2l0ZS1tYWluLW1lbnUgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ291bnR1cCAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGNvdW50VXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVzZUVhc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6ICcsJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsOiAnLicsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY291bnRlRWwgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuXG4gICAgICAgICAgICBpZiAoY291bnRlRWwpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVFbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudHVwID0gbmV3IENvdW50VXAodGhpcywgMCwgdmFsLCAwLCAyLjUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHVwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY1g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb250YWN0IEZvcm0gICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBjb250YWN0RnJvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtZ3B0LWZvcm1dJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJywgJHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG9iamVjdCBhbmQgYXNzaWduIGFsbCBmaWVsZHMgbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAkKCcuZ3B0LW5ld3NsZXR0ZXItc2VjdXJpdHknKS5kYXRhKCdzZWN1cml0eScpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbXCJub25jZVwiXSA9IHNlY3VyaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tuYW1lXScsICR0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5hbWUgPSAkdGhpcy5hdHRyKCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlID0gJHRoaXMudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJG5hbWVdID0gJHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCA+IC5jb250ZW50JywgJHRoaXMpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsICR0aGlzKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLnJlbW92ZUNsYXNzKCdhbGVydC13YXJuaW5nIGFsZXJ0LXN1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQgPiAuY29udGVudCcsICR0aGlzKS5odG1sKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nLCAkdGhpcykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPblJlYWR5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPbkxvYWQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEdQVC5pbml0KCk7XG4gICAgICAgICAgICBNT01JTi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgJChcIiNwcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIE1PTUlOLmRvY3VtZW50T25SZXNpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1BULnJlc2l6ZSgpO1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgIE1PTUlOLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgTU9NSU4uZG9jdW1lbnRPblNjcm9sbCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTU9NSU4uaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykuYWRkQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGdW5jdGlvbnNcbiAgICAkKGRvY3VtZW50KS5yZWFkeShNT01JTi5kb2N1bWVudE9uUmVhZHkuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgTU9NSU4uZG9jdW1lbnRPbkxvYWQuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBNT01JTi5kb2N1bWVudE9uUmVzaXplLmluaXQpO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgTU9NSU4uZG9jdW1lbnRPblNjcm9sbC5pbml0KTtcblxufSkoalF1ZXJ5KTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=