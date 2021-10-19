import Home from "../../../src/views/Home.vue";
import { mount } from "@vue/test-utils";

describe("Home", () => {
  test("Exists", () => {
    // Arrange
    const wrapper = mount(Home);

    // Assert
    expect(wrapper.find("h2").text()).toBe(
      "Click on Books or Cities to get started"
    );
  });
});
