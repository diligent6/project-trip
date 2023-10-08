<template>
  <div class="home-list">
<!--    1. 标题-->
    <h2 class="title">热门精选</h2>
<!--    2. 具体的item展示-->

    <div class="list" >
      <template v-for="item in houseList">
        <house-item-v9   v-if="item.discoveryContentType===9" :itemData="item.data" @click="itemClick"/>
        <house-item-v3 v-else :itemData="item.data" @click="itemClick"/>
      </template>
    </div>
  </div>
</template>

<script setup>

import useHomeStore from "@/store/modules/home.js";
import {storeToRefs} from "pinia";
import HouseItemV9 from "@/components/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3.vue";
import useScroll from "@/hook/useScroll.js";
import {ref, watch, watchEffect} from "vue";
import {useRouter} from "vue-router";

const homeStore = useHomeStore()
//1.调用action 发送网络请求获取数据
homeStore.fetchHouseList()
// 2.获取数据
const { houseList} = storeToRefs(homeStore)

//3. 页面滚动事件监听
const { reachBottom }=useScroll()

//watch监听 可以自动解包
watch(reachBottom,(newValue,oldValue)=>{
  if (newValue){

    homeStore.fetchHouseList()
    reachBottom.value = false
  }
},)

//4.点击进行房屋详情页的跳转
//如何获取event事件??? 可以点击
const router = useRouter()
const itemClick =(event)=>{
  console.log(event)
  // router.push("/houseItemDetail")
}

</script>

<style lang="less" scoped>
.home-list{
  .title{
    padding: 10px 20px ;
    font-size: 22px;
  }
  .list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
