import {shallowMount} from '@vue/test-utils'
import InputAndComputed from '@/components/InputComputed.vue'

describe('input.vue ', () => {
   const minLength = 6
   let wrapper
   beforeEach(() => {
     wrapper = shallowMount(InputAndComputed, {
       propsData: {
         minLength,
       },
     })

   })
    // Case 1: 密碼在大於或等於最短長度限制時，不會出現錯誤訊息。
  test(`not renders an error if length is more than or equal to ${minLength}`, async () => {
    await wrapper.get('[data-test="password"]').setValue('123456')
    console.log('isError',wrapper.vm.isError);

    expect(wrapper.find('[data-test="errorMsg"]').exists()).toBe(false)
  })

  // Case 2: 密碼少於最短長度限制時，出現錯誤訊息。
  test(`renders an error if length is less than ${minLength}`, async () => {
    await wrapper.get('[data-test="password"]').setValue('12345')
    console.log('contain',wrapper.html())

    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })

  // Case 3: 當 showError 為 false 時，不顯示錯誤訊息。
  test('not renders an error if showError is false ', async () => {

    await wrapper.get('[data-test="password"]').setValue('12345')

    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)

    await wrapper.setProps({ showError: false })

    expect(wrapper.find('[data-test="errorMsg"]').exists()).toBe(false)
  })
})



