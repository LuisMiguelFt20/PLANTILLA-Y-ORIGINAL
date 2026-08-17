/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license
*/

(function($) {

	var $window = $(window),
		$body = $('body');


	/* =========================================================
	   BREAKPOINTS RESPONSIVE
	   ========================================================= */

	breakpoints({
		xlarge:  [ '1281px', '1680px' ],
		large:   [ '981px',  '1280px' ],
		medium:  [ '737px',  '980px'  ],
		small:   [ null,     '736px'  ]
	});


	/* =========================================================
	   ANIMACIÓN INICIAL
	   ========================================================= */

	$window.on('load', function() {

		window.setTimeout(function() {

			$body.removeClass('is-preload');

		}, 100);

	});


	/* =========================================================
	   DROPDOWNS DE LA PLANTILLA
	   ========================================================= */

	$('#nav > ul').dropotron({

		mode: 'fade',
		noOpenerFade: true,
		hoverDelay: 150,
		hideDelay: 350

	});


	/* =========================================================
	   MENÚ RESPONSIVE / HAMBURGUESA
	   ========================================================= */

	// Barra superior para dispositivos móviles.

	$(
		'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
	.appendTo($body);


	// Panel lateral de navegación.

	$(
		'<div id="navPanel">' +
			'<nav>' +
				$('#nav').navList() +
			'</nav>' +
		'</div>'
	)
	.appendTo($body)
	.panel({

		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $body,
		visibleClass: 'navPanel-visible'

	});


	/* =========================================================
	   FUNCIONALIDAD 1
	   SCROLL SUAVE ENTRE SECCIONES
	   ========================================================= */

	$('a[href^="#"]').on('click', function(event) {

		var destino = $(this.getAttribute('href'));

		if (destino.length) {

			event.preventDefault();

			$('html, body').animate({

				scrollTop: destino.offset().top - 20

			}, 700);

		}

	});


	/* =========================================================
	   FUNCIONALIDAD 2
	   BOTÓN VOLVER ARRIBA
	   ========================================================= */

	// Crear el botón automáticamente.

	var $botonArriba = $(
		'<button id="btn-arriba" ' +
		'title="Volver arriba" ' +
		'aria-label="Volver arriba">' +
		'<span class="icon solid fa-arrow-up"></span>' +
		'</button>'
	);


	// Agregarlo al body.

	$botonArriba.appendTo($body);


	// Al comenzar permanece oculto.

	$botonArriba.hide();


	// Mostrar u ocultar dependiendo del scroll.

	$window.on('scroll', function() {

		if ($window.scrollTop() > 400) {

			$botonArriba.fadeIn(300);

		} else {

			$botonArriba.fadeOut(300);

		}

	});


	// Al hacer clic vuelve al inicio.

	$botonArriba.on('click', function() {

		$('html, body').animate({

			scrollTop: 0

		}, 700);

	});


})(jQuery);