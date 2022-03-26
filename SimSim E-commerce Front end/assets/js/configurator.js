!(function($) {
    "use strict";

    $(function(){
        $(".show").click(function(){
          $('#Myconfigurator').modal('show');
        });
    });

    $(function(){

        //CPU
        $('#select-cpu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -351px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-cpu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -351px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });


        //COOLER
        $('#select-cooler').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -702px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        }); 

        $('#poly-cooler').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -702px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //Motherboard
        $('#select-motherboard').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2106px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-motherboard').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2106px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //RAM
        $('#select-ram-1').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1053px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#select-ram-2').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1053px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        }); 

        $('#poly-ram').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1053px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //GPU
        $('#select-gpu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1404px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-gpu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1404px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //CASE
        $('#select-case').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2808px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-case').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2808px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //PSU
        $('#select-psu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -3159px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-psu').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -3159px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //HDD
        $('#select-hdd').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2457px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-hdd').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -2457px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        //CD & DVD
        $('#select-cd').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1755px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });

        $('#poly-cd').hover(function(){
            $('#image-map-hover').css( "background-position", "0 -1755px").css("display", "block")
        }, function(){
            $('#image-map-hover').css("display", "none");
        });
        
    });


})(jQuery);


