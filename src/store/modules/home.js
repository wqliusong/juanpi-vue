import api from '../../api'

// initial state
const state = {
  swiperData: [],
  multiData: [],
  listDataZc: [],
  listDataDp: [],
  noZc: false,
  noDp: false,
  footerData: []
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
  },
  getFooterData ({ commit }) {
    api.getHomeData(res => {
      commit('setFooterData', res.data.menuInfo.app_menu.menulist)
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
  setScollDataZc (state, list) {
    console.log(!list)
    if (!list) {
      state.noZc = true
    } else {
      state.noZc = false
      state.listDataZc = state.listDataZc.concat(list)
    }
  },
  setScollDataDp (state, list) {
    console.log(list)
    if (!list) {
      state.noZc = true
    } else {
      state.noZc = false
      state.listDataDp = state.listDataDp.concat(list)
    }
  },
  setFooterData (state, footer) {
    console.log(footer)
    state.footerData = footer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
