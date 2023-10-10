<template>
  <div class="home" ref="homeRef">
    <!-- 1.顶部的nav-bar -->
    <home-nav-bar />
<!--    <test>-->
<!--      <template #coderwhy>-->
<!--        <h2>6666</h2>-->
<!--        <button>点我试试</button>-->
<!--      </template>-->
<!--      <button>按钮</button>-->
<!--      <template #jack="scope">-->
<!--        <h3>jack {{scope}}</h3>-->
<!--      </template>-->
<!--    </test>-->
    <!-- 2. banner图部分 -->
    <home-banner/>
    <!-- 3. 城市区域部分 -->
    <home-city-location />
    <!--    4. 主要区域部分-->
    <home-section/>

    <!--    6.房屋列表-->
    <home-list/>




  </div>
</template>

<script>
export default {
  name:'home'
}
</script>
<script setup>
import HomeBanner from "./cpns/home-banner.vue"
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeCityLocation from "./cpns/home-city-location.vue"
import HomeSection from "./cpns/home-section.vue"
import HomeList from "./cpns/home-list.vue"
import Test from './test.vue'
import useHomeStore from "@/store/modules/home.js";
import {storeToRefs} from "pinia";
import useScroll from "@/hook/useScroll.js";
import {onActivated, watch,ref} from "vue";

const homeRef =ref()
const homeStore = useHomeStore()
//1.调用action 发送网络请求获取数据
homeStore.fetchHouseList()


//3. 页面滚动事件监听
const { reachBottom,scrollTop }=useScroll(homeRef)

//watch监听 可以自动解包
watch(reachBottom,(newValue)=>{

  if (newValue){
    homeStore.fetchHouseList().then(()=>{
      //TODO:保住获取数据后再进行修改
      reachBottom.value = false
    })
  }
},)

onActivated(()=>{
  homeRef.value?.scroll({
    top:scrollTop?.value
  })
})

</script>

<style lang="less" scoped>
.home{
  padding-bottom: 60px;
  height: 100vh;
  overflow-y: auto;
}
</style>