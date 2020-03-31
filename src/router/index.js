import Vue from 'vue'
import VueRouter from 'vue-router'

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
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
