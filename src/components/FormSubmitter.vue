<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username>
      <input type="submit">

      <select id="mySelect">
        <option value="option1">選項 1</option>
        <option value="option2">選項 2</option>
        <option value="option3">選項 3</option>
      </select>

      <input v-model="textResult" type="text" data-test="text"/>
      <p data-test="result_text">{{textResult}}</p>
      <input v-model="dateResult" type="text" data-test="date"/>
      <p data-test="result_date">{{dateResult}}</p>


    </form>

    <div
      class="message"
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        username: '',
        submitted: false,
        textResult:'',
        dateResult:'2022/10/06',
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
  }
</script>