<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ color }}</p>
    <ul>
      <li>aaa</li>
      <li>bbb</li>
      <li>GGG</li>
    </ul>
    <div data-test="target">dataset</div>
    <button @click="add" id="btn">button</button>
    <input type="text" v-model="count">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    color: String
  },data() {
    return {
      book:'this is a book',
      count:1,
    }
  },methods: {
    add(){
      this.count +=1
      console.log('test');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
