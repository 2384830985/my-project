import Layout from '@/layout/layout.vue';
/**
 * 文章
 */
export default [
    {
        path: '/article',
        name: 'article',
        component: Layout,
        meta: {
            title: 'article',
            name: '文章'
        },
        children:[
            {
                path     : 'list',
                name     : 'list',
                meta: {
                    title: 'list',
                    name: '文章列表',
                },
                component: () => import('@/views/article/articleList.vue'),
            },
            {
                path     : 'add',
                name     : 'add',
                meta: {
                    title: 'add',
                    name: '文章新增修改',
                },
                component: () => import('@/views/article/articleAdd.vue'),
            },
        ]
    }
]
