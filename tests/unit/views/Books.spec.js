import Books from "../../../src/views/Books.vue";
import { mount } from "@vue/test-utils";

describe("Home", () => {
  test("Exists", () => {
    // Arrange
    const wrapper = mount(Books);

    // Assert
    expect(wrapper.find("script").exists).toBe(true);
  });
});
