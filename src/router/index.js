import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import Profile from '../views/Profile.vue'

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
    path: '/profile',
    name: 'profile',

    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
