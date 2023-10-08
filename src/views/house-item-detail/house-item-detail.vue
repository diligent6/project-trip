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
     <div class="main-section">
       <house-detail-infos :detailInfos="houseDetailInfos"/>
       <detail-facility :facility-infos="mainPartInfos.dynamicModule.facilityModule.houseFacility"/>
     </div>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>

  </div>
</template>

<script setup>

import useHomeStore from "@/store/modules/home.js";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import DetailSwiper from "@/views/house-item-detail/cpns/detail-swiper.vue";
import {computed, onBeforeUnmount, reactive, ref, watch, watchEffect} from "vue";
import {getHouseDetailInfo} from "@/service/modules/home.js";
import HouseDetailInfos from "@/views/house-item-detail/cpns/house-detail-infos.vue";
import DetailSection from "@/components/detail-section.vue";
import DetailFacility from "@/views/house-item-detail/cpns/detail-facility.vue";

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
//房屋详情信息

const houseDetailInfos = computed(()=>{
  //TODO: computed计算属性也是需要通过vulue获取
    return {
      houseName:mainPartInfos.value.topModule.houseName,
      houseTags:mainPartInfos.value.topModule.houseTags,
      commentBrief:mainPartInfos.value.topModule.commentBrief,
      nearByPosition:mainPartInfos.value.topModule.nearByPosition
    }
})

//返回点击
const router = useRouter()
const onClickLeft = () => {
  router.back()
}


</script>

<style lang="less" scoped>
.house-item-detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);
}
.main-section{
  padding: 13px 18px 20px 18px;
}
</style>
