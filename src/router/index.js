import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { 
        path: '/',
        component: () => import('@/components/layout'),
        redirect: '/home',
        children: [
            { 
                path: '/home',
                component: () => import('@/views/home'),
            },
            { 
                path: '/button',
                component: () => import('@/views/button/index.vue'),
            },
            { 
                path: '/layout',
                component: () => import('@/views/layout/index.vue'),
            },
            { 
                path: '/link',
                component: () => import('@/views/link/index.vue'),
            },
            { 
                path: '/selectEnum',
                component: () => import('@/views/selectEnum/index.vue'),
            },
            { 
                path: '/tree',
                component: () => import('@/views/tree/index.vue'),
            },
            { 
                path: '/dialog',
                component: () => import('@/views/dialog/index.vue'),
            },
            { 
                path: '/open_tree',
                component: () => import('@/views/openTree/index.vue'),
            },
            { 
                path: '/drag_form',
                component: () => import('@/views/dragForm/index.vue'),
            },
            { 
                path: '/drag_table',
                component: () => import('@/views/dragTable/index.vue'),
            },
            { 
                path: '/test_select',
                component: () => import('@/views/test/index.vue'),
            },
            { 
                path: '/filter_table',
                component: () => import('@/views/filter-table/index.vue'),
            },
            { 
                path: '/test_vue2table',
                component: () => import('@/views/vue2table/index.vue'),
            },
            { 
                path: '/pagination',
                component: () => import('@/views/pagination/index.vue'),
            },
        ]
    }
]

const router = createRouter({ 
    routes,
    history: createWebHashHistory()
})

export default router