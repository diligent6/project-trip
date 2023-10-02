import yzRequest from '../request'

export function  getAllCities(){
    return yzRequest.get({
        url:"/city/all"
    })
}