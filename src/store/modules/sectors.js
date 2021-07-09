import newSectors from '../../api/sectors'

const getDefaultState = () => {
  return {
    sector: [],
    sectors: [],
  }
}

const state = getDefaultState()

const getters = {}

const actions = {
  async getSector({ commit }, payload) {
    const sector = await newSectors.getSector(payload)
    commit('setSector', sector)
  },
  async getSectors({ commit }) {
    const sectors = await newSectors.getSectors()
    commit('setSectors', sectors)
  },
  resetState({ commit }) {
    commit('resetState')
  },
}

const mutations = {
  setSector(state, sector) {
    state.sector = sector
  },
  setSectors(state, sectors) {
    state.sectors = sectors
  },
  resetState(state) {
    Object.assign(state, getDefaultState())
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
