export default {
  state () {
    return {
      categories: []
    }
  },
  actions: {
    getCategories ({ commit }, payload) {
      this.$axios.post('/api/categories/getCategories', payload)
        .then((categories) => {
          commit('setCategories', categories.data)
        })
    },
    createCategory ({ commit }, payload) {
      this.$axios.post('/api/categories/create', payload)
        .then((newCategory) => {
          commit('addCategory', newCategory.data)
        })
    },
    deleteCategory ({ commit }, payload) {
      this.$axios.post('/api/categories/deleteCategory', payload)
        .then(() => {
          commit('deleteCategory', payload)
        })
    }
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },
    addCategory (state, category) {
      state.categories.push(category)
    },
    deleteCategory (state, payload) {
      state.categories = state.categories.filter(category => category.id !== payload.id)
    }
  },
  getters: {
    categories (state) {
      return state.categories
    },
    categoriesNames (state) {
      const result = []
      state.categories.forEach(category => result.push(category.name))
      return result
    }
  }
}
