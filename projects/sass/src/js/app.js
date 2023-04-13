import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './modules/anchor-plugin.js';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll/index.js';

const ScrollbarOptions = {
	alwaysShowTracks: true,
	damping: 0.075,
	plugins: {
		overscroll: {
			disableScroll: {
				direction: 'x',
			},
			effect: "bounce",
			// effect: "glow",
			// glowColor: "rgba(0,0,0,.2)",
			enable: true,
			maxOverscroll: 200,
			damping: 0.175
		}
		// ,overscroll: true
	}
};


if (window.matchMedia("(min-width: 500px)").matches) {
	Scrollbar.use(OverscrollPlugin ,AnchorPlugin);

	Scrollbar.init(document.querySelector('.page-wrap'), ScrollbarOptions);

	document.querySelector('.scrollbar-thumb-y').insertAdjacentHTML("beforeend", `<div class="scrollbar-inner"></div>`);
}


projectFunctions.isWebp();