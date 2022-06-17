$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1000: {
        items: 3
      }
    }
  });


  $(".menu-btn").click(function(){
    $(".mobile-navi").slideToggle("slow");
  });

});