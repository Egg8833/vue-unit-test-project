<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <h1>{{ name }}</h1>
    <button>ABC按鈕</button>
    <button>Caa按鈕</button>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>GG</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: String,
    msg: String,
  },
  data() {
    return {
      text:'this is a book',
      abc:'this is good',
      man:"apple can eat"
    }
  },
  methods: {
    handleClick() {
      console.log("Button clicked");
    },
  },
};
</script>