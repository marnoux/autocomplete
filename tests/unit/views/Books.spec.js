import Books from "@/views/Books.vue";
import { mount } from "@vue/test-utils";

describe("TheNavbar", () => {
  test("Component Render Exists", () => {
    // Arrange
    const wrapper = mount(Books);

    // Assert
    expect(wrapper.find("books").exists).toBeTruthy();
  });
});
