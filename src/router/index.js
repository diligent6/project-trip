import { createRouter,createWebHashHistory} from 'vue-router';


const router = createRouter({

    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            name:'home',
            path:'/home',
            component:()=>import("@/views/home/home.vue")
        },
        {
            name:'favor',
            path:'/favor',
            component:()=>import("@/views/favor/favor.vue")
        },
        {
            name:'order',
            path:'/order',
            component:()=>import("@/views/order/order.vue")
        },
        {
            name:'message',
            path:'/message',
            component:()=>import("@/views/message/message.vue")
        },
        {
            name:"city",
            path:'/city',
            component:()=>import("@/views/city/city.vue")
        },
        {
            name:"houseItemDetail",
            path:'/houseItemDetail',
            component:()=>import("@/views/house-item-detail/house-item-detail.vue")
        },

        {
            path:'/:pathMatch(.*)*',
            component:()=>import("@/views/not-found/not-found.vue")
        }
    ]
})

export default router;