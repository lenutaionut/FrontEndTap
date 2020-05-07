import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter);

const routes = [
    {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
