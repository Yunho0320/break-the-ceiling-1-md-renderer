import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/:filename',
        name: 'filename',
        component: () => import('@/views/MdDisplay.vue'),
        props:true
    }
]

const router = createRouter({
    history: createWebHashHistory(), // hash mode
    routes
})

export default router
