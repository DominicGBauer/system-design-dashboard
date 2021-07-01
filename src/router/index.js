import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import WorkedExample from '../views/WorkedExample.vue'
import Faq from '../views/Faq.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/worked-example',
    name: 'WorkedExample',
    component: WorkedExample,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
