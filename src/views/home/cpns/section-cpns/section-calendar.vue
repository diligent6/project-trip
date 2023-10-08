<template>
  <div class="section-calendar ">

    <div class="section" @click="onCanlendarClick">
      <div class="left">
        <span class="text">入住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="duration">共{{ durationDateStr }}日</div>
      <div class="right">
        <span class="text">离店</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <!--    日期组件-->
    <van-calendar type="range"
                  :show-confirm="false"
                  color="#ff9854"
                  v-model:show="showCanlendar"
                  @confirm="onConfirm"/>
  </div>

</template>

<script setup>

import useMainStore from "@/store/modules/main.js";
import {storeToRefs} from "pinia";
import {dateDiff, dateFormate} from "@/utils/date_formate.js";
import {computed, ref} from "vue";

const mainStore = useMainStore()
//获取开始和结束日期
const {startDate, endDate} = storeToRefs(mainStore)

//进行格式化
const startDateStr = computed(() => {
  return dateFormate(startDate.value)
})
const endDateStr = computed(() => {
  return dateFormate(endDate.value);
})
const durationDateStr = computed(() => {
  return dateDiff(startDate.value, endDate.value)
})

//控制日期显示
const showCanlendar = ref(false);
const onCanlendarClick = () => {
  showCanlendar.value = true
}
const onConfirm = (dateArr) => {
  //获取日期
  const startDate = dateArr[0]
  const endDate = dateArr[1]
  mainStore.startDate = startDate;
  mainStore.endDate = endDate

  //关闭日期组件
  showCanlendar.value = false;
}
</script>


<style lang="less" scoped>
.section-calendar {
  --van-calendar-popup-height: 100%;
  --van-popup-round-radius: 0;
}

.left, .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text {
  font-size: 10px;
}

.date {
  font-size: 16px;
  margin-top: 2px;
  color: #333;
}

.duration {
  color: #666;
  font-size: 10px;
}
</style>
