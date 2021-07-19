<template>
  <li>{{ todo.text }}</li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'CompoinentListBuild',
  //App 外部传入参数
  props:{
    // TODO 
    todo:null
  }
})
</script>

