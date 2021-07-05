import { createStore } from 'vuex'
import dates from './modules/dates'
import shares from './modules/shares'

const store = createStore({
  modules: {
    dates,
    shares,
  },
})

export default store
