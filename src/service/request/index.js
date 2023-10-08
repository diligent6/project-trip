import axios from 'axios'

import { BASE_URL,TIMEOUT } from './config'
import useMainStore from "@/store/modules/main.js";
const mainStore = useMainStore()
class YZRequest {

    constructor(baseURL,timeout){
        //创建一个instance实例
        this.instance =axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.request.use((config)=>{

            mainStore.showLoading = true;

            return config
        },error => {
            return error
        })
        this.instance.interceptors.response.use((res)=>{
            mainStore.showLoading = false
            return res.data;

        },error => {
            return error
        })

    }
    //封装具体的方法
    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    get(config){
        return this.request({...config,method:'get'})
    }
    post(config){
       return  this.request({...config,method:'post'})
    }
}

export default new YZRequest(BASE_URL,TIMEOUT)