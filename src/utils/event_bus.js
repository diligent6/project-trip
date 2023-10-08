
class EventBus{

    //构造方法
    constructor() {
        this.eventBus = {}
    }

    //合法性检查
    checkType(eventName,eventCallback){
        //合法性检测
        if (typeof eventName !=='string'){
            throw new TypeError('the event name must be string type')
        }
        if (typeof eventCallback !=='function'){
            throw new TypeError('the event callback must be function type')
        }
    }
    //订阅 【将回调函数存储起来 之后调用】 指定对应回调函数的this上下文
    on(eventName,eventCallback,thisArg){
        this.checkType(eventName,eventCallback)
        let handlers = this.eventBus[eventName]
        if (!handlers){
            handlers =[]
            this.eventBus[eventName] = handlers
        }
        handlers.push({
            eventCallback,
            thisArg
        })

        return this
    }

    //发布 [找到对应的回调函数进行调用然后传入参数】
    emit(eventName,...payload){
        //合法性检测
        if (typeof eventName !=='string'){
            throw new TypeError('the event name must be string type')
        }
        //取出对应的事件列表 然后逐一执行
        const handlers = this.eventBus[eventName] ||[]
        handlers.forEach(handler=>{
            handler.eventCallback.apply(handler.thisArg,payload)
        })
    }
    // 取消订阅【找到对应的事件从列表中移除
    off(eventName,eventCallback){
        this.checkType(eventName,eventCallback)

        //取出对应的处理函数列表
        const handlers = this.eventBus[eventName]
        if (handlers && eventCallback){
            //记录原数组的长度 然后判断并删除
            const newHandlers = [...handlers]

            for (let i =0;i<newHandlers.length;i++){
                const handler = newHandlers[i]
                if (handler.eventCallback ===eventCallback){
                    const index = handlers.indexOf(handler)
                    handlers.splice(index,1)
                }
            }

            if (handlers.length ===0){
                delete this.eventBus[eventName]
            }
       }

    }

    clear(){
        this.eventBus={}
    }

    hasEvent(eventName){
        return Object.keys(this.eventBus).includes(eventName)
    }
}

export default new EventBus();