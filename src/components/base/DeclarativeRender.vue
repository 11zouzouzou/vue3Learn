<template>
  <div>
    <h3>Base</h3>
    <span>{{ msg }}</span>
    <div id="counterId">
      响应数据演示{{ counter }}
      <!-- 不会变化 -->
      <span v-once>非响应式数据演示{{ counter }}</span>
    </div>
    <div id="bind-attribute">
      <span v-bind:title="dynamicMessage">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div id="event-handling">
      <p>{{ eventHandlingMessage }}</p>
      <button v-on:click="reverseMessage">反转 EventHandlingMessage</button>
    </div>
    <div id="two-way-binding">
      <p>{{ twoWayBindingmessage }}</p>
      <input v-model="twoWayBindingmessage" />
    </div>
    <div id="conditional-rendering">
      <span v-if="seen">现在你看到我了</span>
      <button v-on:click="seenIf">v-if显示隐藏</button>
    </div>
    <!-- 列表渲染 -->
    <div id="list-rendering">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <!-- 原始html -->
    <div>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
  </div>
  <!-- 使用Javascript表达式 -->
  <div v-bind:id="'list-' + id">
    <p>数字+1表达:{{ number + 1 }}</p>
    <p>三元表达:{{ ok ? "YES" : "NO" }} </p>
    <p>函数表达:{{ twoWayBindingmessage.split("").reverse().join("") }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "declarativeRendering",
  //参数传递
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    console.log("生命周期:data注入");
    //data
    return {
      counter: 1,
      dynamicMessage: "You loaded this page on " + new Date().toLocaleString(),
      eventHandlingMessage: "Hello Zou",
      twoWayBindingmessage: "双向绑定",
      seen: true,
      todos: [{ text: "队列1" }, { text: "队列2" }, { text: "队列3" }],
      rawHtml: '<span style="color: red">This should be red.</span>',
      number: 1,
      ok: true,
      id:'textJSFunc'
    };
  },
  mounted() {
    console.log("生命周期：mounted完成添加el");
    //响应数据演示
    setInterval(() => {
      //更新变化
      this.counter++;
    }, 1000);
  },
  methods: {
    reverseMessage() {
      this.eventHandlingMessage = this.eventHandlingMessage
        .split("")
        .reverse()
        .join("");
    },
    seenIf() {
      this.seen = !this.seen;
    },
  },
  beforeCreate() {
    console.log("生命周期:beforceCreate(初始化)");
  },
  created() {
    console.log("生命周期：created注入数据完成");
  },
  beforeMount() {
    console.log("生命周期：beforeMount编译完成");
  },
  beforeUpdate() {
    // console.log('生命周期：beforeUpdate响应数据即将变化更新')
  },
  updated() {
    // console.log('生命周期：updated数据更新后')
  },
  beforeUnmount() {
    console.log("生命周期：beforeUnmount即将卸载组件");
  },
  unmounted() {
    console.log("生命周期：unmounted卸载该组件后");
  },
});
</script>

