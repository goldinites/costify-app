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

      fetch('api/costs/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(costData)
      })
        .then(res => res.json())
        .then((data) => {
          // eslint-disable-next-line no-console
          console.log(data)
        })
    }
    // getCostsOfCategory ({ commit }, payload) {
    //   fetch('/api/costs/getCostsOfCategory', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ id: payload.id })
    //   })
    //     .then(res => res.json())
    //     .then((costs) => {
    //       costs
    //     })
    // }
  },
  mutations: {},
  getters: {}
}
