import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/layout.vue';
import FrameOut from './login'
import Refreshing from './refreshing'
import ChartsList from './chartsList'
import Article from './article'
Vue.use(Router);

const redirect = { redirect: '/content' };// 重定向

/**
 * 主框架
 * @type {{path: string; name: string; component: Layout}[]}
 */
export const content = [
    {
        path     : '/content',
        name     : 'Layout',
        component: Layout,
        meta: {
            title: 'home',
            name: '首页'
        },
        children: [
            {
                path     : 'buttons',
                name     : 'buttons',
                meta: {
                    title: 'buttons',
                    name: '按钮'
                },
                component: () => import('@/views/button/index.vue'),
            },
            {
                path     : 'radios',
                name     : 'radios',
                meta: {
                    title: 'radios',
                    name: '单选框',
                },
                component: () => import('@/views/radio/index.vue'),
            },
            {
                path     : 'from',
                name     : 'from',
                meta: {
                    title: 'from',
                    name: '表单验证',
                },
                component: () => import('@/views/form/form.vue'),
            },
        ]
    }
]
export default new Router({
  // mode  : 'history',
  // base  : process.env.BASE_URL,

  routes: [
      ...FrameOut,
      ...Refreshing,
      ...content,
      ...ChartsList,
      ...Article,
  ],
});
