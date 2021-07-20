<template>
  <h2>路由测试</h2>
  <button @click="gotoRouterUserId()">跳转userid:{{ userId }}</button>
  <button @click="gotoRouterTypeId()">跳转typeid:{{ typeId }}</button>
  <button @click="gotoRouter404()">跳转typeid404</button>
  <button @click="gotoRouterNum()">跳转num:0</button>
  <button @click="gotoRedirect()">重定向</button>
  <button @click="gotoAlias()">别名</button>
  <!-- 多级路由 -->
  <router-view name="nestView" />
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RouterTest",
  setup() {
    //data,VUE3写法,转为响应式数据
    const userInfo = reactive({
      userId: "zou1",
      typeId: "lei1",
    });
    // 定义一个新的对象，它本身不具备响应性，但是它的字段全部是ref变量
    const userInfoRefs = toRefs(userInfo);

    const route = useRoute();
    console.log("VUE3Route", route);
    const router = useRouter();
    return {
      ...userInfoRefs,
      gotoRouterUserId() {
        router.push("/routerUser/" + userInfo.userId);
      },
      gotoRouterTypeId() {
        router.push("/routerUser/" + userInfo.typeId);
      },
      gotoRouterNum() {
        router.push("/routerUser/" + 0);
      },
      gotoRouter404() {
        router.push("/tt/ttt");
      },
      gotoRedirect() {
        router.push("/_routerUserr");
      },
      gotoAlias() {
        router.push("/_r");
      },
    };
  },
  // data() {
  //   return {
  //     userId: "zou1",
  //     typeId: "lei1",
  //   };
  // },
  // methods: {
  //   gotoRouterUserId() {
  //     this.$router.push("/routerUser/" + this.userId);
  //   },
  //   gotoRouterTypeId() {
  //     this.$router.push("/routerUser/" + this.typeId);
  //   },
  //   gotoRouterNum() {
  //     this.$router.push("/routerUser/" + 0);
  //   },
  //   gotoRouter404() {
  //     this.$router.push("/tt/ttt");
  //   },
  //   gotoRedirect() {
  //     this.$router.push("/_routerUserr");
  //   },
  //   gotoAlias() {
  //     this.$router.push("/_r");
  //   },F
});
</script>
