<template>
  <h2>路由测试</h2>
  <button @click="gotoRouterUserId()">跳转userid:{{ userId }}</button>
  <button @click="gotoRouterTypeId()">跳转typeid:{{ typeId }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouterTest",
  data() {
    return {
      userId: "zou1",
      typeId: "lei1",
    };
  },
  methods: {
    gotoRouterUserId(id: string) {
      this.$router.push("/routerUser/" + this.userId);
    },
     gotoRouterTypeId(id: string) {
      this.$router.push("/routerUser/" + this.typeId);
    },
  },
});
</script>
