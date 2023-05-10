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
    childWrapper.vm.$emit('my-event', 'Child Data')
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
      // 設置 ParentComponent 的 data 中的 parentData 為 'Parent Data'
      // data() {
      //   return {
      //     parentData: 'Parent Data',
      //   }
      // },
      propsData: {
        parentData: 'Parent Data',
      },
    })
    // 透過 findComponent 找到 ChildComponent 的 wrapper
    const childWrapper = wrapper.findComponent(ChildComponent)
    // 確認子組件的 myProp 是否為 'Parent Data'
    console.log(('props',childWrapper.props()))
    expect(childWrapper.props('myProp')).toBe('Parent Data')
  })
})