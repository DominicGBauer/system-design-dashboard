import * as utils from '../utils'

const state = () => ({
  isMobile: false,
})

const getters = {}

const actions = {
  setIsMobile({ commit }) {
    const isMobile = utils.isMobile()
    commit('setIsMobile', isMobile)
  },
}

const mutations = {
  setIsMobile(state, isMobile) {
    state.isMobile = isMobile
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
