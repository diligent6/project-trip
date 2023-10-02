import {defineStore} from 'pinia';
import {getAllCities} from "@/service/index.js";


const useCityStore = defineStore("city", {
    state: () => ({
        cities: {},
        currentCityName:"广州"
    }),
    actions: {
        async fetchAllCities() {
            const res = await  getAllCities();
            this.cities = res.data

        }

    }
})

export default useCityStore