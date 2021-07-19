<template>
  <!-- class的存在存在决定 -->
  <div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      classStyle
    </div>
    <!-- object -->
    <div class="staticObject" :class="classObject">classStyleObject</div>
    <!-- computed -->
    <div class="staticObject" :class="classObjectComputed">
      classStyleObject
    </div>
    <!-- array -->
    <div :class="[isActive ? activeClass : '', errorClass]">
      classStyleArray
    </div>
    <!-- parentClass -->
    <div :class="$attrs.class">classStyleParent</div>
  </div>
  <!-- 内联样式绑定 -->
  <div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      内联样式
    </div>
    <div :style="styleObject">内联样式</div>
    <div :style="[baseStyle, styleObject]">内联样式</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassStyleRender",
  data() {
    return {
      /** class*/
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        "text-danger": true,
      },
      error: null,
      activeClass: "active",
      errorClass: "array-danger",
      /** 内联样式*/
      activeColor: "yellow",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
      baseStyle: {
        border: "1px solid red",
      },
    };
  },
  computed: {
    classObjectComputed(): Object {
      return {
        computed: this.isActive && !this.error,
        "computed-danger": this.error && (this.error as any).type === "fatal",
      };
    },
  },
});
</script>
<style>
.static {
  color: blue;
}
.static.active {
  color: rgb(255, 0, 0);
}
.staticObject {
  color: aqua;
}
.staticObject.computed {
  color: blueviolet;
}
</style>
