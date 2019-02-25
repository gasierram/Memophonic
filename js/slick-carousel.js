$(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
          if(!logo.hasClass("sml-logo")) {
            logo.hide();
            logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
          }
        } else {
          if(!logo.hasClass("lrg-logo")) {
            logo.hide();
            logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
          }
        }
    
    });
    });

    var image = document.getElementsByClassName(".banner-area");
    var currentPos = 0;
    var images = ["../images/home/web_1.jpg", "../images/home/web_14.jpg", "../images/home/web_20.jpg"]

    function volgendefoto() {
        if (++currentPos >= images.length)
            currentPos = 0;

        
        image.style.backgroundImage = "url('images[currentPos]')";
        // $(".banner-area").css("background-image", 'url("' + images[currentPos] + '")'  );
        // console.log('url("' + imageUrl + '")' )
        // $(".banner-area").css("background-position", 'center'  );

        // $(".banner-area").css("-webkit-background-size", 'cover'  );
        // $(".banner-area").css("background-size", 'cover'  );
        // $(".banner-area").css("position", 'relative'  );
        // $(".banner-area").css("height", '100%'  );

    }

    setInterval(volgendefoto, 3000);