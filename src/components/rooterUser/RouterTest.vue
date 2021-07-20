<template>
  <h2>路由测试</h2>
  <button @click="gotoRouterUserId()">跳转userid:{{ userId }}</button>
  <button @click="gotoRouterTypeId()">跳转typeid:{{ typeId }}</button>
  <button @click="gotoRouter404()">跳转typeid404</button>
   <button @click="gotoRouterNum()">跳转num:0</button>
   <!-- 多级路由 -->
  <router-view name='nestView'/>
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
    gotoRouterUserId() {
      this.$router.push("/routerUser/" + this.userId);
    },
    gotoRouterTypeId() {
      this.$router.push("/routerUser/" + this.typeId);
    },
    gotoRouterNum() {
      this.$router.push("/routerUser/" + 0);
    },
    gotoRouter404() {
      this.$router.push("/tt/ttt");
    },
  },
});
</script>
