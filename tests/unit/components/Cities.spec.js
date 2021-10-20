import { mount } from '@vue/test-utils';
import Cities from '@/components/Cities.vue';

describe('Cities.vue', () => {
	test('Crucial method exists - filterBooks', () => {
		// Arrange
		const wrapper = mount(Cities);

		// Act
		const instance = wrapper.vm;
		const filterCities = instance.filterCities;

		// Assert
		if (filterCities != undefined) {
			// Pass test
			expect(true).toBe(true);
		} else {
			// Fail test
			expect(true).toBe(false);
		}
	});

	test('Crucial method exists - setBook', () => {
		// Arrange
		const wrapper = mount(Cities);

		// Act
		const instance = wrapper.vm;
		const setCity = instance.setCity;

		// Assert
		if (setCity != undefined) {
			// Pass test
			expect(true).toBe(true);
		} else {
			// Fail test
			expect(true).toBe(false);
		}
	});

	test('Crucial method exists - setBook', () => {
		// Arrange
		const wrapper = mount(Cities);

		// Act
		const instance = wrapper.vm;
		const helperMethod = instance.capitalizeTheFirstLetterOfEachWord;

		// Assert
		if (helperMethod != undefined) {
			// Pass test
			expect(true).toBe(true);
		} else {
			// Fail test
			expect(true).toBe(false);
		}
	});
});
