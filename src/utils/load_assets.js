
export function loadImg(imgName){
    return new URL(`../assets/img/tabbar/${imgName}`,import.meta.url).href
}