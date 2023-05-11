<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Hello World</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" color="red"/>
    <HelloTest name="Jack" greeting="gg"/>
    <MessageW msg="Hello Friends" />
    <TodoApp />
    <VueT/>
    <TodoList />
    <InputAndComputed minLength="6" />
    <FormSubmitter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloTest from './components/HelloTest.vue'
import MessageW from '@/components/MessageW.vue'
import TodoApp from '@/components/TodoApp.vue'
import TodoList from '@/components/TodoList.vue'
// import FormTest from './components/FormTest.vue';
import VueT from '@/components/VueT.vue'
import InputAndComputed from '@/components/InputComputed.vue'
import FormSubmitter from '@/components/FormSubmitter.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MessageW,
    TodoApp,
    VueT,HelloTest,TodoList,InputAndComputed,FormSubmitter

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
