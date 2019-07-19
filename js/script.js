(function () {
	$('nav.lista-menu').on('click', function() {
        $('.bar').toggleClass('animate'),
        $('header').toggleClass('color-header');
	})
})();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ No hace parte del la hamburquesa, Solo oculta la lista
$(document).ready(function() {
	// ↓↓↓↓ Menu hamburguesa
	$('nav.lista-menu').on('click', function() {
		$('nav.lista-menu ul').toggle();
	})
});