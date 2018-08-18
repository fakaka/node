import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            redirect: { name: 'music' },
            component: require('@/views/main').default,
            children: [
                {
                    path: 'music',
                    name: 'music',
                    component: () => import('../views/music/index.vue')
                },
                {
                    path: 'bilibili',
                    name: 'bilibili',
                    component: () => import('../views/bilibili')
                },
                {
                    path: 'monitor',
                    name: 'monitor',
                    component: () => import('../views/monitor')
                },
                {
                    path: 'playlist-detail',
                    name: 'playlist-detail',
                    component: () => import('../views/playlist/detail')
                },
                {
                    path: 'like',
                    name: 'like',
                    component: () => import('../views/like')
                },
                {
                    path: 'news',
                    name: 'news',
                    component: () => import('../views/news')
                },
                {
                    path: 'setting',
                    name: 'setting',
                    component: () => import('../views/setting')
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
