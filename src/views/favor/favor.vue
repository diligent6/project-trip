<template>
  <div class="favor">
    <template v-for="item in 60">
      <div>{{ item}}</div>
    </template>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.favor{
  height: 50vh;
  overflow-y: auto;
  background: var(--primary-color);
}
</style>