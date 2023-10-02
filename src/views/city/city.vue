<template>
  <div class="city">
    <!-- 1.搜索框区域  -->
    <van-search
        shape="round"
        background="#fff"
        placeholder="城市/区域/位置"
        show-action
        @cancel="cancelClick"
    />
    <!--   2. tabControl区域 -->
    <van-tabs v-model:active="currentCity" color="#ff9854">
      <van-tab title="国内·港澳台" name="国内·港澳台"></van-tab>
      <van-tab title="海外" name="海外"></van-tab>
    </van-tabs>
    <!--    3. 城市列表展 示-->
    <template v-for="cityData in cities">
      <city-list :city-data="cityData" v-show="cityData.title === currentCity"/>
    </template>

  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import CityList from "./cpns/city-list.vue"
import {ref} from "vue";
import useCityStore from "@/store/modules/city.js";
import {storeToRefs} from "pinia";
//1. 取消事件点击
const router = useRouter()
const cancelClick = () => {
  router.back()
}
//2.城市列表的展示
//2.0 获取当前需要展示城市的标签名称
const currentCity = ref();
//2.1获取对应组件中需要展示的数据
const cityStore = useCityStore()
//发送请求获取城市数据
cityStore.fetchAllCities()
const { cities} = storeToRefs(cityStore);

</script>

<style lang="less" scoped>
.city {
  --van-search-left-icon-color: var(--primary-color)
}
</style>
