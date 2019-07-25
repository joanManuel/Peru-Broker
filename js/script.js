//Animación del navbar(menu)
(function () {
	$('nav.lista-menu').on('click', function() {
        $('.bar').toggleClass('animate'),
        $('header .menu').toggleClass('color-header');
	})
})();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ No hace parte del la hamburquesa, Solo oculta la lista
$(document).ready(function() {
	// ↓↓↓↓ Menu hamburguesa
	$('nav.lista-menu').on('click', function() {
		$('nav.lista-menu ul').toggle();
	})
});

// BOTON PARA SUBIR
$(document).ready(function(){
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
  });

//SECCION NOSOTROS - TABS
var tabs = document.querySelector('.tabs-buttons');

var tabButtons = new Swiper('.tabs-buttons', {
  slidesPerView: 'auto',
  freeMode: true,
  
  // scrollbar: '.swiper-scrollbar',
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

  // setWrapperSize:true,
  // dragClass: '.swiper-slide-lock',
  autoHeight:true,
  draggable:false,
  // snapOnRelease:false,
  onSlideChangeStart: function(swiper, event) {
    // tabs.children[swiper.previousIndex].classList.remove('active');
    // tabs.children[swiper.activeIndex].classList.add('active');
    // lockClass
  },
});

// STAF
$(document).ready(function () {
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
});

// CLIENTES
$(document).ready(function () {
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
});

// MAPA

$(document).ready(function () {
  
    var map = L.map('map').setView([-12.126303, -77.016515], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([-12.126303, -77.016515]).addTo(map)
        .bindPopup('PERU BROKER S.A.')
        .openPopup();
  
});