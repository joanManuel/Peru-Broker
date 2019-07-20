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

//SECCION NOSOTROS - TABS
var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');

var tabButtons = new Swiper('.tabs-buttons', {
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: '.swiper-scrollbar',
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
  onSlideChangeStart: function(swiper, event) {
    tabs.children[swiper.previousIndex].classList.remove('active');
    tabs.children[swiper.activeIndex].classList.add('active');
  }
});