import { createStore } from 'vuex'
import dates from './modules/dates/dates'
import shares from './modules/shares/shares'
import sectors from './modules/sectors/sectors'
import indices from './modules/indices/indices'

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
