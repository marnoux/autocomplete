import { mount } from "@vue/test-utils";
import Books from "@/components/Books.vue";

describe("Books.vue", () => {
  test("Crucial method exists - filterBooks", () => {
    // Arrange
    const wrapper = mount(Books);

    // Act
    const instance = wrapper.vm;
    const filterBooks = instance.filterBooks;

    // Assert
    if (filterBooks != undefined) {
      // Pass test
      expect(true).toBe(true);
    } else {
      // Fail test
      expect(true).toBe(false);
    }
  });

  test("Crucial method exists - setBook", () => {
    // Arrange
    const wrapper = mount(Books);

    // Act
    const instance = wrapper.vm;
    const setBook = instance.setBook;

    // Assert
    if (setBook != undefined) {
      // Pass test
      expect(true).toBe(true);
    } else {
      // Fail test
      expect(true).toBe(false);
    }
  });
});
