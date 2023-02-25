<template>
  <div class="timeline-costs__head">
    <div class="timeline-costs__years">
      <div
        v-for="(timelineItem, index) in timeline"
        :key="index"
        class="timeline-costs__year"
        :class="{'active': timelineItem.year === currentYear}"
        @click="changeCurrentYear(timelineItem.year)"
      >
        {{ timelineItem.year }}
      </div>
    </div>
    <div
      v-if="currentYear"
      class="timeline-costs__months"
    >
      <div
        v-for="(month, index) in months"
        :key="index"
        class="timeline-costs__month"
        :class="{'active': month.month === currentMonth}"
        @click="changeCurrentMonth(month.month)"
      >
        {{ month.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TimelineLine',
  data () {
    return {
      currentYear: 0,
      currentMonth: 0
    }
  },
  computed: {
    ...mapGetters({
      timeline: 'timelineCosts/timeline',
      lastYear: 'timelineCosts/lastYear',
      lastMonth: 'timelineCosts/lastMonth',
      userId: 'user/userId'
    }),
    months () {
      return this.timeline.find(timelineItem => timelineItem.year === this.currentYear)?.months
    },
    checkValidDiagramData () {
      return this.currentYear > 0 && this.currentMonth > 0
    }
  },
  watch: {
    lastYear () {
      this.changeCurrentYear(this.lastYear)
    },
    lastMonth () {
      this.changeCurrentMonth(this.lastMonth)
    }
  },
  mounted () {
    this.$store.dispatch('timelineCosts/getTimeline', { userId: this.userId })
    this.changeCurrentYear(this.lastYear)
    this.changeCurrentMonth(this.lastMonth)
  },
  methods: {
    changeCurrentYear (year) {
      this.currentYear = year
      this.currentMonth = this.timeline.find(timelineItem => timelineItem.year === this.currentYear)?.months.at(-1)?.month
      this.changeDiagram()
    },
    changeCurrentMonth (month) {
      this.currentMonth = month
      this.changeDiagram()
    },
    changeDiagram () {
      if (this.checkValidDiagramData) {
        this.$emit('change-timeline-period', { year: this.currentYear, month: this.currentMonth, userId: this.userId })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-costs {
  &__head {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__years, &__months {
    display: flex;
    gap: 15px;
  }

  &__year, &__month {
    cursor: pointer;

    &.active {
      color: red;
    }
  }
}
</style>
