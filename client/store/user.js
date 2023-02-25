export default {
  state () {
    return {
      user: {},
      hasRecords: false
    }
  },
  actions: {
    getUserData ({ commit, dispatch }) {
      fetch('/api/user')
        .then(res => res.json())
        .then((userData) => {
          const userId = {
            userId: userData.user.id
          }
          commit('setUserData', userData)
          dispatch('categories/getCategories', userId, { root: true })
        })
    }
  },
  mutations: {
    setUserData (state, userData) {
      state.user = userData.user
      state.hasRecords = userData.hasRecords
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
      return state.hasRecords
    },
    userLogin (state) {
      return state.user.login
    }
  }
}
