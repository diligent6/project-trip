<template>
  <div class="test" >
    <h2 >test</h2>
    <slot>
      <h3>我是插槽</h3>
    </slot>
    <slot name="jack" :scope="msg" :age="18"></slot>
  </div>

</template>

<script setup>
import {ref, useAttrs} from "vue";

const msg = ref("8888")
const arrts=useAttrs()

const btnClick = ()=>{
  arrts.onDdd()
}

</script>

<style lang="less" scoped>

</style>
