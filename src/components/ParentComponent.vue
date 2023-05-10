<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :my-prop="parentData" @my-event="handleChildEvent" />
    <p>{{ parentData }}</p>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentData: "Parent Data",
    };
  },
  methods: {
    handleChildEvent(childData) {
      this.parentData = childData;
    },
  },
};
</script>
