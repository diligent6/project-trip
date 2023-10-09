<template>
  <div class="tab-control">
    <template v-for="(item,index) in itemDatas" :key="index">
      <div class="item"
           @click="itemClick(index)"
          >
        <span :class="['text',{active:index===currentIndex}]">{{item}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import {ref} from 'vue'
//定义传入的属性
const props = defineProps({
  itemDatas: {
    type: Array,
    default: () => [ '评论', '周边']
  }
})
const currentIndex = ref(0);
const emis = defineEmits(['tabClick'])
//点击事件
const itemClick = (index) => {

  currentIndex.value = index
  emis('tabClick',index)
}
defineExpose({
  currentIndex
})
</script>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  left: 0;
  right: 0;
  height: 44px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  z-index: 99;

  .item {
    text-align: center;
    line-height: 44px;
    flex: 1;
    //通过添加一个padding 撑开宽度
    .text{
      padding: 8px;
    }
  }
  .active{
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
  }
}
</style>
