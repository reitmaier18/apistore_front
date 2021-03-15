import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Product_list.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product_list.vue')
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: () => import('../views/Add_product.vue')
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: () => import('../views/Edit_product.vue')
  },
  {
    path: '/quitProduct/:id',
    name: 'quitProduct',
    component: () => import('../views/Quit_product.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
