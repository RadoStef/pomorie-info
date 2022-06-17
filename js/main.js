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


  $(".menu-btn, .menu-close-btn").click(function(){
    $(".mobile-navi").slideToggle("slow");
  });

  const logoEl = document.getElementById("logo-el");

  logoEl.innerHTML = `<img src="logo.png" alt="site_logo">`

});