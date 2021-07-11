import { createStore } from 'vuex'
import dates from './modules/dates/dates'
import shares from './modules/shares/shares'
import sectors from './modules/sectors/sectors'
import indices from './modules/indices/indices'
import mobile from './modules/mobile/mobile'

const store = createStore({
  modules: {
    dates,
    shares,
    sectors,
    indices,
    mobile,
  },
  strict: process.env.NODE_ENV !== 'production',
})

export default store
