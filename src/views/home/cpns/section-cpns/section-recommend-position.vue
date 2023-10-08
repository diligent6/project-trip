<template>
  <div class="section-recommend-position section">
    <template v-for="item in hotSuggests">
      <div class="item"
           :style="{color:item.tagText.color,background: item.tagText.background.color}">
        {{ item.tagText.text}}
      </div>
    </template>
  </div>
</template>

<script setup>


const props = defineProps({
  hotSuggests:{
    type:Array,
    default:()=>([])
  }
})


</script>

<style lang="less" scoped>

.section{
  flex-wrap: wrap;
  font-size: 10px;

  .item{
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
  }
}
</style>
