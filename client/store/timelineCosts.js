export default {
  state () {
    return {
      timeline: [],
      lastYear: 0,
      lastMonth: 0
    }
  },
  actions: {
    getTimeline ({ commit }) {
      fetch('/api/timeline/getTimeline')
        .then(res => res.json())
        .then(timeline => commit('setTimeline', timeline))
    },
    getCurrentDiagram ({ commit }, payload) {
      // eslint-disable-next-line no-console
      console.log(payload)
    }
  },
  mutations: {
    setTimeline (state, timeline) {
      state.timeline = timeline
      state.lastYear = timeline.at(-1).year
      state.lastMonth = timeline.at(-1).months.at(-1).month
    }
  },
  getters: {
    timeline (state) {
      return state.timeline
    },
    lastYear (state) {
      return state.lastYear
    },
    lastMonth (state) {
      return state.lastMonth
    }
  }
}
