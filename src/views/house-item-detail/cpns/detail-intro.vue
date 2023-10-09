<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<script setup name="home">

defineProps({
  priceIntro: {
    type: Object,
    default: () => ({})
  }
})

// 创建地图实例
</script>

<style lang="less" scoped>
.intro {
  padding: 16px 0;
  border-top: 5px solid #f2f3f4;
  margin-top: 20px;
  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>