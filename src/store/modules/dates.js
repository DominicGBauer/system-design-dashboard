import newDates from '../../api/dates'

const state = () => ({
  dates: [],
})

const getters = {}

const actions = {
  async getDates({ commit }) {
    const dates = await newDates.getDates()
    commit('setDates', dates)
  },
}

const mutations = {
  setDates(state, dates) {
    state.dates = dates
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
