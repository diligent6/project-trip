
import yzRequest from '../request'

export function  getHotSuggests(){
    return yzRequest.get({
        url:"/home/hotSuggests"
    })
}

export function getHouseList(page=1){
    return yzRequest.get({
        url:"/home/houselist",
        params:{
            page
        }
    })
}