export default {
	namespaced: true,
	state() {
		return {
			cities: [
				'san jose',
				'santiago',
				'san francisco',
				'santa rosa',
				'san juan',
				'sabadell',
				'salamanca',
				'salt lake city',
				'salinas',
				'salem',
				'sausalito',
				'taipei',
				'tel aviv',
				'tempe',
				'termez',
				'temuco',
				'tiajuna',
				'tieling',
				'thousand oaks',
				'thunder bay',
				'tokyo',
				'tulsa',
			],
		};
	},
	getters: {
		cities(state) {
			return state.cities;
		},
	},
};
