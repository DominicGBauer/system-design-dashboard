import newDates from '../../../api/dates'

const state = () => ({
  dates: [],
})

const getters = {
  transformedDates(state) {
    let newDates = []
    for (let quarter of state.dates) {
      newDates.push(quarter.quarter.slice(0, 8) + '01')
    }
    return newDates
  },
}

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
