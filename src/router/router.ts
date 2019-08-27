import Vue from 'vue';
import Router from 'vue-router';
import FrameOut from './login'
import Refreshing from './refreshing'
import Article from './article'
import Home from './home'
Vue.use(Router);

const redirect = { redirect: '/content' };// 重定向

export default new Router({
  // mode  : 'history',
  // base  : process.env.BASE_URL,

  routes: [
      ...Home,
      ...FrameOut,
      ...Refreshing,
      ...Article,
  ],
});
