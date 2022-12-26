import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './modules/anchor-plugin.js';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll/index.js';
import { ScrollbarOptions } from './scrollbar-settings/smarthunter.js';


if (window.matchMedia("(min-width: 900px)").matches) {
	Scrollbar.use(OverscrollPlugin, AnchorPlugin);
	Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);
	document.querySelector('.scrollbar-thumb-y').insertAdjacentHTML("beforeend", `<div class="scrollbar-inner"></div>`);
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
function topFunction() {
	let scrollbar = Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);
	scrollbar.scrollTo(0, 0, 300, function (scrollbar) {});
}
document.getElementById("myBtn").onclick = function () { topFunction() };