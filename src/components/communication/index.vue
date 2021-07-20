<template>
  <div>
    <h2>通信测试</h2>
  </div>
  <Father />
  <Brother />
  <button @click="addVuexCount">vuex add count</button>
  <p>{{ msg }}</p>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Father from "./dependComps/Father.vue";
import Brother from "./dependComps/Brother.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Communication",
  components: {
    Father,
    Brother,
  },
  setup() {
    const info = reactive({ msg: 0 });
    const infoRef = toRefs(info);
    const store = useStore();
    const addVuexCount = () => {
      store.commit("increment");
      info.msg = store.state.count;
    };
    return {
      ...infoRef,
      addVuexCount,
    };
  },
});
</script>

