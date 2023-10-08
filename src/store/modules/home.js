import {defineStore} from "pinia";
import {getHotSuggests, getHouseList} from "@/service/modules/home.js";


const useHomeStore = defineStore("homeStore",{
    state:()=>({
        hotSuggests:[],
        houseList:[],
        currentPage:1
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
        }
    }
})

export default useHomeStore