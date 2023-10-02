<template>
  <div class="home-city-location">
    <div class="city" @click="cityClick">{{ currentCityName}}</div>
    <div class="location" @click="positionClick">
      <span class="title">我的位置</span>
      <span class="position-icon">
        <img src="@\assets\img\home\icon_location.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import useCityStore from "@/store/modules/city.js";
import {storeToRefs} from "pinia";

const router = useRouter()
const cityClick = ()=>{
    router.push('/city')
}
const positionClick = ()=>{
    console.log("position click")
}
//获取城市名称
const cityStore = useCityStore()
const { currentCityName} = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.home-city-location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 74px;
    .title {
      color: #666;
      font-size: 12px;
    }
    .position-icon {
      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>
