import newIndices from '../../api/indices'

const getDefaultState = () => {
  return {
    index: [],
    indexName: '',
    sector: [],
    table: [],
  }
}

const state = getDefaultState()

const getters = {
  portfolioStatistics(state) {
    if (state.table.length) {
      return state.table[state.table.length - 1]
    }
    return null
  },
  filteredTable(state) {
    return state.table.filter((data) => !!data.weights)
  },
}

const actions = {
  async getIndex({ commit }, payload) {
    const index = await newIndices.getIndex(payload)
    commit('setIndex', index)
  },
  async getSector({ commit }, payload) {
    const sector = await newIndices.getSector(payload)
    commit('setSector', sector)
  },
  async getTable({ commit }, payload) {
    const sector = await newIndices.getTable(payload)
    commit('setTable', sector)
  },
  setIndexName({ commit }, index) {
    commit('setIndexName', index)
  },
  resetState({ commit }) {
    commit('resetState')
  },
}

const mutations = {
  setIndex(state, index) {
    state.index = index
  },
  setSector(state, sector) {
    state.sector = sector
  },
  setTable(state, table) {
    state.table = table
  },
  setIndexName(state, indexName) {
    state.indexName = indexName
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
