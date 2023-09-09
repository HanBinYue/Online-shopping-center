import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/layout/home'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import Catagory from '@/views/layout/catagory'
import Layout from '@/views/layout'

import store from '@/store'

const Login = () => import('../views/login/indexLogin.vue')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const ProDetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/catagory', component: Catagory },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    // 动态路由传参，确认将来是哪个商品，路由参数中携带 id
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder }

  ]
})

// 权限页面名单
const authUrls = ['/pay', '/myorder']

// 配置导航守卫 拦截未经允许的路由请求
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }

  const token = store.getters.token
  if (token) { next() } else { next('/login') }
})

export default router
