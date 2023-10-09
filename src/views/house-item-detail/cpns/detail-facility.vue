<template>
  <div class="detail-facility">
    <detail-section title="房屋设施"  tip-info="查看全部设施">
      <template #content>
        <div class="content">
          <template v-for="(value,key) in houseFacilities" :key="key">
            <div class="inner-section">
              <div class="left">
                <img :src="value.icon" class="img_icon">
                <div class="groupName">{{ value.groupName}}</div>
              </div>
              <div class="right">
                <template v-for="(iten,index) in value.facilitys.slice(0,4)" :key="index">
                  <div class="iten">
                    <i class="icon icon_check"></i>
                    <span class="name">{{ iten.name}}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </detail-section>
  </div>
</template>

<script setup>
const props = defineProps({
  facilityInfos:{
    type:Object,
    default:()=>({})
  }
})
//转换数据进行展示
const houseFacilities = {}
props.facilityInfos.facilitySort.forEach(index =>{
  houseFacilities[index] =props.facilityInfos.houseFacilitys[index];
})

import DetailSection from "@/components/detail-section.vue";
</script>

<style lang="less" scoped>
//TODO:总结css样式调整的一般步骤，太浪费时间了
.content{
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #f7f9fb;
  padding: 10px 0;
}
.inner-section{
  display: flex;
  justify-content: space-between;

  padding: 20px 20px 20px 12px;

  .left{
    width: 100px;
    text-align: center;
    .img_icon{
      width: 20px;
      height: 20px;
      margin-bottom: 6px;
    }
  }
  .right{
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex: 1;
    flex-wrap: wrap;
    .iten{
      flex-basis: 50%;
      display: flex;
      align-items: center;
      .name{
        margin-left: 5px;
      }
    }
  }

}
</style>
