<template>
  <!-- 动态产生 -->
  <!-- <div>dynamicMessageRouterNum:{{ $route.params.id }}</div> -->
   <div>dynamicMessageRouterNum:{{ id }}</div>
  <!--组件将会复用不会走 created -->
  <button @click="gotoRouterTypeId">再次跳转typeNum:1</button>
  <button @click="gotoRouterUserId">再次跳转userNum:2</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DynamicNumRouter",
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
      this.$router.push("/routerUser/" + 1);
    },
    gotoRouterUserId() {
      this.$router.push("/routerUser/" + 2);
    },
  },
});
</script>

