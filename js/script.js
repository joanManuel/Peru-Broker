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
var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');

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
  
  setWrapperSize:true,
  autoHeight:true,

  onSlideChangeStart: function(swiper, event) {
    tabs.children[swiper.previousIndex].classList.remove('active');
    tabs.children[swiper.activeIndex].classList.add('active');
    
  },
});
