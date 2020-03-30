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
    name: 'recommend',
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
    path: '/news',
    name: 'news',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "news" */ '../views/news/'),
        meta: { title: '要闻' }
      }
    ]
  },
  {
    path: '/financing',
    name: 'financing',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "financing" */ '../views/financing/'),
        meta: { title: '理财' }
      }
    ]
  },
  {
    path: '/fund',
    name: 'fund',
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
    path: '/preciousMetal',
    name: 'preciousMetal',
    component: Layout,
    children: [
      {
        path: '/',
        component: () =>
          import(
            /* webpackChunkName: "preciousMetal" */ '../views/preciousMetal/'
          ),
        meta: { title: '贵金属' }
      }
    ]
  },
  {
    path: '/articleDetails',
    name: 'articleDetails',
    component: () => import('@/views/articleDetails/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: Layout,
    component: () => import(/* webpackChunkName: "news" */ '../views/search/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
