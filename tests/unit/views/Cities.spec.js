import Cities from "@/views/Cities.vue";
import { mount } from "@vue/test-utils";

describe("TheNavbar", () => {
  test("Component Render Exists", () => {
    // Arrange
    const wrapper = mount(Cities);

    // Assert
    expect(wrapper.find("cities").exists).toBeTruthy();
  });
});
