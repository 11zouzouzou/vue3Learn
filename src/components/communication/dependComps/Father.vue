<template>
 <h3>父组件的信息</h3>
  <p>用户id：{{ id }}</p>
  <p>用户名：{{ name }}</p>
  <h3>父组件注入的更新方法</h3>
  <p>年龄：{{ age }}</p>
<!-- child 无class prop -->
  <Child
    class="child" 
    title="用户信息"
    :index="1"
    :uid="id"
    :user-name="name"
    :age="age"
     @update-age="updateAge"
  />
</template>
<script lang="ts">
import { defineComponent,ToRefs,toRefs,ref,reactive } from 'vue'
import Child from './Child.vue'

interface Member {
  id: number,
  name: string,
   age: number
};

export default defineComponent({
  // 需要启用子组件作为模板
  components: {
    Child
  },

  // 定义一些数据并return给template用
  setup () {
    const userInfo: Member = reactive({
      id: 1,
      name: 'zou',
      age: 0
    });
    const userInfoRefs = toRefs(userInfo);

    // 定义一个更新年龄的方法
    const updateAge = (age: number): void => {
      //子组件调用，更新，父组件监听更新
      userInfo.age = age;
      console.log('更新年龄');
    }

    return {
      ...userInfoRefs,

      // return给template用
      updateAge
    }
  }
})
</script>

