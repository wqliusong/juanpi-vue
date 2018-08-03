import api from '../../api'

// initial state
const state = {
  goodsData: []
}
// getters
const getters = {}
// actions
const actions = {
  getGoodsData ({ commit }, id) {
    console.log(id)
    api.getGoodsData(res => {
      commit('setGoods', res)
    }, id)
  }
}
// mutations
const mutations = {
  setGoods (state, goodsData) {
    // console.log(classifyData)
    state.goodsData = goodsData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
