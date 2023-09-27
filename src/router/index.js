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
            path:'/:pathMatch(.*)*',
            component:()=>import("@/views/not-found/not-found.vue")
        }
    ]
})

export default router;