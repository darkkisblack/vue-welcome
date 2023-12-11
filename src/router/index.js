import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue';
import Result from '@/views/ResultPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/result',
        name: 'result',
        component: Result,
        props: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
