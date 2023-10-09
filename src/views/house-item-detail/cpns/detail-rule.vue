<template>
  <div class="detail-rule">
     <detail-section title="预定须知" :show-info="false">
       <template #content>
        <div class="list">
          <template v-for="(item,index) in ruleInfos">
            <div class="item">
              <span class="title">{{ item.title}}</span>
              <span class="content">{{ item.introduction}}</span>
              <span class="tip" v-if="index===1">查看说明</span>
            </div>

          </template>
        </div>
       </template>
     </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section.vue";

const props = defineProps({
  ruleInfos:{
    type:Array,
    default:()=>[]
  }
})

</script>

<style lang="less" scoped>
.list{
  margin-top: 20px;
  margin-bottom: 40px;
}
.item{
  display: flex;
  margin-bottom: 18px;
  font-size: 12px;
  .title{
    display: inline-block;
    width: 70px;
    color: #333;
  }
  .content{
    margin-left: 10px;
    flex: 1;
  }


}
</style>
