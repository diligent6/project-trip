<template>
  <div class="house-item-detail" ref="detailRef">
    <tab-control
        :item-datas="names"
        @tabClick="tabItemClick"
        v-show="showTabControl"
        ref="tabControlRef"
    />
    <!--    1.顶部导航-->
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--    注意:!!! 没有数据就不进行传递-->
    <!--    TODO:v-memo到底什么作用？-->
    <div class="main-part" v-if="mainPartInfos" v-memo="[mainPartInfos]">
      <detail-swiper :housePics="mainPartInfos.topModule.housePicture.housePics"/>
      <div class="main-section">
        <house-detail-infos name="描述" :ref="getSectionRef" :detailInfos="houseDetailInfos"/>
        <detail-facility name="设施" :ref="getSectionRef"
                         :facility-infos="mainPartInfos.dynamicModule.facilityModule.houseFacility"/>
        <detail-houseowner-intro name="介绍" :ref="getSectionRef"
                                 :introInfos="mainPartInfos.dynamicModule.landlordModule"/>
        <detail-comment name="评价" :ref="getSectionRef" :commentInfos="mainPartInfos.dynamicModule.commentModule"/>
        <detail-rule name="须知" :ref="getSectionRef" :rule-infos="mainPartInfos.dynamicModule.rulesModule.orderRules"/>
        <detail-nearby-position name="周边" :ref="getSectionRef" :position-info="mainPartInfos.dynamicModule.positionModule"/>
        <detail-intro :price-intro="mainPartInfos.introductionModule"/>
      </div>
      <div class="footer">
        <img src="@/assets/img/detail/icon_ensure.png" alt="">
        <div class="text">弘源旅途, 永无止境!</div>
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
import DetailHouseownerIntro from "@/views/house-item-detail/cpns/detail-houseowner-intro.vue";
import DetailComment from "./cpns/detail-comment.vue"
import DetailRule from "@/views/house-item-detail/cpns/detail-rule.vue";
import DetailNearbyPosition from "@/views/house-item-detail/cpns/detail-nearby-position.vue";
import DetailIntro from "@/views/house-item-detail/cpns/detail-intro.vue";
import TabControl from "@/components/tab-control.vue";
import useScroll from "@/hook/useScroll.js";

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

const houseDetailInfos = computed(() => {
  //TODO: computed计算属性也是需要通过vulue获取
  return {
    houseName: mainPartInfos.value.topModule.houseName,
    houseTags: mainPartInfos.value.topModule.houseTags,
    commentBrief: mainPartInfos.value.topModule.commentBrief,
    nearByPosition: mainPartInfos.value.topModule.nearByPosition
  }
})

//返回点击
const router = useRouter()
const onClickLeft = () => {
  router.back()
}

//顶部tabcontrol相关
//1.滚动到一定区域才显示
const detailRef = ref()
const {scrollTop} = useScroll(detailRef)
const showTabControl = computed(() => {

  return scrollTop.value >= 310
})


//2.定义传入的信息
const sectionEls = ref({})
const getSectionRef = (value) => {

  if (!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el


}
const names = computed(()=>{
  return Object.keys(sectionEls.value)
})

//3. 点击进行跳转

const isClick = ref(false)
const currentDistance = ref()

const tabItemClick = (index) => {
  const name = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[name]
  // TODO:总结一下所有的相关距离
  let distance = el.offsetTop
  if (index !== 0) {
    distance = distance - 44
  }
  isClick.value =true
  currentDistance.value =distance
  console.log(isClick.value)
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

//4.索引匹配算法
const tabControlRef = ref()
function indexMatch (newValue){
  //遍历所有的ref 找到大于newValue中最小的那个
  const biggerArrs = []
  Object.values(sectionEls.value).forEach(value=>{
    if (value.offsetTop-44 > newValue){
      biggerArrs.push(value)
    }
  })
  const length =Object.values(sectionEls.value).length

  biggerArrs.sort((v1,v2)=>{
    return v1-v2;
  })
  const value = biggerArrs[0]
  //根据这个value获取index
  const index=Object.values(sectionEls.value).findIndex(item=>{
    return item ===value
  })

  tabControlRef.value.currentIndex = index ===0 ? index:index-1;
  if (biggerArrs.length ===0){
    tabControlRef.value.currentIndex = length-1;
  }
}
function indexMatch2(newValue){
  //获取所有区域的offsetTop
  const els = Object.values(sectionEls.value)
  const values = els.map(el=>el.offsetTop)


  //2.根据newValue获取index
  //TODO:思考设置为最大索引的好处
  let index = values.length -1;
  for (let i=0;i< values.length; i++){
    if (values[i] -44>newValue){
      index = i-1;
      break;
    }

  }
  tabControlRef.value.currentIndex = index;
}
//实现如果点击 就不进行索引计算w
watch(scrollTop,(newValue)=>{
  if (newValue === currentDistance.value){
    isClick.value =false
  }
  if (isClick.value) return

  indexMatch2(newValue)
})
</script>

<style lang="less" scoped>

.house-item-detail {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);

  height: 100vh;
  overflow-y: auto;
  position: relative;
  z-index: 99999;
  background: #fff;
}

.main-section {
  padding: 13px 18px 20px 18px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
