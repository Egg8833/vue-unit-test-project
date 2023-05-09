
import FormTest from '@/components/FormTest.vue'

test.skip('fill up form', async () => {
  const wrapper = mount(FormTest)

  const email = 'name@mail.com'
  const description = 'Lorem ipsum dolor sit amet'
  const city = 'taipei'
  const subscribe = true

  await wrapper.get('[data-test="email"]').setValue(email)
  await wrapper.get('[data-test="description"]').setValue(description)
  await wrapper.get('[data-test="city"]').setValue(city)
  await wrapper.get('[data-test="subscribe"]').setValue()
  await wrapper.get('[data-test="interval.weekly"]').setValue()

  expect(wrapper.vm.form).toEqual({
    email,
    description,
    city,
    subscribe,
    interval: 'weekly',
  })
})
