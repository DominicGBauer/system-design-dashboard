import newShares from '../../../api/shares'
import * as utils from '../utils'

const getDefaultState = () => {
  return {
    shareTimeSeries: [],
    shareTableInfo: [],
    dates: [],
    date: [],
    share: [],
  }
}

const state = { ...getDefaultState(), shares: [] }

const getters = {
  getTransformedDates(state) {
    let newDates = []
    for (let quarter of state.dates) {
      newDates.push(quarter.quarter.slice(0, 8) + '01')
    }
    return newDates
  },
}

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
  setShareDate({ commit }, date) {
    commit('setShareDate', date)
  },
  setShare({ commit }, share) {
    commit('setShare', share)
  },
  resetState({ commit }) {
    commit('resetState')
  },
}

const mutations = {
  setShareTableInfo(state, shareTableInfo) {
    state.shareTableInfo = utils.transformTimeSeries(shareTableInfo)
  },
  setShareTimeSeries(state, shareTimeSeries) {
    state.shareTimeSeries = utils.transformTimeSeries(shareTimeSeries)
  },
  setShares(state, shares) {
    state.shares = shares
  },
  setShare(state, share) {
    state.share = share
  },
  setShareDate(state, date) {
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
