export default {
  state () {
    return {
      user: {}
    }
  },
  actions: {
    getUserData ({ commit }) {
      this.$axios.get('/api/user')
        .then((userData) => {
          commit('setUserData', userData.data)
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
