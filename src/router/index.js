import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout.vue'
import Recommend from '../views/recommend/'

// vue-router 3.1.0及以上版本push、replace return promise
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 实际开发中，路由要动态添加。
const routes = [
  {
    path: '/',
    redirect: 'recommend'
  },
  {
    path: '/recommend',
    component: Layout,
    children: [
      {
        path: '/',
        component: Recommend,
        meta: { title: '推荐' }
      }
    ]
  },

  {
    path: '/fund',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "fund" */ '../views/fund/'),
        meta: { title: '基金' }
      }
    ]
  },

  {
    path: '/7x24',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "7x24" */ '../views/7x24/'),
        meta: { title: '7x24' }
      }
    ]
  },
  {
    path: '/opinion',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "opinion" */ '../views/opinion/'),
        meta: { title: '意见领袖' }
      }
    ]
  },
  {
    path: '/insurance',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "insurance" */ '../views/insurance/'),
        meta: { title: '保险' }
      }
    ]
  },
  {
    path: '/exchange',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "exchange" */ '../views/exchange/'),
        meta: { title: '外汇' }
      }
    ]
  },
  {
    path: '/gold',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "gold" */ '../views/gold/'),
        meta: { title: '黄金' }
      }
    ]
  },
  {
    path: '/articleDetails',
    name: 'articleDetails',
    component: () =>
      import(
        /* webpackChunkName: "articleDetails" */ '../views/articleDetails/index.vue'
      )
  },
  {
    path: '/shareArticleDetails',
    name: 'shareArticleDetails',
    component: () =>
      import(
        /* webpackChunkName: "shareArticleDetails" */ '../views/shareArticleDetails/index.vue'
      )
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
