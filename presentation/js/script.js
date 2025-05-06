document.addEventListener('DOMContentLoaded', function () {

	const carousel = document.getElementById('presentation');

	const ratio1 = "16x9";
	const ratio2 = "4x3";

	const sizes = {
		"16x9": [1440, 810],
		"4x3": [1116, 837]
	};

	const [width, height] = sizes[slides.ratio] || [0, 0];
	// console.log(width, height);


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

		idle: false, // ← Вимикає автоприховування UI

		width: width, // ← 1280 / 1200
		height: height, // ← 720 / 900
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