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

  // TESTIMONIALS //

  $('.slider-container').slick({
    // Setting name: setting-value
  });
  
  
  $('.testimon-slider-container').slick({
    autoplay: true,        // Do we want it to autoplay? true or false
    autoplaySpeed: 3000,   // How long between each slide when autoplaying
    speed: 500,            // How fast is the transition 
    arrows: false,          // Do you want to show arrows to trigger each slide
    accessibility: true,   // Enables tabbing and arrow key navigation 
    dots: true,            // Enables the dots below to show how many slides
    fade: false,           // Changes the animate from slide to fade if true
    infinite: true,       // When true, means that it will scroll in a circle
    pauseOnHover: true,   // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });
  
  $(".testimonial-slider-container").slick({
      autoplay: false,
      autoplaySpeed: 2e3,
      speed: 500,
      arrows: false,
      accessibility: true,
      dots: true,
      fade: false,
      infinite: false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      }]
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


//  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

// Background image lazy load
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
