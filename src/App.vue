<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <declarativeRender msg="父组件传递子组件参数" />
  <div>
    <!-- 循环生成CompoinentListBuild组件 -->
    <ol>
      <CompoinentListBuild
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></CompoinentListBuild>
    </ol>
  </div>
  <ClassStyleRender class="parentClass"></ClassStyleRender>
  <RouterUser />
  <div>
    <h2><router-link to="/communication">通信测试</router-link></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
import DeclarativeRender from "./components/base/DeclarativeRender.vue";
import CompoinentListBuild from "./components/base/CompoinentListBuild.vue";
import ClassStyleRender from "./components/base/ClassStyleRender.vue";
import RouterUser from "./components/rooterUser/RouterUser.vue";

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld
    DeclarativeRender,
    CompoinentListBuild,
    ClassStyleRender,
    RouterUser,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.parentClass {
  color: cornflowerblue;
}
</style>
