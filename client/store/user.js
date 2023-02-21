export default {
  state () {
    return {
      user: {}
    }
  },
  actions: {
    getUserData ({ commit }, payload) {
      commit('setUserData', payload)
    }
  },
  mutations: {
    setUserData (state, userData) {
      state.user = userData
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getUserId (state) {
      return state.user.id
    },
    getUserLogin (state) {
      return state.user.login
    }
  }
}
