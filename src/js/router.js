import { createWebHistory, createRouter } from 'vue-router'

import AppAbout from '../pages/AppAbout.vue'
import AppHome from '../pages/AppHome.vue'

const routes = [
    { path: '/', component: AppHome, name: "home" },
    { path: '/about', component: AppAbout, name: "about" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }