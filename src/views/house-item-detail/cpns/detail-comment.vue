<template>
  <div class="detail-comment">
   <detail-section title="热门评论" :tip-info="totolCountInfo">
     <template #content>
       <div class="content">
         <div class="header">
           <div class="left">
             <div class="rate">
               <span class="text">{{ commentInfos.overall}}</span>
               <div class="line"></div>
             </div>
             <div class="rate-infos">
               <div class="intro-title">{{ commentInfos.scoreTitle}}</div>
               <div class="total-count">{{ commentInfos.totalCount}}条评论</div>
               <van-rate v-model="starCount" size="12" color="#ff9854"/>
             </div>
           </div>
           <div class="right">
             <template v-for="item in commentInfos.subScores">
               <span class="text">{{ item}}</span>
             </template>
           </div>
         </div>
         <div class="rate-list">
           <template v-for="item in commentInfos.commentTagVo">
             <div class="item"
                  :style="{color:item.color,backgroundColor:item.backgroundColor}"
             >
               {{ item.text}}

             </div>
           </template>
         </div>
         <div class="people-rate">
           <div class="people-header">
             <div class="avator">
               <img :src="commentInfos.comment.userAvatars" alt="">
             </div>
             <div class="use-info">
               <div class="name">{{ commentInfos.comment.userName}}</div>
               <div class="date">{{ commentInfos.comment.checkInDate}}</div>
             </div>

           </div>
           <div class="people-content">
             {{ commentInfos.comment.commentDetail}}
           </div>
         </div>
       </div>
     </template>
   </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section.vue";
import {ref} from "vue";

const props = defineProps(
    {
      commentInfos: {
        type: Object,
        default: () => ({})
      }
    }
)
//评论数
const totolCountInfo = ref()
totolCountInfo.value =`查看全部${props.commentInfos.totalCount}条评论`
//评价星级
const starCount = ref()
starCount.value = props.commentInfos.comment.overall
</script>

<style lang="less" scoped>
.content{
  margin: 20px 0 50px 0;
  .header{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;

    .left{
      display: flex;
      justify-content: space-between;

      .rate{
        position: relative;
        .text{
          font-size: 46px;
          font-weight: 700;
          position: relative;
        }
        .line{
          width: 17.6vw;
          height: 1.6vw;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 0.8vw;
          position: absolute;
          bottom: 1.2vw;
          z-index: 5;
        }
      }
      .rate-infos{
        margin-left: 18px;
        .total-count{
          color: #666;
          margin: 6px 0;
        }
      }
    }
    .right{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 150px;
      color: #666;
      .text{
        flex-basis: 50%;
        font-size: 12px;
      }
    }
  }
  .rate-list{
    display: flex;
    flex-wrap: wrap;
    .item{
      margin: 6px 8px ;
      padding: 2px 5px;
      font-size: 12px;
      border-radius: 6px;

    }
  }
  .people-rate{
    background-color: #F5F5F5;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    .people-header{
     display: flex;
      .avator{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img{
          width: 100%;
        }
      }
      .use-info{

        .date{
          margin-top: 2px;
          color: #888;
        }
      }

    }
    .people-content{
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
