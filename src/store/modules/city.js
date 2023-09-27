import { defineStore } from 'pinia';


const useCityStore = defineStore("city",{
    state:()=>({
        cities:{name:'jack'}
    }),
    actions:{

    }
})

export default useCityStore