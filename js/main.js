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

  $(".menu-btn").click(function(){
    $(this).css("color", "red");
  });

  const logoEl = document.getElementById("logo-el");
  const footerEl = document.getElementById("footer-el");
  const sourcesEl = document.getElementById("sources-el");
  const menuEl = document.getElementById("menu-el");

  menuEl.innerHTML = `<li>
  <h4>Забележителности и история</h4>
  <a href="https://www.sitefocus.eu/sitefocus" target="_blank">Музеи</a>
  <a href="#">Забележителности</a>
  <a href="#">История на Поморие</a>
</li>

<li>
  <h4>Спорт и рекреация</h4>
  <a href="#">Спортни обекти</a>
  <a href="#">Разходка, джогинг, вело</a>
  <a href="#">Санаториуми</a>
  <a href="#">Луга и калолечение</a>
</li>

<li>
  <h4>За децата</h4>
  <a href="#">Детски площадки</a>
  <a href="#">Заведения с детски кът</a>
</li>

<li>
  <h4>Плажове</h4>
  <a href="#">Южен плаж - нов град</a>
  <a href="#">Северен плаж - Крайбрежна</a>
  <a href="#">Централен плаж - Атриум</a>
  <a href="#">Местност "Косата"</a>
</li>


<li>
  <h4>Паркинги</h4>
  <a href="#">Платени и безплатни паркинги</a>
</li>

<li>
  <h4>Атракциони</h4>
  <a href="#">Морска разходка</a>
  <a href="#">Влакче</a>
  <a href="#">Плажни атракциони</a>
  <a href="#">Лунапарк</a>
  <a href="#">Аквапарк</a>
</li>

<li>
  <h4>Транспорт</h4>
  <a href="#">Градски автобуси</a>
  <a href="#">Таксита</a>
</li>

<li>
  <h4>Култура</h4>
  <a href="#">Читалища</a>
  <a href="#">Книжарници</a>
</li>

<li>
  <h4>Хранене</h4>
  <a href="#">Ресторанти</a>
  <a href="#">Бързо хранене</a>
  <a href="#">Сладкарници и кафенета</a>
  <a href="#">Нощни заведения</a>
  <a href="#">Бийч барове</a>
</li>`


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