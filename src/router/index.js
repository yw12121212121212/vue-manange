import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component:() => import('../views/Home')
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component:() => import('../views/User')
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   component:() => import('../views/mall')
      // },
      // {
      //   path: '/page1',
      //   name: 'page1',
      //   component:() => import('../views/other/pageOne.vue')
      // },
      // {
      //   path: '/page2',
      //   name: 'page2',
      //   component:() => import('../views/other/pageTow.vue')
      // }
    ]
  }, {
    path: '/login',
    name: 'login',
    component:() => import('../views/Login')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
