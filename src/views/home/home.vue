<template>
  <div>
    <h3>home</h3>
    <HelloWorld></HelloWorld>
    <van-button @click="onLogin">登录</van-button>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题">

    </van-card>
  </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue';
import {useStore} from '@/store/index';
import {Toast,Card} from 'vant';
import {signIn} from './serve'
export default defineComponent({
  components: {HelloWorld,'van-card':Card},
  name:'home_page',
  setup() {
    const onLogin=()=>{
      Toast.loading({
        message:'loading...',
        duration:0
      });
      let params={
        userName:'admin',
        userPwd:'123456'
      }
      signIn(params).then((res)=>{
        console.log(res);
        debugger
      }).catch(()=>{
        Toast.clear();
      })
    }
    onMounted(()=>{
      const store = useStore();
      console.log(store.state.user.isLogin);
    })
    return {
      onLogin
    }
  },
})
</script>
<style lang="scss" scoped>
  img{
    width:100%;
  }
</style>
