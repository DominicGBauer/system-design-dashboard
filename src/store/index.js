import { createStore } from 'vuex'
import dates from './modules/dates'
import shares from './modules/shares'
import sectors from './modules/sectors'
import indices from './modules/indices'

const store = createStore({
  modules: {
    dates,
    shares,
    sectors,
    indices,
  },
  strict: process.env.NODE_ENV !== 'production',
})

export default store
