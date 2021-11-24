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
    <van-button>按钮测试</van-button>
  </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue';
import {useStore} from '@/store/index';
import {Toast} from 'vant'
export default defineComponent({
  components: {HelloWorld},
  name:'home_page',
  setup() {
    onMounted(()=>{
      const store = useStore();
      console.log(store.state.user.isLogin);
      Toast({
        message:'store.state.user.isLogin',
        duration:0
      })
      setTimeout(()=>{
        Toast.clear();
      },2000)
    })
    return {
      
    }
  },
})
</script>
<style lang="scss" scoped>

</style>
