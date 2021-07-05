import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import WorkedExample from '../views/WorkedExample.vue'
import InterestRates from '../views/InterestRates.vue'
import Faq from '../views/Faq.vue'
import Shares from '../views/Shares.vue'

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
  {
    path: '/interest-rates',
    name: 'InterestRates',
    component: InterestRates,
  },
  {
    path: '/shares',
    name: 'Shares',
    component: Shares,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
