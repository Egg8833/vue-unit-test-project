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
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
  }
</script>