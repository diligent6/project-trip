import {defineStore} from "pinia";
import {getHotSuggests, getHouseDetailInfo, getHouseList} from "@/service/modules/home.js";


const useHomeStore = defineStore("homeStore",{
    state:()=>({
        hotSuggests:[],
        houseList:[],
        currentPage:1,
        houseDetails:{}
    }),

    actions:{
        async fetchHotSuggests(){
            const res = await getHotSuggests()
            this.hotSuggests = res.data

        },
        async fetchHouseList(){
            const res = await getHouseList(this.currentPage)

            this.houseList =[...this.houseList,...res.data]
            this.currentPage++;
        },
        async fetchHouseDetailInfos(id){
            const res = await getHouseDetailInfo(id)

            this.houseDetails = res.data
        }
    }
})

export default useHomeStore