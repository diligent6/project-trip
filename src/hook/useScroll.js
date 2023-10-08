import {onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";

export default function useScroll(elRef){

    //1. 定义用到的变量
    let el = window  //el默认值是window

    //定义滚动相关的距离变量
    const scrollHeight = ref(0);
    const scrollTop = ref(0);
    const clientHeight = ref(0);

    //定义是否到达底部的布尔状态变量
    const reachBottom = ref(false);

    //定义判断到达底部的回调函数
    const scrollHandler = ()=>{
        //这里判断的原原因是 window和一般元素获取距离信息不同 需要单独处理
        //1. 更新距离信息
        if (el ===window){
            scrollHeight.value = document.documentElement.scrollHeight
            scrollTop.value = document.documentElement.scrollTop
            clientHeight.value = document.documentElement.clientHeight
        }else{
            scrollHeight.value = el.scrollHeight
            scrollTop.value =  el.scrollTop
            clientHeight.value = el.clientHeight
        }
        //判断是否到达底部
        let tolerance = 1
        if ((scrollTop.value +clientHeight.value +tolerance)>=scrollHeight.value){
            reachBottom.value = true
        }
    }

    //组件挂载后 进行监听
    onMounted(()=>{
        //滚动事件监听
        if (elRef)el=elRef
        el.addEventListener('scroll',scrollHandler)
    })
   //组件销毁后 停止监听
    onUnmounted(()=>{
        el.removeEventListener('scroll',scrollHandler)
    })

    return{
        reachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}