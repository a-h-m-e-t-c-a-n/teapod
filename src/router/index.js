import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import PrimeHome from '../views/PrimeHome.vue'

const routes = [
  {
    path: '/',
    component: PrimeHome,
    name:"home",
  },
  {
    path: '/:id',
    component: PrimeHome,
    props:true,//(route) => {console.log("router changed",route);this.id=3},
    name:"homeid",
  },
  {
    path: '/test',
    component: () => import('../views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
