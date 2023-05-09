import {shallowMount} from '@vue/test-utils'
import ToDoList from '@/components/ToDoList'

describe('test ToDoList', () => {
 it('待完成列表初始值應該為空陣列', () => {
   const wrapper = shallowMount(ToDoList)
   expect(wrapper.vm.toDoList.length).toBe(0)
 })

 it('已完成列表初始值應該為空陣列', () => {
   const wrapper = shallowMount(ToDoList)
   expect(wrapper.vm.completedList).toEqual([])
 })
})
