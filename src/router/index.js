import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Products from '../views/products.vue'
import Loading from '../views/loading.vue'
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
import CustomerOrder from '@/components/pages/CustomerOrders';

Vue.use(VueRouter)
  
  const routes = [
  {
    path:'*',
    redirect:'login'
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: { requiresAuth: true }
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/dashboard.vue'),
    children:[
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: Coupons,
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        meta: { requiresAuth: true },
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/dashboard.vue'),
    children: [
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: CustomerOrder,
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('@/components/pages/CustomerCheckout'),
      },
    ],
  },
  
]

const router = new VueRouter({
  routes
})

export default router
