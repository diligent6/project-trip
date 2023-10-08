<template>
  <div class="home-section">
    <!--    1.日期区域-->
    <section-calendar/>
    <!--    2. 价格 人数提示文字-->
    <section-price-count/>
    <!--    3. 关键字 民宿名-->
    <section-keywords/>
    <!--    4. 推荐位置-->
    <section-recommend-position :hot-suggests="hotSuggests"/>
<!--    5. 搜索按钮-->
   <div class="section">
     <div class="searchBtn ">开始搜索</div>
   </div>
  </div>
</template>

<script setup>

import SectionCalendar from "@/views/home/cpns/section-cpns/section-calendar.vue";
import SectionPriceCount from "@/views/home/cpns/section-cpns/section-price-count.vue";
import  SectionKeywords from "@/views/home/cpns/section-cpns/section-keywords.vue"
import useMainStore from "@/store/modules/main.js";
import {storeToRefs} from "pinia";
import SectionRecommendPosition from "@/views/home/cpns/section-cpns/section-recommend-position.vue";
import useHomeStore from "@/store/modules/home.js";

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
const { hotSuggests } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
:deep(.section) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 18px;
  color:#888;
  font-size: 14px;
}

.home-section{
  .searchBtn{
    width: 342px;
    height: 38px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background: var(--theme-linear-gradient);

  }
}

</style>
