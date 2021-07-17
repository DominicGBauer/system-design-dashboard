import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import WorkedExample from '@/views/WorkedExample/WorkedExample.vue'
import InterestRates from '@/views/InterestRates/InterestRates.vue'
import Faq from '@/views/Faq/Faq.vue'
import Shares from '@/views/Shares/Shares.vue'
import Sectors from '@/views/Sectors/Sectors.vue'
import Indices from '@/views/Indices/Indices.vue'

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
  {
    path: '/sectors',
    name: 'Sectors',
    component: Sectors,
  },
  {
    path: '/indices',
    name: 'Indices',
    component: Indices,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
