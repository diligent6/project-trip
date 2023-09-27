<template>
  <div class="not-found">
   <h2>not-found</h2> 
   <div>{{this.$route.params.pathMatch }}</div>
  </div>
  
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);



</script>

<style lang="less" scoped>

</style>