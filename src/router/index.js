import { createRouter, createWebHashHistory } from 'vue-router';
import Books from '../views/Books.vue';
import Cities from '../views/Cities.vue';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/:pathMatch(.*)*', //All other urls lead here
		name: 'Home',
		component: Home,
	},
	{
		path: '/books',
		name: 'Books',
		component: Books,
	},
	{
		path: '/cities',
		name: 'Cities',
		component: Cities,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
