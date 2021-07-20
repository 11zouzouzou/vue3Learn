<template>
  <h2>孙子</h2>
  <h3>收到爷爷的信息</h3>
  <p>info:{{ userInfo.msg }}</p>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const userInfo = inject("childInfo");
    return {
      userInfo,
    };
  },
});
</script>
