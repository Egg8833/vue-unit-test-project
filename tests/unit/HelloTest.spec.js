import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloTest.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: 'Hello',
        name: 'John',
      },
    })
    // console.log('wrapper',wrapper.html());
    // console.log('wrapper',wrapper.text());
    // console.log('data',wrapper.vm.$data.text);
    // console.log('text',wrapper.vm.text);
    expect(wrapper.text()).toContain('Hello John')
  })
})
