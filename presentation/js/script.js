document.addEventListener('DOMContentLoaded', function () {

	const carousel = document.getElementById('presentation');

	const [h, p] = ['h1', 'p']
		.map(tag => document.querySelector(`.main-cont .heading ${tag}`)?.textContent || '');

	const firstHash = '#gallery-1';
	const filename = window.location.pathname.split('/').pop().slice(0, -5);

	if (window.location.pathname.endsWith('/' + filename + '.html') && !window.location.hash) {
		window.location.hash = firstHash;
	}

	if (window.location.pathname.endsWith('/presentation/') && !window.location.hash) {
		window.location.hash = '' + filename + '.html' + firstHash;
	}





	const options = {
		Dots: false
	};

	new Carousel(carousel, options, { Thumbs });



	Fancybox.bind('[data-fancybox]', {
		width: 1280,
		height: 720,
		Toolbar: {
			items: {
				heading: {
					tpl: `<div class="title"><h3>${h}</h3><p>${p}</p></div>`,
				}
			},

			display: {
				left: ['heading'],
				middle: ['infobar'],
				right: ['thumbs', 'slideshow', 'fullscreen']
			}
		},

		Slideshow: {
			autoStart: true,
			timeout: 1800,
		},
		Thumbs: {
			showOnStart: true,
		},

		Carousel: {
			transition: 'classic'
		},

		keyboard: {
			Escape: null
		},

		dragToClose: false,

	});



	const pad = (num, size) => num.toString().padStart(size, '0');

	for (let i = 1; i <= slides.count; i++) {
		const filename = pad(i, slides.digits);
		const fullPath = `${slides.path}${filename}.jpg`;

		const slide = document.createElement('div');
		slide.className = 'f-carousel__slide';
		slide.setAttribute('data-thumb-src', fullPath);

		slide.innerHTML = `<a href="${fullPath}" data-fancybox="gallery"><img width="100%" height="100%" alt data-lazy-src="${fullPath}" /></a>`;

		carousel.appendChild(slide);
	}


});