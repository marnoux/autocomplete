<template>
	<form v-on:submit.prevent="onSubmit">
		<div class="d-flex justify-content-center">
			<div class="form-group">
				<input
					v-model="city"
					ref="input"
					@input="filterCities"
					@focus="showListGroup = true"
					autocomplete="off"
					type="text"
					class="form-control"
					id="cityTextBox"
					placeholder="Enter at least 3 letters of the city you are looking for"
				/>
			</div>
		</div>
		<div v-if="noResults" class="d-flex justify-content-center">
			<div class="alert alert-danger" role="alert">
				No results matching the search keywords
			</div>
		</div>
		<div class="d-flex" v-if="filteredCities && showListGroup">
			<ul class="list-inline mx-auto justify-content-center">
				<li
					class="list-group-item"
					v-for="filteredCity in filteredCities"
					v-bind:key="filteredCity"
					@click="setCity(filteredCity)"
				>
					{{ filteredCity }}
				</li>
			</ul>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			city: '',
			filteredCities: [],
			showListGroup: false,
			noResults: false
		};
	},
	computed: {
		cities() {
			return this.$store.getters['cts/cities'];
		}
	},
	methods: {
		// Build new array by filtering Cities with user input
		filterCities() {
			this.noResults = false;

			if (this.city.length >= 3) {
				this.filteredCities = this.cities.filter(city => {
					return city.toLowerCase().startsWith(this.city.toLowerCase());
				});
				// Show the list group with the filtered cities
				this.showListGroup = true;

				// If nothing is returned, tell the user
				this.noResults = this.filteredCities.length == 0 ? true : false;
			} else {
				this.showListGroup = false;
			}
		},
		// Set the City variable when a list group item is clicked
		setCity(city) {
			this.city = city;
			this.showListGroup = false;
			this.capitalizeTheFirstLetterOfEachWord(city);
		},
		// Helper method to pretty up selected City
		capitalizeTheFirstLetterOfEachWord(words) {
			let separateWord = words.toLowerCase().split(' ');
			for (let i = 0; i < separateWord.length; i++) {
				separateWord[i] =
					separateWord[i].charAt(0).toUpperCase() +
					separateWord[i].substring(1);
			}
			this.city = separateWord.join(' ');
		},
		setFocus() {
			// Set focus on text box when component is loaded
			this.$refs.input.focus();
		}
	},
	created() {
		// Use nextTick to fire off setFocus function
		this.$nextTick(() => this.setFocus());
	}
};
</script>
