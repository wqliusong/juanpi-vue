import api from '../../api'

// initial state
const state = {
  swiperData: [],
  multiData: [],
  listDataZc: [],
  listDataDp: []
}
// getters
const getters = {}
// actions
const actions = {
  getSwiperData ({ commit }) {
    api.getHomeData(res => {
      commit('setSwiperData', res.data.adsInfo.slide_ads.config.slide)
    })
  },
  getMultiData ({ commit }) {
    api.getHomeData(res => {
      commit('setMultiData', res.data.adsInfo.block[0].multi_block)
    })
  },
  getScrollDataZc ({ commit }, page) {
    api.getHomeListZc(res => {
      commit('setScollDataZc', res)
      console.log(res)
    }, page)
  },
  getScrollDataDp ({ commit }, page) {
    api.getHomeListDp(res => {
      commit('setScollDataDp', res)
    }, page)
  }
}
// mutations
const mutations = {
  setSwiperData (state, swipers) {
    // console.log(swipers)
    state.swiperData = swipers
  },
  setMultiData (state, multi) {
    // console.log(multi)
    state.multiData = multi
  },
  setScollDataZc (state, list) {
    console.log(list)
    state.listDataZc = list
  },
  setScollDataDp (state, list) {
    console.log(list)
    state.listDataDp = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
