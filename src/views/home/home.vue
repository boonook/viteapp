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
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题">

    </van-card>
  </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue';
import {useStore} from '@/store/index';
import {Toast,Card} from 'vant'
export default defineComponent({
  components: {HelloWorld,'van-card':Card},
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
