<template>
  <div class="house-detail-infos " >
    <h2 class="houseName">{{ detailInfos.houseName}}</h2>
    <div class="hotTags" >
      <template v-for="item in detailInfos.houseTags">
        <span class="text"
              :style="{color:item.tagText?.color,backgroundColor:item.tagText?.background.color}">
          {{ item.tagText?.text}}
        </span>
      </template>
    </div>
    <div class="comment">
     <div class="infos">
       <span class="rate">{{ detailInfos.commentBrief.overall}}</span>
       <span class="scoreTitle">{{ detailInfos.commentBrief.scoreTitle }}</span>
       <span class="brief">{{ detailInfos.commentBrief.commentBrief}}</span>
     </div>
      <div class="arrow">
        <span class="count">{{ detailInfos.commentBrief.totalCount}}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="nearBy">
      <span class="addr">{{ detailInfos.nearByPosition.address}}</span>
      <div class="arrow">
        <span class="text">地图 周边</span>
        <van-icon name="arrow" />

      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  detailInfos:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>
.house-detail-infos{

  .hotTags{
    margin: 10px 0;
    .text{
      margin-right:5px;
      font-size: 12px;
    }
  }
  .arrow{
    color: var(--primary-color);
  }
  .nearBy,.comment{
    margin: 8px 0;
    padding: 7px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f7fa;
  }
  .comment{
    .rate{
      font-size: 18px;
      font-weight: 700;
    }
    .scoreTitle{
      font-weight: 500;
    }
    .infos span:nth-child(-n+3){
      margin-right: 3px;
    }
    .arrow{
      .text{
        margin-right: 3px;
      }
    }
  }
  .nearBy{
    .addr{
      font-size: 15px;
      font-weight: 500;
    }
  }

}
</style>
