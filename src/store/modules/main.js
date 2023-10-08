import {defineStore} from "pinia";

const defaultStartDate = new Date();
const defaultEndDate = new Date().setDate(defaultStartDate.getDate() + 1)
const useMainStore = defineStore("mainstore",{
    state:()=>({
        startDate:defaultStartDate,
        endDate:defaultEndDate,
        showLoading:false
    })
})

export default useMainStore