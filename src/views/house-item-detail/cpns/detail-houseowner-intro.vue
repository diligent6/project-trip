<template>
  <div class="houseowner-intro">
    <detail-section title="房东介绍" tip-info="查看房东主页">
      <template #content>
        <div class="content">
          <div class="top-scroll">
            <img :src="introInfos.topScroll" alt="">
          </div>
          <div class="hotel-info">
           <div class="left">
             <div class="avator">
               <img :src="introInfos.hotelLogo" alt="">
             </div>
             <div class="infos">
               <div class="hotel-name">
                 {{ introInfos.hotelName}}
               </div>
               <div class="tags">
                 <template v-for="(item,index) in introInfos.hotelTags">
                   <div class="item">
                     <span class="text">{{ item.tagText.text}}</span>
                     <span class="line" v-if="index !==introInfos.hotelTags.length-1">|</span>
                   </div>
                 </template>
               </div>
             </div>
           </div>
            <div class="chat">
              联系房东
            </div>
          </div>
          <div class="summary">
            <template v-for="item in introInfos.hotelSummary">
              <div class="item">
                <span class="title">{{ item.title}}</span>
                <span class="intro">{{ item.introduction }}</span>
                <span class="tip">{{ item.tip }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section.vue";

const props = defineProps({
  introInfos:{
    type:Object,
    default:()=>({})
  }
})

</script>

<style lang="less" scoped>
.content{
  margin: 10px 0 40px 0;
  .top-scroll{
    img{
      width: 100%;
    }
  }
  .hotel-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 20px;
    .left{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .avator{
      img{
        width: 54px;
        height: 54px;
      }
    }
    .infos{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .hotel-name{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
      }
      .tags{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        .text{
          margin-right: 4px;
          color: #666;
        }
        .line{
          margin-right: 4px;
          color: #666;

        }
      }

    }
    .chat{

      width: 72px;
      height: 20px;
      border-radius: 8px;
      padding: 2px 3px;
      line-height:20px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-image: var(--theme-linear-gradient);
    }

  }
  .summary{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    .item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      color: #333;
      .intro{
        margin: 3px 0;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>
