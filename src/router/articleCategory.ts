import Layout from '@/layout/layout.vue';
/**
 * 文章
 */
export default [
    {
        path: '/articleCategory',
        name: 'articleCategory',
        component: Layout,
        meta: {
            title: 'articleCategory',
            name: '文章类目'
        },
        children:[
            {
                path     : 'list',
                name     : 'list',
                meta: {
                    title: 'list',
                    name: '文章类目列表',
                },
                component: () => import('@/views/articleCategory/articleCategoryList.vue'),
            },
            {
                path     : 'add',
                name     : 'add',
                meta: {
                    title: 'add',
                    name: '文章类目修改',
                },
                component: () => import('@/views/articleCategory/articleCategoryAdd.vue'),
            },
        ]
    }
]
