import Layout from '@/layout/layout.vue';
export default [
    {
        path: '/charts',
        name: 'charts',
        component: Layout,
        meta: {
            title: 'charts',
            name: '图表'
        },
        children:[
            {
                path     : 'basics',
                name     : 'basics',
                meta: {
                    title: 'basics',
                    name: '基础折线图',
                },
                component: () => import('@/views/chart/basics/index.vue'),
            },
            {
                path     : 'doubleBroken',
                name     : 'doubleBroken',
                meta: {
                    title: 'doubleBroken',
                    name: '基础折线图',
                },
                component: () => import('@/views/chart/doubleBroken/index.vue'),
            },
        ]
    }
]
