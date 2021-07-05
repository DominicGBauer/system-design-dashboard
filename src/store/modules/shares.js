import newShares from '../../api/shares'

const state = () => ({
  shares: [],
})

const getters = {}

const actions = {
  async getShares({ commit }) {
    const shares = await newShares.getShares()
    commit('setShares', shares)
  },
}

const mutations = {
  setShares(state, shares) {
    state.shares = shares.data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
