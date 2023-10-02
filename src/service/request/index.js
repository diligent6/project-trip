import axios from 'axios'

import { BASE_URL,TIMEOUT } from './config'
class YZRequest {

    constructor(baseURL,timeout){
        //创建一个instance实例
        this.instance =axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use((res)=>{
            return res.data;

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