<template>
  <div class="home">
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

<script setup>
import HomeBanner from "./cpns/home-banner.vue"
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeCityLocation from "./cpns/home-city-location.vue"
import HomeSection from "./cpns/home-section.vue"
import HomeList from "./cpns/home-list.vue"
import Test from './test.vue'



</script>

<style lang="less" scoped>
.home{
  padding-bottom: 60px;
}
</style>