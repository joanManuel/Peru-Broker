$(function () {
  
 
  //Animación del navbar(menu)
	$('nav.lista-menu').on('click', function() {
        $('.bar').toggleClass('animate'),
        $('header .menu').toggleClass('color-header');
  })

  // Oculta el menu
  $('nav.lista-menu').on('click', function() {
    $('nav.lista-menu ul').toggle();
  })

  var ancho = $(window).width();    
  var point = 992;
  if(ancho >= point){
    /* MENU FIJO */
    // let menu = document.getElementById("menu");
    let menu = document.getElementById("menu");
    let sticky = menu.offsetTop;
    console.log(sticky);
    
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
  var tabs = document.querySelector('.tabs-buttons');

  var tabButtons = new Swiper('.tabs-buttons', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheelControl: true,
    onTap: function(swiper, event) {
      if ( event.target.classList.contains('swiper-slide') && !event.target.classList.contains('active-tab') ) {
        
        event.target.parentElement.querySelector('.active-tab').classList.remove('active-tab');
        event.target.classList.add('active-tab');
        tabContent.slideTo(swiper.clickedIndex);
      }
    }
  });


var tabContent = new Swiper('.tabs-content', {
  autoHeight:true,
  draggable:false,
  mousewheelControl: false
});

// STAF

  //initialize swiper when document ready
  var swiper = new Swiper('.content-item', {
    
    
     slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
          
      breakpoints:{
       
       320: {
          // slidesPerView: 'auto',
          // spaceBetween: 30,
          // centeredSlides: true,
        }
      }
    
  })


  // CLIENTES

  //initialize swiper when document ready
  var swiper = new Swiper('.content-item-clientes', {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 5,
          centeredSlides: true,
      breakpoints:{
       
       320: {
          // slidesPerView: 'auto',
          // spaceBetween: 30,
          // centeredSlides: true,
        }
      }
    
  })
  // MAPA
    var map = L.map('map').setView([-12.126303, -77.016515], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([-12.126303, -77.016515]).addTo(map)
        .bindPopup('PERU BROKER S.A.')
        .openPopup();
  
});/* FIN */