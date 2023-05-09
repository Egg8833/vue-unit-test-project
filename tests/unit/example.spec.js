import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    // const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        color: "red",
      },
    });
    console.log(wrapper.props());
    expect(wrapper.props().color).toBe("red");
  });
});

describe("data-set ", () => {
  it("renders data-set when passed", async () => {
    // const msg = 'new message'
    const wrapper = shallowMount(HelloWorld);
    const text = wrapper.find('[data-test="target"]').html();
    console.log("text", text);
    const book = wrapper.vm.book;
    console.log("book", book);
    wrapper.setData({ book: "no reading" });
    const book2 = wrapper.vm.book;
    console.log("book2", book2);
    const btn = wrapper.find("#btn");
    console.log('btn',btn.element);
    btn.trigger("click");
    btn.trigger("click");
    const count = wrapper.vm.count
    console.log("count", wrapper.vm.count);
    expect(count).toBe(3)
    expect(wrapper.find('[data-test="target"]').text()).toBe("dataset");

    expect(wrapper.html()).toMatchInlineSnapshot();
  });
});
