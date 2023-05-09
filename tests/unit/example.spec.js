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
    // console.log("book", book);
    wrapper.setData({ book: "no reading" });
    const btn = wrapper.find("#btn");

    btn.trigger("click");
    btn.trigger("click");
    const count = wrapper.vm.count;
    // console.log("count", wrapper.vm.count);
    expect(count).toBe(3);
    expect(wrapper.find('[data-test="target"]').text()).toBe("dataset");

    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="hello">
        <h1></h1>
        <p></p>
        <ul>
          <li>aaa</li>
          <li>bbb</li>
          <li>GGG</li>
        </ul>
        <div data-test="target">dataset</div> <button id="btn">button</button> <input type="text">
      </div>
    `);
  });
});

describe("input test", () => {
  it("input value", () => {
    const wrapper = shallowMount(HelloWorld);
    const textInput = wrapper.find('input[type="text"]');
    console.log("input1", textInput.element.value);
    textInput.setValue("some value");
    console.log("input2", textInput.element.value);
  });
});
