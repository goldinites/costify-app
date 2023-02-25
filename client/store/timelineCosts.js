export default {
  state () {
    return {
      timeline: [],
      lastYear: 0,
      lastMonth: 0,
      categories: [],
      diagram: {}
    }
  },
  actions: {
    getTimeline ({ commit }, payload) {
      fetch('/api/timeline/getTimeline', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(timeline => commit('setTimeline', timeline))
    },
    getCurrentPeriod ({ commit }, payload) {
      fetch('/api/timeline/getCurrentPeriod', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((period) => {
          commit('setCurrentPeriod', period)
        })
    }
  },
  mutations: {
    setTimeline (state, timeline) {
      state.timeline = timeline
      state.lastYear = timeline.at(-1).year
      state.lastMonth = timeline.at(-1).months.at(-1).month
    },
    setCurrentPeriod (state, period) {
      state.categories = period.categories
      state.diagram = period.diagram
    }
  },
  getters: {
    timeline (state) {
      return state.timeline
    },
    categories (state) {
      return state.categories
    },
    diagram (state) {
      return state.diagram
    },
    lastYear (state) {
      return state.lastYear
    },
    lastMonth (state) {
      return state.lastMonth
    }
  }
}
