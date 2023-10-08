<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <div class="banner">
        <img :src="itemData?.image?.url" alt=""
             >
      </div>
      <div class="info">
        <div class="desc">{{ itemData?.summaryText}}</div>
        <div class="house-name two-line">{{ itemData?.houseName}}</div>
        <div class="rate-price">
          <van-rate v-model="rateCount"
                    color="#fff"
                    size="15"
                    allow-half
                    readonly
                    />
          <span class="price">￥{{itemData?.finalPrice}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  itemData:{
    type:Object,
    default:()=>({})
  }
})
//字符串转换为数字
const rateCount = ref(Number(props.itemData.commentScore))
</script>

<style lang="less" scoped>

.house-item-v9{
  width: 50%;
  .item-inner{
    position: relative;
    margin: 8px;
    .banner{
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .info{
      position: absolute;
      bottom: 13px;
      padding: 0 10px;
      color: #fff;
      .desc{
        font-size: 12px;
        margin-bottom: 8px;
      }
      .house-name{
        margin-bottom: 10px;
      }
      .price{
        margin-left: 6px;
      }

    }
  }
}
</style>
