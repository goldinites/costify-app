export default {
  state () {
    return {}
  },
  actions: {
    createCost ({ commit }, payload) {
      const costData = {
        ...payload,
        dayCreate: Math.abs(payload.date.split('.')[0]),
        monthCreate: Math.abs(payload.date.split('.')[1]),
        yearCreate: Math.abs(payload.date.split('.')[2])
      }
      this.$axios.post('/api/costs/create', costData)
        .then(cost => cost)
    }
  },
  mutations: {},
  getters: {}
}
