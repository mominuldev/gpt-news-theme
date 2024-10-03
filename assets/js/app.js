var MOMIN = MOMIN || {};

(function ($) {

    /*!----------------------------------------------
        # This beautiful code written with heart
        # by Mominul Islam <hello@mominul.me>
        # In Dhaka, BD at the MominulIslam workstation.
        ---------------------------------------------*/

    // USE STRICT
    "use strict";

    window.MPT = {
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
            this.isMobileMenu = $(window).width() <= MPT.mobileMenu
        }
    };

    MOMIN.initialize = {
        init: function () {
            MOMIN.initialize.general();
            MOMIN.initialize.sectionSwitch();
            MOMIN.initialize.contactFrom();
            MOMIN.initialize.handleMobileHeader();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function () {

            // object-fit polyfill run
            // objectFitImages();


            // let currentScroll = 0
            // let isScrollingDown = true
            // let arrows = document.querySelectorAll(".arrow")
            //
            // function throttle(callback, limit) {
            //     let wait = false
            //     return function () {
            //         if (!wait) {
            //             callback.apply(null, arguments)
            //             wait = true
            //             setTimeout(() => {
            //                 wait = false
            //             }, limit)
            //         }
            //     }
            // }
            //
            // let tween = gsap
            //     .to(".marquee__part", {
            //         xPercent: -100,
            //         repeat: -1,
            //         duration: 9,
            //         ease: "linear",
            //     })
            //     .totalProgress(0.5)
            //
            // gsap.set(".marquee__inner", {
            //     xPercent: -50,
            // })
            //
            // window.addEventListener(
            //     "scroll",
            //     throttle(function () {
            //         if (window.pageYOffset > currentScroll) {
            //             isScrollingDown = true
            //         } else {
            //             isScrollingDown = false
            //         }
            //
            //         gsap.to(tween, {
            //             timeScale: isScrollingDown ? 1 : -1,
            //         })
            //
            //         arrows.forEach((arrow) => {
            //             if (isScrollingDown) {
            //                 arrow.classList.remove("active")
            //             } else {
            //                 arrow.classList.add("active")
            //             }
            //         })
            //
            //         currentScroll = window.pageYOffset
            //     }, 200) // Adjust the throttling delay (in milliseconds) as needed
            // )

            // gsap.registerPlugin(ScrollTrigger);
            // let currentScroll = 0;
            // let isScrollingDown = true;
            // let arrows = document.querySelectorAll(".arrow");
            //
            // // Throttle function to limit the scroll event firing
            // function throttle(callback, limit) {
            //     let wait = false;
            //     return function () {
            //         if (!wait) {
            //             callback.apply(null, arguments);
            //             wait = true;
            //             setTimeout(() => {
            //                 wait = false;
            //             }, limit);
            //         }
            //     };
            // }
            //
            // // GSAP tween for marquee animation
            // let tween = gsap.to(".marquee__text-part", {
            //     xPercent: -100,
            //     repeat: -1,
            //     duration: 9,
            //     ease: "linear"
            // }).totalProgress(0.5);
            //
            // // Setting the initial position for the inner marquee element
            // gsap.set(".marquee__text-inner", {
            //     xPercent: -50
            // });
            //
            // // Function to handle scroll direction and tween adjustment
            // function handleScrollDirection() {
            //     isScrollingDown = window.pageYOffset > currentScroll;
            //
            //     // Update GSAP tween timeScale based on scroll direction
            //     gsap.to(tween, {
            //         timeScale: isScrollingDown ? 1 : -1
            //     });
            //
            //     // Update arrows based on direction
            //     arrows.forEach((arrow) => {
            //         arrow.classList.toggle("active", !isScrollingDown);
            //     });
            //
            //     // Store the current scroll position
            //     currentScroll = window.pageYOffset;
            // }

            // Throttled scroll event listener
            // window.addEventListener("scroll", throttle(handleScrollDirection, 200));

            // Function to set marquee direction based on data attribute
            // function setMarqueeDirection() {
            //     let marqueeDirection = document.querySelector('.marquee-text').getAttribute('data-direction');
            //     let isLeftToRight = marqueeDirection === 'left';
            //
            //     // Update the tween based on data-direction attribute
            //     gsap.to(tween, {
            //         timeScale: isLeftToRight ? 1 : -1
            //     });
            // }
            //
            // // Event listener for changing direction via data attribute
            // document.querySelector('.marquee-text').addEventListener('attributeChange', setMarqueeDirection);


            // PRELOADER
            let settings = {
                progressSize: 200,
                progressColor: '#ffffff',
                lineWidth: 2,
                lineCap: 'round',
                preloaderAnimationDuration: 800,
                startDegree: -90,
                finalDegree: 270
            }

            function setAttributes(elem, attrs) {

                for (let key in attrs) {
                    elem.setAttribute(key, attrs[key]);
                }

            }

            let preloader = document.createElement('div'),
                canvas = document.createElement('canvas'),
                size;

            (function () {

                let width = window.innerWidth,
                    height = window.innerHeight;

                if (width > height) {

                    size = Math.min(settings.progressSize, height / 2);

                } else {

                    size = Math.min(settings.progressSize, width - 50);

                }

            })();

            setAttributes(preloader, {
                class: "preloader",
                id: 'preloader',
                style: 'transition: opacity ' + settings.preloaderAnimationDuration / 1000 + 's'
            });
            setAttributes(canvas, {
                class: 'progress-bar',
                id: 'progress-bar',
                width: settings.progressSize,
                height: settings.progressSize
            });


            preloader = document.getElementById('preloader');

            let progressBar = document.getElementById('progress-bar'),
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

                return requestAnimationFrame
                    || mozRequestAnimationFrame
                    || webkitRequestAnimationFrame
                    || oRequestAnimationFrame
                    || msRequestAnimationFrame
                    || function (callback) {
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
            let angleMultiplier = (Math.abs(settings.startDegree) + Math.abs(settings.finalDegree)) / 360;
            let startAngle = Math.radians(settings.startDegree);
            document.body.style.overflowY = 'hidden';
            preloader.style.backgroundColor = settings.preloaderBackground;


            for (let i = 0; i < imagesAmount; i++) {

                let imageClone = new Image();
                imageClone.onload = onImageLoad;
                imageClone.onerror = onImageLoad;
                imageClone.src = images[i].src;

            }

            function onImageLoad() {

                if (running === true) running = false;

                imagesLoaded++;

                if (imagesLoaded >= imagesAmount) hidePreloader();

                progressStep = showedProgress;
                currentProgress = ((100 / imagesAmount) * imagesLoaded) << 0;
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

                let timeDelta = Math.min(1, (performance.now() - startTime) / settings.preloaderAnimationDuration);
                showedProgress = progressStep + (progressDelta * timeDelta);

                if (timeDelta <= 1) {

                    barCtx.clearRect(0, 0, progressBar.width, progressBar.height);
                    barCtx.beginPath();
                    barCtx.arc(circleCenterX, circleCenterY, circleRadius, startAngle, (Math.radians(showedProgress * degreesPerPercent) * angleMultiplier) + startAngle);
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
            var mptScrollTop = document.querySelector(".mpt-scroll-top");
            if (mptScrollTop != null) {
                var scrollProgressPatch = document.querySelector(".mpt-scroll-top path");
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
                        mptScrollTop.classList.add("progress-done");
                    } else {
                        mptScrollTop.classList.remove("progress-done");
                    }
                });
                mptScrollTop.addEventListener("click", function (e) {
                    e.preventDefault();
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
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
                $(".mpt-hamburger").addClass('active');
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
                $(".mpt-hamburger").removeClass('active');
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

            // const els = document.querySelectorAll(".ukiyo");
            // els.forEach((el) => {
            //     const parallax = new Ukiyo(el);
            // });

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
                direction: 'vertical', // vertical, horizontal
                gestureDirection: 'vertical', // vertical, horizontal, both
                smooth: true,
                mouseMultiplier: 2,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            })

            //get scroll value
            lenis.on('scroll', ({scroll, limit, velocity, direction, progress}) => {
                // console.log({ scroll, limit, velocity, direction, progress })
            })

            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)

            // Cursor
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');


            document.addEventListener('mousemove', e => {

                gsap.to('.cursor', {
                    duration: 1,
                    x: e.pageX * 2 - 50 + "%",
                    y: e.pageY * 2 - 50 + "%",
                    ease: "power2.out",
                })

                cursorFollower.style.top = e.pageY + 'px';
                cursorFollower.style.left = e.pageX + 'px';
            });

            // Mouse Leave
            document.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursorBlock');
                cursor.classList.add('cursorNone');

                cursorFollower.classList.remove('cursorBlock');
                cursorFollower.classList.add('cursorNone');
            });

            // Mouse Enter
            document.addEventListener('mouseenter', () => {
                cursor.classList.remove('cursorNone');
                cursor.classList.add('cursorBlock');

                cursorFollower.classList.remove('cursorNone');
                cursorFollower.classList.add('cursorBlock');
            });


        },


        /*===========================================*/
        /*=           handle Mobile Header          =*/
        /*===========================================*/

        handleMobileHeader: function () {

            if (MPT.header && MPT.header.length) {

                if (MPT.isMobileMenu) {
                    MPT.header.addClass('mobile-header');
                    MPT.body.addClass('is-mobile-menu');
                    setTimeout(function () {
                        $('.main-nav').addClass('unhidden');
                    }, 300);
                } else {
                    MPT.header.removeClass('mobile-header');
                    MPT.body.removeClass('is-mobile-menu');
                    $('.main-nav').addClass('visible');
                }
            }
        },

        /*==========================================*/
        /*=           handle Fixed Header          =*/
        /*==========================================*/

        handleFixedHeader: function () {

            MPT.init();
            var fixed = MPT.headerFixed;

            if ($(document).scrollTop() > fixed.initialOffset) {

                if ((!MPT.isMobileMenu && fixed.enabled && !fixed.value) ||
                    (MPT.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue)) {

                    if (MPT.isMobileMenu) {
                        fixed.mobileValue = true;
                    } else {
                        fixed.value = true;
                    }
                    MPT.header.addClass('header-fixed no-transition');
                }

            } else if (fixed.value || fixed.mobileValue) {

                fixed.value = false;
                fixed.mobileValue = false;

                MPT.header.removeClass('header-fixed');

            }

            // Effect appearance
            if ($(document).scrollTop() > fixed.initialOffset + 50) {
                MPT.header.removeClass('no-transition').addClass('showed');
            } else {
                MPT.header.removeClass('showed').addClass('no-transition');
            }
        },

        /*==================================*/
        /*=           Progressbar          =*/
        /*==================================*/
        progressBar: function () {
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

        sectionSwitch: function () {
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

            $('[data-type="section-switch"], .gp-btn, .mominul-main-menu li a, .site-main-menu > li > a').on('click', function () {
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

        countUp: function () {
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
                    })
                });
            }
        },
        /*=================================*/
        /*=           Contact Form         =*/
        /*=================================*/
        contactFrom: function () {
            $('[data-mominul-form]').each(function () {
                var $this = $(this);
                $('.form-result', $this).css('display', 'none');

                $this.submit(function () {
                    $('button[type="submit"]', $this).addClass('clicked');
                    // Create a object and assign all fields name and value.
                    var values = {};
                    const security = $('.mominul-newsletter-security').data('security');
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
        init: function () {
            MOMIN.initialize.init();
        },
    };

    MOMIN.documentOnLoad = {
        init: function () {
            MPT.init();
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
            MPT.resize();
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



