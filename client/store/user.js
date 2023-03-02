export default {
  state () {
    return {
      user: {}
    }
  },
  actions: {
    getUserData ({ commit }) {
      fetch('/api/user')
        .then(res => res.json())
        .then((userData) => {
          commit('setUserData', userData)
        })
    }
  },
  mutations: {
    setUserData (state, user) {
      state.user = user
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userId (state) {
      return state.user.id
    },
    hasRecords (state) {
      return state.user.hasRecords
    }
  }
}
