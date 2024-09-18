import Home from '@/views/Home.vue'
import LogIn from '@/views/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LogIn,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
    ],
})

export default router
