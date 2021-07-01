import { createStore } from 'vuex'
import dates from './modules/dates'

const store = createStore({
  modules: {
    dates,
  },
})

export default store
