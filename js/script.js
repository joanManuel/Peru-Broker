/*Efecto cuando se haga scroll */
$(function() {
  
  /**Ancho de pantalla */
  var ancho = $(window).width();    
  var point = 992;

  //Animación del navbar(menu) en pantalla movil
  if(ancho <= point){
    $('nav.lista-menu').on('click', function() {
          $('.bar').toggleClass('animate'),
          $('header .menu').toggleClass('color-header');
    })
    // Oculta el menu
    $('nav.lista-menu').on('click', function() {
      $('nav.lista-menu ul').toggle();
  
    })
  }
 
  /* Pantalla de escritorio */
  if(ancho >= point){
    /* MENU FIJO */
    let menu = document.getElementById("menu");
    let sticky = menu.offsetTop;

    function checkPosition(){
      if(window.pageYOffset >= sticky){
        menu.classList.add("fixed");
      }else{
        menu.classList.remove("fixed");
      }
    }
    window.onscroll = function(){
      checkPosition();
    }
  }

  /* EFECTO PARA CUANDO SE HAGA SCROLL */
  $(document).on("scroll", scroll);
    
  menu = $('header ul li a');

  menu.on('click', function() {
    var to = $(this).attr('href'); 

    $('header ul li a').removeClass('active-menu');
    $('html, body').animate({ scrollTop: ($(to).offset().top)-75}, 700);
    if(ancho <= point){
        $('nav.lista-menu ul').toggle();
        $('.bar').toggleClass('animate'),
        $('header .menu').removeClass('color-header');
    }
    $(this).addClass('active-menu');
    $('header ul li a:first').removeClass('active-menu');
  
    return false;
  });
});

function scroll(event){
  var scrollPos = $(document).scrollTop();
  menu.each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if ((refElement.position().top)-80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        
          menu.removeClass("active-menu");
          currLink.addClass("active-menu");
      }
      else{
          currLink.removeClass("active-menu");
      }
  });
}

$(function () {
  /* Par alos efectos cuando se haga scroll */
  AOS.init();

  // BOTON PARA SUBIR
  $('.btn-up').click(function(){
    $('body, html').animate({
    scrollTop: '0px'
    }, 300);
  });
   
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.btn-up').slideDown(300);
      } else {
      $('.btn-up').slideUp(300);
      }
    });
 
  //SECCION NOSOTROS - TABS
  
  var tabButtons = new Swiper('.tabs-buttons', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheelControl: true,
  });

  /* TABS */
  $('.tabs-buttons ul li a:first').addClass('active-tab');
  $('.contenido-item .item:first').show();

  $('.tabs-buttons a').on('click',function(){
    $('.tabs-buttons ul li a').removeClass('active-tab');
    $('.ocultar').hide();
    $(this).addClass('active-tab');

    var enlace = $(this).attr('href');
      $(enlace).fadeIn(500);
    return false;
  });

// STAF
  //initialize swiper when document ready
  var swiper = new Swiper('.content-item', {
     slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            // disableOnInteraction: false,
            // stopOnLastSlide: true,
        },    
      breakpoints:{
       
       320: {
          // slidesPerView: 'auto',
          // spaceBetween: 30,
          // centeredSlides: true,
        }
      }
    
  });


  // CLIENTES

  //initialize swiper when document ready
  var swiper = new Swiper('.content-item-clientes', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          // disableOnInteraction: false,
          // stopOnLastSlide: true,
      },
      breakpoints:{
          320: {

            // slidesPerView: 'auto',
            // spaceBetween: 30,
            // centeredSlides: true,
        },
      },
    
  });
  // MAPA
    var map = L.map('map').setView([-12.126303, -77.016515], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([-12.126303, -77.016515]).addTo(map)
        .bindPopup('PERU BROKER S.A.')
        .openPopup();
});/* FIN */