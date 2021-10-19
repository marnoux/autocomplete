<template>
	<the-navbar></the-navbar>
	<router-view />
</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue';

export default {
	components: {
		TheNavbar,
	},
};
</script>

<style>
/* Global Styles */
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');

* {
	background-color: #212121;
	color: rgba(238, 238, 238, 0.897);
	font-family: 'Titillium Web', sans-serif;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

h3 {
	margin: 40px 0 0;
}

h2 {
	font-size: 5ch;
	font-weight: bolder;
	color: #0364bf;
}

input {
	text-align: center;
	width: 31.2rem !important;
}

li {
	margin: 0 100px;
	border-style: solid;
	border-color: rgba(192, 192, 192, 0.212);
	cursor: pointer;
}

ul {
	list-style-type: none;
	padding: 0;
}
</style>
