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

  it('模擬 input 輸入', async () => {
    const wrapper = shallowMount(FormSubmitter)
    await wrapper.find('[data-test="text"]').setValue('Hello, World!')
    expect(wrapper.find('[data-test="result_text"]').text()).toBe('Hello, World!')
})

  it('模擬 日期 輸入', async () => {
    const wrapper = shallowMount(FormSubmitter)
    const input = wrapper.find('[data-test="date"]')
    console.log('input',input);
    await wrapper.find('[data-test="date"]').setValue('2022/10/06')
    console.log('input',input.element)
    console.log('input',input.element.value)
    // expect(wrapper.find('[data-test="result_date"]').text()).toBe('2022/10/06')
})


});
