import newInterestRates from '../../../api/interestRates'

const state = () => ({
  dates: [],
  timeSeries: [],
  yieldCurveSeries: [],
})

const getters = {}

const actions = {
  async getDates({ commit }) {
    const dates = await newInterestRates.getDates()
    commit('setDates', dates)
  },
  async getTimeSeries({ commit }, payload) {
    const timeSeries = await newInterestRates.getTimeSeries(payload)
    commit('setTimeSeries', timeSeries)
  },
  async getYieldCurveSeries({ commit }, payload) {
    const yieldCurveSeries = await newInterestRates.getYieldCurveSeries(payload)
    commit('setYieldCurveSeries', yieldCurveSeries)
  },
}

const mutations = {
  setDates(state, dates) {
    state.dates = dates
  },
  setTimeSeries(state, timeSeries) {
    for (let item of timeSeries) {
      item.value = [item.name, item.value]
    }
    state.timeSeries = timeSeries
  },
  setYieldCurveSeries(state, yieldCurveSeries) {
    state.yieldCurveSeries = yieldCurveSeries
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
