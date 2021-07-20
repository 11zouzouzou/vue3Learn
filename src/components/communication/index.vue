<template>
  <div>
    <h2>通信测试</h2>
  </div>
  <Father />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Father from './dependComps/Father.vue'

export default defineComponent({
  name:"Communication",
  components:{
    Father
  },
  setup() {
    
  },
})
</script>

