import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name:"home",
  },
  {
    path: '/:id',
    component: Home,
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
