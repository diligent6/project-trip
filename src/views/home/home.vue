<template>
  <div class="home">
    <!-- 1.顶部的nav-bar -->
    <home-nav-bar/>
    <!-- 2. banner图部分 -->
    <home-banner/>
    <!-- 3. 城市区域部分 -->
    <home-city-location/>

  </div>
</template>

<script setup>
import homeBanner from "./cpns/home-banner.vue";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeCityLocation from "./cpns/home-city-location.vue"
</script>

<style lang="less" scoped>

</style>