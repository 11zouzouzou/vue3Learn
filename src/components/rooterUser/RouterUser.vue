<template>
  <h3>路由练习</h3>
   <button  v-on:click="goToDashboard">跳转路由练习</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'RouterUser',
  setup() {
    
  },
  methods:{
    goToDashboard() {
        this.$router.push('/routerTest')
    },
  }
})
</script>
