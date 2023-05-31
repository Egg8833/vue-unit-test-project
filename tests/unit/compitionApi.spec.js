import {describe, it, expect} from 'vitest'
import {mount, shallowMount} from '@vue/test-utils'
import hello from '../views/hello.vue'

describe('HelloWorld', () => {
  it(' btn test', async () => {
    const wrapper = mount(hello)
    console.log(wrapper.html())
    const btn = wrapper.find('[data-test="btn"]')
    const modal2 = wrapper.find('[data-test="modal"]')
    console.log('modal2', modal2)
    console.log('btn', btn)
    await btn.trigger('click')
    console.log(wrapper.html())

    const modal = wrapper.find('[data-test="modal"]')
    console.log('modal', modal)

    console.log('vm', wrapper.vm.count)
    console.log('vm', wrapper.vm.abc)
    expect(wrapper.find('[data-test="modal"]').isVisible()).toBe(true)
  })

  // it('renders properly2222', async () => {
  //   const wrapper = mountComposition(hello)
  //   // console.log(wrapper);
  //   console.log('count',wrapper.result.current);

  //    expect(wrapper.vm.count).toEqual(2)

  // })
})
