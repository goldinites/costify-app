export default {
  state () {
    return {
      timeline: [],
      categories: [],
      diagram: {},
      lastYear: false,
      lastMonth: false,
      lastDay: false
    }
  },
  actions: {
    getTimeline ({ commit }, payload) {
      this.$axios.post('/api/timeline/getTimeline', payload)
        .then((timeline) => {
          commit('setTimeline', timeline.data)
        })
    },
    getCurrentPeriod ({ commit }, payload) {
      this.$axios.post('/api/timeline/getCurrentPeriod', payload)
        .then((period) => {
          commit('setCurrentPeriod', period.data)
        })
    }
  },
  mutations: {
    setTimeline (state, timeline) {
      state.timeline = timeline
      const hasYears = timeline.at(-1).year
      if (timeline && hasYears) {
        state.lastYear = timeline.at(-1).year
        const hasMonths = !!timeline.at(-1).months
        if (state.lastYear && hasMonths) {
          state.lastMonth = timeline.at(-1).months.at(-1)
          const hasDays = !!timeline.at(-1).months.at(-1).days
          if (state.lastMonth && hasDays) {
            state.lastDay = timeline.at(-1).months.at(-1).days.at(-1)
          } else {
            state.lastDay = false
          }
        } else {
          state.lastMonth = false
        }
      } else {
        state.lastYear = false
      }
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
    },
    lastDay (state) {
      return state.lastDay
    }
  }
}
