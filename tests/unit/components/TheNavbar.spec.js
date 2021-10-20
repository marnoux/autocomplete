import TheNavbar from "@/components/nav/TheNavbar.vue";
import { mount } from "@vue/test-utils";

describe("TheNavbar", () => {
  test("Books Exists", () => {
    // Arrange
    const wrapper = mount(TheNavbar);

    // Assert
    expect(wrapper.find("router-link").text()).toContain("Books");
  });

  test("Cities Exists", () => {
    // Arrange
    const wrapper = mount(TheNavbar);

    // Assert
    expect(wrapper.text()).toContain("Cities");
  });
});
