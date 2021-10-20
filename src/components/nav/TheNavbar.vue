<template>
	<div id="nav">
		<router-link to="/books" name="books">Books</router-link>
		<span>|</span>
		<router-link to="/cities" name="cities">Cities</router-link>
	</div>
</template>

<style scoped>
#nav {
	padding: 30px;
	letter-spacing: 5px;
}

#nav a {
	font-size: 4.8ch;
	font-weight: bold;
	color: #eeeeeea1;
}

#nav a.router-link-exact-active {
	font-size: 5ch;
	font-weight: bolder;
	color: #0364bf;
}

span {
	font-size: 39px;
	padding: 10px;
}
</style>
