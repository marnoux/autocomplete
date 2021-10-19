import Books from "../../../src/components/Cities.vue";
import { shallowWithIntl } from "@vue/test-utils";

describe("Home", () => {
  it("click does something", async () => {
    const wrapper = shallowWithIntl(<Books />);
    const input = wrapper.dive().find("input"); //Not finding the button
    const instance = wrapper.dive().instance();
    const spy = jest.spyOn(instance, "filterBooks");
    instance.filterBooks();
  });

});
