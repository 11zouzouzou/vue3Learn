<template>
  <h2>兄弟</h2>
</template>
<script lang="ts">
import { defineComponent, inject, reactive } from "vue";
import bus from "@/eventBus/index";
export default defineComponent({
  name: "Brother",
  setup() {
    const info = reactive({ msg: "" });
    setTimeout(() => {
      bus.emit("sayHi", "busInfo");
    }, 2000);
    return {
      ...info,
    };
  },
});
</script>
