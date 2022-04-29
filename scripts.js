// Document . ready
$(document).ready(function() {

  $(".menu-mobile").click(function(){
    $(".sub-menu").toggle();
  });

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


$(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
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

  // Homepage hover gallery


  $('nav#hover-links a').mouseenter(function(e){
    e.preventDefault();

    /* make this <li> class active and remove class 'active' from any other <li>s */
    $('nav#hover-links .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().replace(' ','-').toLowerCase();

    $('.hover-image').each(function() {
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
        });

});

}); // End document ready


