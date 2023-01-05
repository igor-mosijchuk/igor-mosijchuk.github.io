import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './modules/anchor-plugin.js';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll/index.js';
import { ScrollbarOptions } from './scrollbar-settings/components-template.js';
// import { ScrollbarOptions } from './scrollbar-settings/smarthunter.js';
if (window.matchMedia("(min-width: 900px)").matches) {
	Scrollbar.use(OverscrollPlugin, AnchorPlugin);
	Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);
	document.querySelector('.scrollbar-thumb-y').insertAdjacentHTML("beforeend", `<div class="scrollbar-inner"></div>`);
}
let mybutton = document.getElementById("topBtn");
let scrollbar = Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);

mybutton.onclick = function () { topFunction() };
function topFunction() {
	scrollbar.scrollTo(0, 0, 300, function (scrollbar) { });
}

scrollbar.addListener((status) => {
	scrollbar.scrollTop
})

// scrollbar.scrollTop = 500;
// let abc = 0;

// scrollbar.scrollTop.addEventListener()

// mybutton.addEventListener(
// 	if( > 500) {}
// )

// abc = 500;

// scrollbar.addListener(scrollbar)

// {
	// if (abc > 0) {
		// mybutton.style.opacity = "0.5";
	// } else {
		// mybutton.style.opacity = "1";
	// }
// }

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		mybutton.style.display = "block";
// 	} else {
// 		mybutton.style.display = "none";
// 	}
// }

// const scrollContent = document.querySelector('.scroll-content')
// const scrollContent = document.querySelector('.scroll-content')

// if (scrollContent.style.transform === " translate3d(0px, 0px, 0px);") {
// 	document.querySelector('#topBtn').style.cssText = `
// 		background: green;
// 		color: yellow;
// 	`
// }

// scrollContent.onscroll = function () { scrollFunction() };

// if (scrollbar.scrollTo = 0) {
// 	mybutton.style.opacity = "0.5";
// 	// mybutton.style.display = "block";
// } else {
// 	// mybutton.style.display = "none";
// 	mybutton.style.opacity = "1";
// }