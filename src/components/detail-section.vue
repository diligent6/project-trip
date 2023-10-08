<template>
  <div class="detail-section">
    <h2 class="header"> {{ title }}</h2>
    <!--    插槽-->

      <slot name="content"></slot>

    <div class="tip-info" v-if="showInfo">
      <span class="text">{{ tipInfo}}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  tipInfo:{
    type:String,
    default:'默认内容'
  },
  showInfo:{
    type:Boolean,
    default:true
  }
})
</script>

<style lang="less" scoped>
.header{
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
.detail-section{
  margin: 30px 0;
  border-top: 3px solid #f2f3f4;
  padding: 15px 8px 8px 0;
  position: relative;
}
.tip-info{
  color: var(--primary-color);
  .text{
    margin-right: 3px;
  }
  position: absolute;
  bottom: 0;
  right: 0;
}
.content{

}
</style>
