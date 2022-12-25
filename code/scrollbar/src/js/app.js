import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './modules/anchor-plugin.js';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll/index.js';
import { ScrollbarOptions } from './scrollbar-settings/smarthunter.js';

if (window.matchMedia("(min-width: 500px)").matches) {
	Scrollbar.use(OverscrollPlugin ,AnchorPlugin);

	Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);

	document.querySelector('.scrollbar-thumb-y').insertAdjacentHTML("beforeend", `<div class="scrollbar-inner"></div>`);
}

