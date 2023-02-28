export default {
  state () {
    return {
      categories: []
    }
  },
  actions: {
    getCategories ({ commit }, payload) {
      // console.log(payload)
      fetch('/api/categories/getCategories', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((categories) => {
          commit('setCategories', categories)
        })
    },
    createCategory ({ commit }, payload) {
      fetch('/api/categories/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((newCategory) => {
          commit('addCategory', newCategory)
        })
    },
    deleteCategory ({ commit }, payload) {
      fetch('/api/categories/deleteCategory', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
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
