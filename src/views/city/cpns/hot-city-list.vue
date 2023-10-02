<template>
  <div class="hot-city-list">
    <template v-for="item in hotCities">
      <div class="item" @click="onCityClick(item.cityName)">{{ item.cityName}}</div>
    </template>

  </div>
</template>

<script setup>
const props = defineProps({
  hotCities:{
    type:Array,
    default:()=>([])
  }
})
const emits = defineEmits(["cityClick"])
const onCityClick = (cityName)=>{
  emits("cityClick",cityName)
}
</script>

<style lang="less" scoped>
.hot-city-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  flex-wrap: wrap;
  .item{
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}

</style>
