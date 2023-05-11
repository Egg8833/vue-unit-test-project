import {shallowMount} from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ParentComponent', () => {
  // 第一個測試: 子組件觸發事件更新父組件資料
  it('receives child event and updates parent data', async () => {
    // shallowMount 是渲染組件的方法，ChildComponent使用stubs取代
    const wrapper = shallowMount(ParentComponent, {
      stubs: {
        ChildComponent: true,
      },
    })
    // 透過 findComponent 找到 ChildComponent 的 wrapper
    const childWrapper = wrapper.findComponent(ChildComponent)
    // 使用 childWrapper 觸發 'my-event' 事件，並且傳遞 'Child Data' 給父組件

    // 模擬一個emit事件，發送過去。
    childWrapper.vm.$emit('my-event', 'Child Data')

    // 用組件的emitEvent()事件發送過去。在shallowMount下的stubs:{ChildComponent:ChildComponent}，不得為stubs: {ChildComponent: true,} true的話，就會變成假的組件，內容並不會渲染。
    // childWrapper.vm.emitEvent()

    // 由於 $emit 是非同步的，需要使用 $nextTick() 確保更新完成
    await wrapper.vm.$nextTick()
    // 確認更新後的資料是否如預期，即 ParentComponent 的 p 標籤中的文字為 'Child Data'
    expect(wrapper.find('p').text()).toBe('Child Data')
  })

  // 第二個測試: 父組件將資料傳遞給子組件
  it('passes parent data as prop to child component', () => {
    // shallowMount 是渲染組件的方法，ChildComponent使用stubs取代
    const wrapper = shallowMount(ParentComponent, {
      stubs: {
        ChildComponent: true,
      },
      data() {
        return {
          parentData: 'Parent Data',
        }
      },
    })

    const childWrapper = wrapper.findComponent(ChildComponent)
    // 確認子組件的 myProp 是否為 'Parent Data'
    expect(childWrapper.props('myProp')).toBe('Parent Data')
  })
})

describe('ChildComponent', () => {
  it("emited 'my-event' when button is clicked", () => {
    const wrapper = shallowMount(ChildComponent, {
      propsData: {
        myProp: 'Parent Data',
      },
    })
    wrapper.find('button').trigger('click')
    console.log(wrapper.emitted('my-event'))
    expect(wrapper.emitted()).toHaveProperty('my-event')
    expect(wrapper.emitted('my-event')).toBeTruthy()
    expect(wrapper.emitted('my-event').length).toBe(1)
    expect(wrapper.emitted('my-event')[0]).toEqual(['Child Data','Name'])
    expect(wrapper.emitted('my-event')[0][0]).toEqual('Child Data')
    expect(wrapper.emitted('my-event')[0][1]).toEqual('Name')
  })
})

