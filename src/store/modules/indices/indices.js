import newIndices from '../../../api/indices'

const getDefaultState = () => {
  return {
    index: [],
    indexName: '',
    sector: [],
    table: [],
    indexTypeIndices: [],
  }
}

const state = { ...getDefaultState(), indexTypes: [] }

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
  async getIndexTypes({ commit }) {
    const indexTypes = await newIndices.getIndexTypes()
    commit('setIndexTypes', indexTypes)
  },
  async getIndexTypeIndices({ commit }, payload) {
    const indices = await newIndices.getIndexTypeIndices(payload)
    commit('setIndexTypeIndices', indices)
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
  setIndexTypes(state, indexTypes) {
    state.indexTypes = indexTypes
  },
  setIndexTypeIndices(state, indexTypeIndices) {
    state.indexTypeIndices = indexTypeIndices
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
