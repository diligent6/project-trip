<template>
  <div class="detail-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <!--      1. 轮播图展示-->
      <template v-for="(item,index) in housePics">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active}">
       <div class="group">
         <template v-for="(value,key) in swiperObject">
           <div class="tag" :class="{active:key == currentKey}">
             <span class="text">{{getTagName(value[0].title)}}</span>
             <span v-show="key == currentKey">-</span>
             <span class="count" v-show="key == currentKey">
               {{activeIndex(active)}}/{{value.length}}
             </span>
           </div>
         </template>
       </div>
      </template>
    </van-swipe>

  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, onUnmounted, ref, watchEffect} from "vue";

const props = defineProps({
  housePics: {
    type: Array,
    default: () => []
  }
})
//将数据进行整理，key是图片的类别，value列表存放该类别下所有的对象
const swiperObject = {}

for (const item of props.housePics){

    //初始化对应key 和value value是列表
    let itemArrs = swiperObject[item.enumPictureCategory];
    if (!itemArrs){
      itemArrs = []
      swiperObject[item.enumPictureCategory] =itemArrs

    }
    itemArrs.push(item)
  }
const currentKey = ref()
//获取当前item的索引

  const activeIndex = (active)=>{
    if (isNaN(active)) return
    const item = props.housePics[active]
    currentKey.value = item.enumPictureCategory

    const arrs = swiperObject[item.enumPictureCategory]

    return (arrs.findIndex((data)=>{
      // return data.url===item.url
      return data ===item
    }))+1

  }


//对数据进行转换 ！！！
const getTagName = (name)=>{
  const pattern = /【(.*?)】/i
  const result =name.match(pattern)
  return result[1]
}



</script>

<style lang="less" scoped>
.my-swipe {
  position: relative;
  .item {
    img {
      width: 100%;
    }
  }
  .group{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,.9);
    border-radius: 3px;
    font-size: 12px;
    .tag{
      margin: 0 4px;
      padding: 0 3px;
      border-radius: 4px;
      .text{
        margin: 1px;
      }
    }
    .active{
      background-color: #fff;
      color: #000;
    }
  }
}
</style>
