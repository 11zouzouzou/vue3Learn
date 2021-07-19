<template>
  <ClassStyleRender/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClassStyleRender from './components/base/ClassStyleRender.vue'

export default defineComponent({
  name: "RouterTest",
  components: {
    ClassStyleRender
  },
});
</script>
