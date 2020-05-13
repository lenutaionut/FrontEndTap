import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Home',
    component: LoginPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: "/profile",
    name: "ProfilePage",
    // lazy-loaded when the route is visited.
    component: function () {
      return import("../views/ProfilePage.vue");
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
