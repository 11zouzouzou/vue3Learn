<template>
  <h2>孙子</h2>
  <h3>收到爷爷的信息</h3>
  <p>info:{{ userInfo.msg }}</p>
  <p>brother:{{ borthInfo.msg }}</p>
</template>
<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, reactive } from "vue";
import bus from "@/eventBus/index";

export default defineComponent({
  setup() {
    const userInfo = inject("childInfo");
    const borthInfo = reactive({ msg: "static" });
    //bus
    const sayHi: any = (msg: string = "Hello bus!"): string => {
      console.log(msg);
      borthInfo.msg = msg;
      return msg;
    };
    bus.on("sayHi", sayHi);
    onBeforeUnmount(() => {
      bus.off("sayHi", sayHi);
    });
    return {
      userInfo,
      borthInfo,
    };
  },
});
</script>
