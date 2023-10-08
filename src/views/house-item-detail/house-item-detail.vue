<template>
  <div class="house-item-detail">
    <!--    1.顶部导航-->
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--    注意:!!! 没有数据就不进行传递-->
    <div class="main-part" v-if="mainPartInfos" v-memo="[mainPartInfos]">
      <detail-swiper :housePics="mainPartInfos.topModule.housePicture.housePics"/>
    </div>

  </div>
</template>

<script setup>

import useHomeStore from "@/store/modules/home.js";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import DetailSwiper from "@/views/house-item-detail/cpns/detail-swiper.vue";
import {computed, onBeforeUnmount, ref, watch, watchEffect} from "vue";
import {getHouseDetailInfo} from "@/service/modules/home.js";

const homeStore = useHomeStore()
//发送网络请求获取数据
const route = useRoute()
const houseId = route.query.houseId

// homeStore.fetchHouseDetailInfos(houseId)
// const { houseDetails} =storeToRefs(homeStore)


//当前页面的数据，不需要store管理，也不能用store管理
const houseDetails = ref({})
getHouseDetailInfo(houseId).then((res) => {
  houseDetails.value = res.data
})
//拆分数据
const mainPartInfos = computed(() => {
  return houseDetails.value.mainPart
})

//返回点击
const router = useRouter()
const onClickLeft = () => {
  router.back()
}
// onBeforeUnmount(()=>{
//   homeStore.houseDetails={}
// })

</script>

<style lang="less" scoped>
.house-item-detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);
}
</style>
