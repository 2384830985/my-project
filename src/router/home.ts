import Layout from '@/layout/layout.vue';
/**
 * 文章
 */
export default [
    {
        path: '/home',
        name: 'home',
        component: Layout,
        meta: {
            title: 'home',
            name: '首页'
        },
        children:[
            {
                path     : 'homeData',
                name     : 'homeData',
                meta: {
                    title: 'homeData',
                    name: '数据',
                },
                component: () => import('@/views/homeData/homeData.vue'),
            },
        ]
    }
]
