<template>
  <div class="city-list">
  <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <hot-city-list :hotCities="cityData.hotCities" @cityClick="onCityClick"/>
      <template v-for="item in cityData.cities">
        <van-index-anchor :index="item.group" />
        <template v-for="iten in item.cities">
          <van-cell :title="iten.cityName" @click="onCityClick(iten.cityName)" />
        </template>

      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import HotCityList from "@/views/city/cpns/hot-city-list.vue";
import {computed} from "vue";
import useCityStore from "@/store/modules/city.js";
import {useRouter} from "vue-router";
const cityStore = useCityStore()
const router = useRouter()

const props = defineProps({
  cityData:{
    type:Object,
    default:()=>({})
  }
})
//获取索引列表
const indexList = computed(()=>{
  //1.获取索引列表
  const list = props.cityData.cities.map((item)=>{
    return  item.group
  })
  list.unshift("#")
  return list;
})
//点击城市
const onCityClick = (cityName)=>{

  cityStore.currentCityName = cityName;
  router.back()
}
</script>

<style lang="less" scoped>

</style>
