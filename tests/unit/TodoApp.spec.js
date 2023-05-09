import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue"

describe('TodoApp.vue ',()=>{
  it('renders props.msg when passed',()=>{
      const wrapper =mount(TodoApp)

      expect(wrapper.text()).toContain("Learn vue")
  })
})