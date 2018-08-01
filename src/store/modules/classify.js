import api from '../../api'

// initial state
const state = {
  classifyData: []
}
// getters
const getters = {}
// actions
const actions = {
  getClassify ({ commit }) {
    api.getClassifyData(res => {
      commit('setClassify', res)
    })
  }
}
// mutations
const mutations = {
  setClassify (state, classifyData) {
    // console.log(classifyData)
    state.classifyData = classifyData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
