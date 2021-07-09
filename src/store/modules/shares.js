import newShares from '../../api/shares'

const getDefaultState = () => {
  return {
    shareTimeSeries: [],
    shareTableInfo: [],
    shares: [],
    dates: [],
    date: [],
    share: [],
  }
}

const state = getDefaultState()

const getters = {}

const actions = {
  async getShareTableInfo({ commit }, { share, date }) {
    const shareTableInfo = await newShares.getShareTableInfo(share, date)
    commit('setShareTableInfo', shareTableInfo)
  },
  async getShareTimeSeries({ commit }, { share }) {
    const shareTimeSeries = await newShares.getShareTimeSeries(share)
    commit('setShareTimeSeries', shareTimeSeries)
  },
  async getShares({ commit }) {
    const shares = await newShares.getShares()
    commit('setShares', shares)
  },
  async getShareDates({ commit }, { share }) {
    const dates = await newShares.getShareDates(share)
    commit('setShareDates', dates)
  },
  resetState({ commit }) {
    commit('resetState')
  },
  updateShareDate({ commit }, date) {
    commit('updateShareDate', date)
  },
  updateShare({ commit }, share) {
    commit('updateShare', share)
  },
}

const mutations = {
  setShareTableInfo(state, shareTableInfo) {
    state.shareTableInfo = shareTableInfo
  },
  setShareTimeSeries(state, shareTimeSeries) {
    state.shareTimeSeries = shareTimeSeries
  },
  setShares(state, shares) {
    state.shares = shares
  },
  updateShare(state, share) {
    state.share = share
  },
  updateShareDate(state, date) {
    state.date = date
  },
  setShareDates(state, dates) {
    state.dates = dates
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
