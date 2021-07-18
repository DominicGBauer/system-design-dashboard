import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import WorkedExample from '@/views/WorkedExample/WorkedExample.vue'
import InterestRates from '@/views/InterestRates/InterestRates.vue'
import Shares from '@/views/Shares/Shares.vue'
import Sectors from '@/views/Sectors/Sectors.vue'

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
    path: '/interest-rates',
    name: 'InterestRates',
    component: InterestRates,
  },
  {
    path: '/shares',
    name: 'Shares',
    component: Shares,
  },
  {
    path: '/sectors',
    name: 'Sectors',
    component: Sectors,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
