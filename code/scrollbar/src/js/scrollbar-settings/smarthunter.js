// smarthunter
export const ScrollbarOptions = {
	alwaysShowTracks: true,
	damping: 0.075,
	plugins: {
		overscroll: {
			disableScroll: {
				direction: 'x',
			},
			// effect: "bounce",
			effect: "glow",
			glowColor: "rgba(0,0,0,.2)",
			enable: true,
			maxOverscroll: 200,
			damping: 0.175
		}
	}
};