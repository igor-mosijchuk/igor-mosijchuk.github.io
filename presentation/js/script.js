const container = document.getElementById("myCarousel");

const options = {
	Dots: false
};

new Carousel(container, options, { Thumbs });

Fancybox.bind("[data-fancybox]", {
	Thumbs: {
		showOnStart: true,
	},

	Carousel: {
		transition: "classic"
	},

	slideShow: {
		autoStart: true,
		speed: 3000
	},
	keyboard: {
		Escape: null
	},
	dragToClose: false,
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

document.addEventListener("DOMContentLoaded", function () {

	const filename = window.location.pathname.split("/").pop().slice(0,-5);

	if (window.location.pathname.endsWith("/" + filename + ".html") && !window.location.hash) {
		window.location.hash = "#gallery-1";
	}
	if (window.location.pathname.endsWith("/presentation/") && !window.location.hash) {
		window.location.hash = ""+filename+".html#gallery-1";
	}

});
