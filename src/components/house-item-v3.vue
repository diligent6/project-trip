<template>
  <div class="house-item-v3">
    <div class="item-inner">
      <div class="banner">
        <img :src="itemData?.image?.url" alt=""
        >
      </div>
      <div class="info">
        <div class="location">
          <i class="location-icon"></i>
          {{ itemData?.location}}
        </div>
        <div class="house-name two-line">{{ itemData?.houseName}}</div>
        <div class="desc">{{ itemData?.summaryText}}</div>
        <div class="rate-price">
          <span class="price">￥{{itemData?.finalPrice}}</span>
          <span class="productPrice">{{ itemData?.productPrice}}</span>
          <span class="priceTipBadge">{{ itemData?.priceTipBadge?.text}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>



const props = defineProps({
  itemData:{
    type:Object,
    default:()=>({})
  }
})



</script>

<style lang="less" scoped>
.house-item-v3{
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
      padding: 10px;
      .location{
        .location-icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url("../assets/img/home/location.png") no-repeat ;
          background-size: 12px;
        }
        color: #888;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .desc{
        font-size: 12px;
        color: #888;
        margin: 6px 0;
      }
      .rate-price span:nth-child(-n+2){
        margin-right: 3px;
      }
      .rate-price{

        .price{
          color: var(--primary-color);

        }
        .productPrice{
          color: #888;
          text-decoration: line-through;

        }
        .priceTipBadge{
          color: #fff;
          border-radius: 5px;
          background-color: var(--primary-color);
          font-size: 13px;
        }
      }
    }
  }
}

</style>
