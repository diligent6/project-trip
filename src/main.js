

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import pinia from "./store"

import "normalize.css" //注意引入的位置 后面的css会覆盖前面的
import "@/assets/css/index.css"

const app = createApp(App)
//注册插件
app.use(router)
app.use(pinia)
//挂载
app.mount("#app")