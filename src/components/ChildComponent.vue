<!-- ChildComponent.vue -->
<template>
  <button @click="triggerEvent">Emit Event</button>
</template>

<script>
export default {
  name: "ChildComponent",
  methods: {
    triggerEvent() {
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
