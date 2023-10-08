import dayjs from "dayjs";

export function dateFormate(date,formatStr="MM月DD日"){
    return dayjs(date).format(formatStr)

}
export  function dateDiff(startDate,endDate){
    return dayjs(endDate).diff(startDate,"day")
}