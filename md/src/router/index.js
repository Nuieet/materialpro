import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loginview from "../views/Loginview.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Loginview
  },
  {
    path: '/me',
    name: 'me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Meview.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path == "/me" || to.path == "/about" || to.path == "/") {
    if (localStorage.getItem("token")) {
      next();
    }
    else {
      next("/login");
    }
  }
  else if (to.path == "/login") {
    if (localStorage.getItem("token")) {
      next("/me");
    }
    else {
      next();
    }
  }
  else {
    next();
  }
})
export default router
