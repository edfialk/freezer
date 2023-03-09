import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./pages/Index.vue') },
        { path: '/item/:id', component: () => import('./pages/Item.vue') },
        { path: '/store/:id', name: 'store', component: () => import('./pages/Store.vue') },
        { path: '/kitty', component: () => import('./pages/Kitty.vue') },
    ],
})

export default router;