import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";

describe("FormSubmitter", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
  });

  it("updates selected value when option is changed", async () => {
    const wrapper = shallowMount(FormSubmitter);

    // 使用 setValue 方法選擇新的選項
    const select = wrapper.find('select')

    await wrapper.find("select").setValue("option2");
    console.log(select.element.value)

    expect(wrapper.find('select').element.value).toBe('option2')


  });

});
