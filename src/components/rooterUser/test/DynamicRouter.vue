<template>
  <!-- 动态产生 -->
  <div>dynamicMessageRouterId:{{ id }}</div>
  <!--组件将会复用不会走 created -->
  <button @click="gotoRouterTypeId">再次跳转typeId:lei2</button>
  <button @click="gotoRouterUserId">再次跳转userId:zou2</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DynamicRouter",
  setup() {},
  props:['id'],
  created() {
    console.log("动态组件创建");
    //监听跳转func1
    this.$watch(
      () => this.$route.params,
      (toParams: any, previousParams: any) => {
        // 对路由变化做出响应...
        console.log(toParams, previousParams);
        console.log("跳转变化");
      }
    );
  },
  //跳转之前监听
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    console.log(to, from);
    console.log("跳转即将变化");
  },
  methods: {
    gotoRouterTypeId() {
      this.$router.push("/routerUser/" + "lei2");
    },
    gotoRouterUserId() {
      this.$router.push("/routerUser/" + "zou2");
    },
  },
});
</script>

