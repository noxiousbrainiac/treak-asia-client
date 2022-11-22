export const xBounceOptions = {
	offscreen: {
		x: -200,
		opacity: 0
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1
		}
	}
};

export const yOptions = {
	offscreen: {
		y: 50,
		opacity: 0
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1.5
		}
	}
};
