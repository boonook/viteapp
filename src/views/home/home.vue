<template>
  <div>
    <h3>home</h3>
    <HelloWorld></HelloWorld>
    <img src="@/assets/logo.png" alt="">
    <div>
      <img src="./images/prize.png" alt="">
    </div>
    <div>
      <img src="./images/logo.png" alt="">
    </div>
  </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue';
import {useStore} from '@/store/index'
export default defineComponent({
  components: {HelloWorld},
  name:'home_page',
  setup() {
    onMounted(()=>{
      const store = useStore();
      console.log(store.state.user.isLogin);
    })
    return {
      
    }
  },
})
</script>
<style lang="scss" scoped>

</style>
