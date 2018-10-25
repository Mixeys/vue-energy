import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthGuard from './router/auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return {
        x: 0,
        y: 0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Catalog.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue'),
      // beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/auth/Register.vue')
    }
  ]
})
