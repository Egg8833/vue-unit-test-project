<script setup>
import { reactive,defineEmits } from 'vue'

const emit=defineEmits(['submit'])
    const form = reactive({
      email: '',
      description: '',
      city: '',
      subscribe: false,
      interval: ''
    })

    const submit = () => {
      emit('submit', form)
    }

</script>

<template>
    <form data-test="form" @submit.prevent="submit">

      <input data-test="email" type="email" v-model="form.email" />

      <textarea data-test="description" v-model="form.description" />

      <select data-test="city" v-model="form.city">
        <option value="taipei">Taipei</option>
        <option value="tainan">Tainan</option>
      </select>

      <input data-test="subscribe" type="checkbox" v-model="form.subscribe" />

      <input data-test="interval.weekly" type="radio" value="weekly" v-model="form.interval" />
      <input data-test="interval.monthly" type="radio" value="monthly" v-model="form.interval" />

      <button type="submit">Submit</button>
    </form>
</template>



