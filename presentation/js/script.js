document.addEventListener("DOMContentLoaded", function () {

	const firstHash = "#gallery-1";
	const filename = window.location.pathname.split("/").pop().slice(0, -5);

	if (window.location.pathname.endsWith("/" + filename + ".html") && !window.location.hash) {
		window.location.hash = firstHash;
	}

	if (window.location.pathname.endsWith("/presentation/") && !window.location.hash) {
		window.location.hash = "" + filename + ".html" + firstHash;
	}


	const heading = document.querySelector('.main-cont .heading')
	const h = heading.querySelector('h1')
	const p = heading.querySelector('p')

	const container = document.getElementById("myCarousel");

	const options = {
		Dots: false
	};

	new Carousel(container, options, { Thumbs });

	Fancybox.bind("[data-fancybox]", {


		Toolbar: {

			// items: {
			// 	customContent: {
			// 		class: "fancybox__custom-content",
			// 		render: () => {
			// 			const th = document.querySelector('.fancybox__toolbar__column.is-middle')
			// 			// console.log(th)
			// 			th.appendChild(h,p)
			// 			return `<h3>11212</h3><p>${p}</p>`;
			// 			// return `<h3>${h}</h3><p>${p}</p>`;
			// 		}
			// 	}
			// },


			display: {
				// middle: ["zoomIn","customContent"],
				// middle: ["slideshow"],

				left: ["infobar"],
				middle: [
					"zoomIn",
					"zoomOut",
					"toggle1to1",
					"rotateCCW",
					"rotateCW",
					"flipX",
					"flipY",
				],
				right: ["fullscreen", "slideshow", "thumbs"]
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
			transition: "classic"
		},

		keyboard: {
			Escape: null
		},
		dragToClose: false,

		Toolbar: {

			items: {
				customContent: {
					class: "fancybox__custom-content",
					render: (fancybox, slide) => {
						const h = "Заголовок";
						const p = "Опис слайда";
						return `
					  <h3>${h}</h3>
					  <p>${p}</p>
					`;
					}
				}
			},

			middle: ["customContent"],
			display: {
				right: ["fullscreen", "slideshow", "thumbs"],
			},
		},

	});


	const carousel = document.getElementById('myCarousel');

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