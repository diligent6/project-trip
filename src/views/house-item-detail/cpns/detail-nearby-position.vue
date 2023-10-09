<template>
  <div class="detail-nearby-position">
    <detail-section title="位置周边" tip-info="查看更多周边信息">
      <template #content>
        <div class="baiduMap" ref="mapRef"></div>
      </template>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section.vue";
import {onMounted, ref} from "vue";

const props = defineProps({
  positionInfo:{
    type:Object,
    default:()=>({})
  }
})
//创建一个map实例
const mapRef = ref()
onMounted(()=>{

  const  map = new BMapGL.Map(mapRef.value);
//创建中心点
  const point = new BMapGL.Point(props.positionInfo.longitude, props.positionInfo.latitude);

  const marker = new BMapGL.Marker(point);        // 创建标注
  map.addOverlay(marker);                     // 将标注添加到地图中
//设置中心点
  map.centerAndZoom(point, 15);
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

})
</script>

<style lang="less" scoped>
.baiduMap{
  height: 250px;
}
</style>
