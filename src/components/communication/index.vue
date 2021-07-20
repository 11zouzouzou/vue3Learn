<template>
  <div>
    <h2>通信测试</h2>
  </div>
  <Father />
  <Brother />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Father from './dependComps/Father.vue'
import Brother from './dependComps/Brother.vue'

export default defineComponent({
  name:"Communication",
  components:{
    Father,
    Brother
  },
  setup() {
    
  },
})
</script>

