import { createStore } from 'vuex'

export default createStore({
  state: {
    testTime: 113
  },
  getters: {
    testTime (state) {
      return state.testTime
    }
  },
  mutations: {
    changeTime (state, payload) {
      console.log('mutations:', payload)
      state.testTime = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
