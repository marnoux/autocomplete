// Main store configuration
import { createStore } from 'vuex';

import booksModule from './modules/books.js';
import citiesModule from './modules/cities.js';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		bks: booksModule,
		cts: citiesModule
	}
});
