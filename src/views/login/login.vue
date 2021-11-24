<template>
  <div>
      <h1>login</h1>
      <img src="./images/title.png" alt="" />
      <HelloWorld></HelloWorld>
      <button @click="onCopy">备份</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default defineComponent({
  components: { HelloWorld },
  name:'login_page',
  setup() {
    const a: String = '123123123';
    console.log(a);
    const onCopy = (data) => {
      console.log(data.name);
    };
    return {
      onCopy,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
