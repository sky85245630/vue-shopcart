import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Products from '../views/products.vue'
import Loading from '../views/loading.vue'


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
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
