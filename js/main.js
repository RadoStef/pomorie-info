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
  const footerEl = document.getElementById("footer-el");
  const sourcesEl = document.getElementById("sources-el");

  let isOpen = true;

  let sources = [`<a href="https://www.wikipedia.org">Wikipedia</a>,  
                  <a href="https://pomorietourism.bg/"> Pomorietourism</a>, 
                  <a href="https://pomorie.bg/"> Pomorie официален сайт</a>, 
                  <a href="https://opoznai.bg/"Opoznai.bg> Opoznai.bg</a>, 
                  <a href="https://pomoriemonastery.com"> Официален сайт на манастир "Свети Георги"</a>`
                ];


  logoEl.innerHTML = `<img src="https://www.sitefocus.eu/logo.png" alt="site_logo">`
  footerEl.textContent = "pomorie-info.com 2022. v1.0.22"
  sourcesEl.innerHTML = sources;
  

});