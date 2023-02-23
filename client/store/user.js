export default {
  state () {
    return {
      user: {}
    }
  },
  actions: {
    getUserData ({ commit, dispatch }) {
      fetch('/api/user')
        .then(res => res.json())
        .then((userData) => {
          const userId = {
            userId: userData.id
          }
          commit('setUserData', userData)
          dispatch('categories/getCategories', userId, { root: true })
        })
    }
  },
  mutations: {
    setUserData (state, userData) {
      state.user = userData
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userId (state) {
      return state.user.id
    },
    userLogin (state) {
      return state.user.login
    }
  }
}
