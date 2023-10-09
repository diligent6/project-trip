<template>
  <div class="tab-bar">

      <template v-for="(item,index) in tabbarData">
        <div class="item" @click="itemClick(item,index)" :class="{active:index ===currentIndex}">
          <img :src="loadImg(item.imgPath)" alt="" v-if="index !==currentIndex">
          <img :src="loadImg(item.imgActive)" alt=""  v-else>
          <span class="text">{{ item.text}}</span>
        </div>
      </template>

  </div>
</template>

<script setup>
import { tabbarData} from "@/assets/data/tabbar_data.js";
import {useRouter} from "vue-router";
import {loadImg} from "@/utils/load_assets.js";
import {ref} from "vue";

const router = useRouter()
const currentIndex =ref(0)
const itemClick = (item,index)=>{
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.tab-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  z-index: 99;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    img{
      width: 33px;
      height: 26px;
      margin-bottom: 2px;
    }
  }
}
.active{
  color: var(--primary-color);
}
</style>
