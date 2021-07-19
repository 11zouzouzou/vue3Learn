<template>
  <div>
    <h3>Base</h3>
    <span>{{ msg }}</span>
    <div id="counterId">响应数据演示{{ counter }}</div>
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
    <div id="list-rendering">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
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
    console.log("data input");
    //data
    return {
      counter: 1,
      dynamicMessage: "You loaded this page on " + new Date().toLocaleString(),
      eventHandlingMessage: "Hello Zou",
      twoWayBindingmessage: "双向绑定",
      seen: true,
      todos: [{ text: "队列1" }, { text: "队列2" }, { text: "队列3" }],
    };
  },
  mounted() {
    console.log("mounted start");
    //响应数据演示
    setInterval(() => {
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
});
</script>

