
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

export function getHouseDetailInfo(houseId){
    return yzRequest.get({
        url:'/detail/infos',
        params:{
            houseId
        }

    })
}