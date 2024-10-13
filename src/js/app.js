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
        init: function () {
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

        resize: function () {
            this.isDesktop = $(window).width() >= 991;
            this.isMobile = $(window).width() <= 991;
            this.isPad = $(window).width() <= 1024;
            this.isMobileMenu = $(window).width() <= GPT.mobileMenu
        }
    };

    MOMIN.initialize = {
        init: function () {
            MOMIN.initialize.general();
            MOMIN.initialize.handleMobileHeader();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function () {

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
                scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear";
                window.addEventListener("scroll", function (event) {
                    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    var progress = pathLength - (scroll * pathLength) / height;
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
                        behavior: "smooth",
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
                })
            }


            /* Magnefic Popup */
            $('.play-button').each(function () {
                $('.play-button').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-zoom-in',
                    removalDelay: 260,
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
                    delay: 2000,
                }
            });




        },



        /*===========================================*/
        /*=           handle Mobile Header          =*/
        /*===========================================*/

        handleMobileHeader: function () {

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

        handleFixedHeader: function () {

            GPT.init();
            var fixed = GPT.headerFixed;

            if ($(document).scrollTop() > fixed.initialOffset) {

                if ((!GPT.isMobileMenu && fixed.enabled && !fixed.value) ||
                    (GPT.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue)) {

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


    };

    MOMIN.documentOnReady = {
        init: function () {
            MOMIN.initialize.init();
        },
    };

    MOMIN.documentOnLoad = {
        init: function () {
            GPT.init();
            MOMIN.initialize.handleMobileHeader();
            $("#preloader").fadeOut("slow");
        },
    };

    MOMIN.documentOnResize = {
        init: function () {
            if ($("#wpadminbar").length && $(window).width() < 768) {
                $("#wpadminbar").css({
                    position: "fixed",
                    top: "0"
                })
            }
            GPT.resize();
            MOMIN.initialize.handleMobileHeader();
            MOMIN.initialize.handleFixedHeader();
        },
    };

    MOMIN.documentOnScroll = {
        init: function () {
            MOMIN.initialize.handleFixedHeader();
            if ($(window).scrollTop() > 300) {
                $('.return-to-top').addClass('back-top');
            } else {
                $('.return-to-top').removeClass('back-top');
            }

        },
    };

    // Initialize Functions
    $(document).ready(MOMIN.documentOnReady.init);
    $(window).on('load', MOMIN.documentOnLoad.init);
    $(window).on('resize', MOMIN.documentOnResize.init);
    $(window).on('scroll', MOMIN.documentOnScroll.init);

})(jQuery);



