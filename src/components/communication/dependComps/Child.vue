<template>
  <h3>收到父组件的信息</h3>
  <p>标题：{{ title }}</p>
  <p>索引：{{ index }}</p>
  <p>用户id：{{ uid }}</p>
  <p>用户名：{{ userName }}</p>
  <h3>父组件注入的更新方法</h3>
  <p>年龄：{{ age }}</p>
  <Childs />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Childs from "./ChildChild.vue";

export default defineComponent({
  components: {
    Childs,
  },
  inheritAttrs: false, //屏蔽自定义属性
  props: {
    // 可选，并提供默认值
    title: {
      type: String,
      required: false,
      default: "默认标题",
    },

    // 默认可选，单类型
    index: Number,

    // 添加一些自定义校验
    userName: {
      type: String,

      // 在这里校验用户名必须至少3个字
      validator: (v) => (v as string).length >= 3,
    },

    // 默认可选，但允许多种类型
    uid: [Number, String],
    age: Number,
  },
  emits: {
    //接收父传入的func
    "update-age": (age: number) => {
      //校验传值，是否执行父组件func
      // 写一些条件拦截，记得返回false
      if (age < 18) {
        console.log("未成年人不允许参与");
        return false;
      }

      // 通过则返回true
      return true;
    },
  },
  setup(props, { attrs, emit }) {
    //attrs 传入的自定义属性
    console.log(attrs);
    console.log(props);

    // 2s 后更新年龄
    setTimeout(() => {
      emit("update-age", 22);
    }, 2000);
  },
});
</script>
