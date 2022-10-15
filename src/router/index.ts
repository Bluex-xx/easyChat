import { createRouter, createWebHashHistory, Router } from 'vue-router'
import register from '../components/register/index.vue'
import home from '../components/home/index.vue'
const routes = [
  {
    path:"/login",
    name:"login",
    component:()=> import("../components/login/index.vue")
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/',
    redirect: '/login'
  }
]

const router:Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
