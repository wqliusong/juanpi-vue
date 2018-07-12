import api from '../../api'

// initial state
const state = {
  swiperData: [],
  multiData: [],
  listData: []
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
  getScrollData ({ commit }) {
    api.getHomeList(res => {
      commit('setScollData', res)
    })
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
  setScollData (state, list) {
    console.log(list)
    state.listData = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
