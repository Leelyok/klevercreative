// Document . ready
$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
      });
    
      $('.mobile-menu a').click(function(){
        $('.mobile-menu').fadeOut(100);
        $(".hamburger-button").removeClass('active');
      });


    //Animate scroll - activate

    AOS.init({
        duration: 1500   // values from 0 to 3000
    });


//LightGallery PopUp

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});

//Typed sentences for us//
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 250,
    backSpeed: 5,
    
    loop: true,
    loopCount: 1,
    
    showCursor: false
  });

  // PORTFOLIO SECTION  //

  $(".p0-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p0").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p0-button").addClass("active")}),$(".p1-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p1").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p1-button").addClass("active")}),$(".p2-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p2").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p2-button").addClass("active")}),$(".p3-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p3").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p3-button").addClass("active")}),$(".p4-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p4").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p4-button").addClass("active")}),$(".p5-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p5").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p5-button").addClass("active")}),$(".p6-button").hover(function(){$(".filterable").addClass("hide-2"),$(".p6").removeClass("hide-2"),$(".filter-grid-button").removeClass("active"),$(".p6-button").addClass("active")});


  
});
