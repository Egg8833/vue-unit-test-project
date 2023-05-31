
<template>
<h2>abc test</h2>
<p>{{ count }}</p>
<span>{{ abc.name }}</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint, recusandae impedit necessitatibus quidem harum cum magnam, ipsum neque earum dicta velit animi. Dolorem accusantium delectus quae debitis ipsa sed.</p>

<btn @click="btnY" name="請按我" data-test="btn"></btn>

<div v-if="test" data-test="modal" >
  <p>abc</p>
</div>
</template>


<script setup>
import {ref }from 'vue'
import btn from '@/components/Btn.vue'
import { reactive } from 'vue'
const test =ref(false)

const count =ref(1)
const btnY =()=>{
  test.value =true
  count.value++
}
const abc =reactive({
  name:'jack',
  money:10000
})
</script>


<style>

</style>

