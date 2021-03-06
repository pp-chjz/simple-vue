import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Income from '../views/Income.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Income
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/income',
    name: 'Income',
    component: () => import(/* webpackChunkName: "about" */ '../views/Income.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
