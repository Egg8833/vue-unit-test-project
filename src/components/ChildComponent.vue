<!-- ChildComponent.vue -->
<template>

  <button @click="emitEvent">Click me</button>
</template>

<script>
export default {
  name: "ChildComponent",
  methods: {
    triggerEvent() {
      this.$emit("my-event", "Child Data");
    },
    emitEvent() {
      this.$emit("my-event", "Child Data");
    },
  },
  props: {
    myProp: {
      type: String,
      required: true,
    },
  },
};
</script>
