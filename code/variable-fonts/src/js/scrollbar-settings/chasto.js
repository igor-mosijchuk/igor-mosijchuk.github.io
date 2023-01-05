// chasto
export const ScrollbarOptions = {
	alwaysShowTracks: true,
	damping: 0.075,
	plugins: {
		overscroll: {
			disableScroll: {
				direction: 'x',
			},
			effect: "bounce",
			// effect: "glow",
			enable: true,
			maxOverscroll: 200,
			damping: 0.175
		}
	}
};