<template>
  <div class="app">
   <router-view></router-view>
    <div class="loading" v-show="mainStore.showLoading" @click="loadingClick">
      <div class="bg">
      </div>
    </div>
    <tabbar/>
  </div>
</template>

<script setup>
import useMainStore from "@/store/modules/main.js";
import Tabbar from "@/components/tabbar.vue";


const mainStore = useMainStore()

const loadingClick = ()=>{
  mainStore.showLoading = false;
}

</script>

<style lang="less" scoped>

.loading{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .bg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border-radius: 18px;
    background: #fff url("./assets/img/home/full-screen-loading.gif") 0 0/100% ;
  }
}
</style>