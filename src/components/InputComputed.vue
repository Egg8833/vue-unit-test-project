
<template>
  <div>
    <input type="text" data-test="password" v-model="password">
    <p v-if="showError && isError" data-test="errorMsg">Password must be at least {{minLength}} characters.</p>

    isError：{{ isError }}
    showError：{{ showError }}

  </div>

</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    minLength: {
      type: Number,
      required: true,
    },
    showError: {
      type: Boolean,
      default:true

    }
  },
  data() {
    return {
      password:'',
    }
  },
  computed:{
    isError(){
      return this.password.length < this.minLength
    },
  },


};
</script>
