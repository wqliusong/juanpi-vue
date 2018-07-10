import api from '../../api'

// initial state
const state = {
  swiperData: [],
  multiData: []
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
  }
}
// mutations
const mutations = {
  setSwiperData (state, swipers) {
    console.log(swipers)
    state.swiperData = swipers
  },
  setMultiData (state, multi) {
    console.log(multi)
    state.multiData = multi
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
