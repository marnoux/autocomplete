// Store module for books
export default {
	namespaced: true,
	state() {
		return {
			books: [
				{
					title: 'Don Quixote',
					author: 'Miguel De Cervantes'
				},
				{
					title: "Pilgrim's Progress",
					author: 'John Bunyan'
				},
				{
					title: 'Robinson Crusoe',
					author: 'Daniel Defoe'
				},
				{
					title: "Gulliver's Travels",
					author: 'Jonathan Swift'
				},
				{
					title: 'Tom Jones',
					author: 'Henry Fielding'
				},
				{
					title: 'Clarissa',
					author: 'Samuel Richardson'
				},
				{
					title: 'Tristram Shandy',
					author: 'Laurence Sterne'
				},
				{
					title: 'Tristan and Iseult',
					author: 'Gottfried von Strassburg'
				}
			]
		};
	},
	getters: {
		books(state) {
			return state.books;
		}
	}
};
