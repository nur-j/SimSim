!(function ($) {
    "use strict";

    //Myavatar upload preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
    
    // Preloader
    $(window).on("load", function () {
        if ($("#preloader").length) {
            $("#preloader")
                .delay(100)
                .fadeOut("slow", function () {
                    $(this).remove();
                });
        }
    });

    window.setInterval(function() { //setInterval (loop a function)
        $(".logo-flip").toggleClass("logo-flipped"); //toggle class "flipped"
    }, 1500); // Loop it every 5000 milliseconds

    $(document).ready(function () {
        $(".mobile-search").click(function () {
            $(".togglesearch").toggle();
            $(".mobile-input").focus();
        });
    });

    var proQty = $(".pro-qty");
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on("click", ".qtybtn", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $("#header").addClass("header-scrolled");
        } else {
            $("#header").removeClass("header-scrolled");
        }
    });

    if ($(window).scrollTop() > 70) {
        $("#header").addClass("header-scrolled");
    }

    // Stick the header at top on scroll
    $("#header").sticky({
        topSpacing: 0,
        zIndex: "50",
    });

    //Modal radio
    $(document).ready(function () {
        $('input[name="company"]').click(function () {
            if ($(this).attr("id") == "check-me") {
                $("#show-me-2").show();
            } else {
                $("#show-me-2").hide();
            }
        });
    });

    $(".show-me-2").hide();
    $(".check-me").click(function () {
        if ($(this).is(":checked")) {
            $(".show-me-2").show(300);
        } else {
            $(".show-me-2").hide(200);
        }
    });

    //Phone Mask
    $(document).ready(function () {
        $("#phone").mask("(99) 99 99 99",{placeholder:"(__) __ __ __"});
    });
    
    //Phone Mask
    $(document).ready(function () {
        $("#phone2").mask("(99) 99 99 99",{placeholder:"(__) __ __ __"});
    });

    //Show Hide Password
    $(document).ready(function() {
        
        $('.button-psswd').on('click', function() {
            
            if ($('.input-psswd').attr('psswd-shown') == 'false') {
                
                $('.input-psswd').removeAttr('type');
                $('.input-psswd').attr('type', 'text');
                
                $('.input-psswd').removeAttr('psswd-shown');
                $('.input-psswd').attr('psswd-shown', 'true');
                
                $('.button-psswd').html('<i class="icofont-eye-blocked"></i>');
                
            }else {
                
                $('.input-psswd').removeAttr('type');
                $('.input-psswd').attr('type', 'password');
                
                $('.input-psswd').removeAttr('psswd-shown');
                $('.input-psswd').attr('psswd-shown', 'false');
                
                $('.button-psswd').html('<i class="icofont-eye-alt"></i>');
                
            }
            
        });
        
    });

    //Modal radio
    $(document).ready(function () {
        $('input[name="group"]').click(function () {
            if ($(this).attr("id") == "watch-me") {
                $("#show-me").show();
            } else {
                $("#show-me").hide();
            }
        });
    });

    //Modal radio
    $(document).ready(function () {
        $('input[name="group"]').click(function () {
            if ($(this).attr("id") == "watch-me") {
                $("#show-me").show();
            } else {
                $("#show-me").hide();
            }
        });
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );
            }
        }
    });

    //Equal heights for categories
    $(document).ready(function () {
        var heights = [];

        $(".product-item").each(function () {
            heights.push($(this).height());
        });

        var maxHeight = Math.max.apply(null, heights);

        $(".product-item").height(maxHeight);
    });

    //Equal heights for products
    $(document).ready(function () {
        var heights = [];

        $(".category-box").each(function () {
            heights.push($(this).height());
        });

        var maxHeight = Math.max.apply(null, heights);

        $(".category-box").height(maxHeight);
    });

    //Equal heights for products
    $(document).ready(function () {
        var heights = [];

        $(".category-box").each(function () {
            heights.push($(this).height());
        });

        var maxHeight = Math.max.apply(null, heights);

        $(".category-box").height(maxHeight);
    });

    //Equal heights for products
    $(document).ready(function () {
        var heights = [];

        $(".news-item").each(function () {
            heights.push($(this).height());
        });

        var maxHeight = Math.max.apply(null, heights);

        $(".news-item").height(maxHeight);
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    //Small logo display on scroll
    $(window).scroll(function () {
        //more then or equals to
        if ($(window).scrollTop() >= 70) {
            $("#header-lg").css("display", "block");

            //less then 70px from top
        } else {
            $("#header-lg").css("display", "none");
        }
    });

    // Hero details carousel
    $(".hero-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
        nav: true,
        autoplayHoverPause: true,
    });

    
    $(document).ready(function () {
        $("#owl-demo").owlCarousel({
            nav: true,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
        });
    });

    //Zeynep Overlay
    $(function () {
        // loop all zeynepjs menus for initialization
        $(".zeynep").each(function () {
            // init zeynepjs side menu
            $(this).zeynep({
                opened: function (el) {
                    // log
                    console.log(
                        el.attr("data-menu-name") + " side menu opened"
                    );
                },
                closed: function (el) {
                    // log
                    console.log(
                        el.attr("data-menu-name") + " side menu closed"
                    );
                },
            });
        });

        // handle zeynepjs overlay click
        $(".zeynep-overlay").on("click", function () {
            // close all zeynepjs menus
            $(".zeynep.opened").each(function () {
                $(this).data("zeynep").close();
            });
        });

        // open first zeynepjs side menu
        $(".btn-open.first").on("click", function () {
            $(".zeynep.first").data("zeynep").open();
        });

        // open second zeynepjs side menu
        $(".btn-open.second").on("click", function () {
            $(".zeynep.second").data("zeynep").open();
        });
    });

    jQuery(document).ready(function () {
        jQuery("#filter-toggle").on("click", function (event) {
            jQuery(".filter-toggle").toggle("toggle");
        });
    });

    //Mobile search
    $("#search-wrap").click(function () {
        $("#search-logo-toggle").toggle();
    });

    $(document).click(function (event) {
        if (!$(event.target).hasClass("autocom-box")) {
            $(".autocom-box").hide();
        }
    });

    // Product Slider
    $(".product-slider").owlCarousel({
        stagePadding: 10,
        loop: false,
        margin: 35,
        nav: true,
        items: 1,
        dots: true,
        navText: [
            '<i class="bx bx-chevron-left"></i>',
            '<i class="bx bx-chevron-right"></i>',
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            840: {
                items: 2.5,
            },
            696: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    $(".brands-product-slider").owlCarousel({
        stagePadding: 10,
        loop: false,
        margin: 35,
        nav: true,
        items: 1,
        dots: true,
        navText: [
            '<i class="bx bx-chevron-left"></i>',
            '<i class="bx bx-chevron-right"></i>',
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            840: {
                items: 2.5,
            },
            696: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    // News Slider
    $(".news-slider").owlCarousel({
        stagePadding: 10,
        loop: false,
        margin: 35,
        nav: true,
        items: 1,
        dots: true,
        navText: [
            '<i class="bx bx-chevron-left"></i>',
            '<i class="bx bx-chevron-right"></i>',
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            840: {
                items: 2.5,
            },
            696: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    //Product Single Slider
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        items: 5,
        dots: false,
        navText: [
            '<i class="bx bx-left-arrow-alt"></i>',
            '<i class="bx bx-right-arrow-alt"></i>',
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
    });

    /*------------------
    Single Product
    --------------------*/
    $(".product-thumbs-track .pt").on("click", function () {
        $(".product-thumbs-track .pt").removeClass("active");
        $(this).addClass("active");
        var imgurl = $(this).data("imgbigurl");
        var bigImg = $(".product-big-img").attr("src");
        if (imgurl != bigImg) {
            $(".product-big-img").attr({ src: imgurl });
            $(".zoomImg").attr({ src: imgurl });
        }
    });
    
})(jQuery);
