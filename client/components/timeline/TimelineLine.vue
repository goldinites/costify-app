<template>
  <div class="timeline-costs__head">
    <div class="timeline-costs__head-title">
      <h2 class="timeline-costs__head-title-text">
        Ваши графики расходов по
      </h2>
      <div class="timeline-costs__head-title-filter">
        <div class="select">
          <VueSelect
            v-model="currentFilter"
            :options="filter"
            label="filterName"
            :clearable="false"
            :searchable="false"
            @input="updateFilterHandler"
          />
        </div>
      </div>
    </div>
    <div class="timeline-costs__line">
      <div class="select">
        <VueSelect
          v-if="currentYear && years"
          v-model="currentYear"
          :options="years"
          :clearable="false"
          :searchable="false"
          @input="changeCurrentYear($event)"
        />
      </div>
      <div class="select">
        <VueSelect
          v-if="currentMonth && months"
          v-model="currentMonth"
          :options="months"
          label="name"
          :clearable="false"
          :searchable="false"
          @input="changeCurrentMonth($event)"
        />
      </div>
      <div class="select">
        <VueSelect
          v-if="currentDay && days"
          v-model="currentDay"
          :options="days"
          :clearable="false"
          :searchable="false"
          @input="changeCurrentDay($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueSelect } from 'vue-select'

export default {
  name: 'TimelineLine',
  components: { VueSelect },
  data () {
    return {
      currentYear: 0,
      currentMonth: 0,
      currentDay: 0,
      filter: [
        {
          filterValue: 'years',
          filterName: 'Годам'
        },
        {
          filterValue: 'months',
          filterName: 'Месяцам'
        },
        {
          filterValue: 'days',
          filterName: 'Дням'
        }
      ],
      currentFilter: {}
    }
  },
  computed: {
    ...mapGetters({
      timeline: 'timelineCosts/timeline',
      lastYear: 'timelineCosts/lastYear',
      lastMonth: 'timelineCosts/lastMonth',
      lastDay: 'timelineCosts/lastDay',
      userId: 'user/userId'
    }),
    years () {
      return this.timeline.map((timelineItem, i) => {
        return this.timeline[i].year
      })
    },
    months () {
      if (this.currentFilter.filterValue !== 'years') {
        return this.timeline.find((timelineItem) => {
          return timelineItem.year === this.currentYear
        })?.months
      } else {
        return []
      }
    },
    days () {
      if (this.currentFilter.filterValue === 'days') {
        return this.currentMonth.days
      } else {
        return []
      }
    },
    checkValidDiagramData () {
      if (this.currentFilter.filterValue === 'years' && !!this.currentYear) {
        return true
      } else if (this.currentFilter.filterValue === 'months' && !!this.currentYear && !!this.currentMonth) {
        return true
      } else {
        return this.currentFilter.filterValue === 'days' && !!this.currentYear && !!this.currentMonth && !!this.currentDay
      }
    }
  },
  watch: {
    lastYear () {
      this.changeCurrentYear(this.lastYear)
    },
    lastMonth () {
      this.changeCurrentMonth(this.lastMonth)
    },
    lastDay () {
      this.changeCurrentDay(this.lastDay)
    }
  },
  mounted () {
    this.currentFilter = this.filter[1]
    this.updateFilterHandler(this.currentFilter)

    this.changeCurrentYear(this.lastYear)
    this.changeCurrentMonth(this.lastMonth)
    this.changeCurrentDay(this.lastDay)
  },
  methods: {
    changeCurrentYear (year) {
      this.currentYear = year
      if (this.months) {
        this.currentMonth = this.months.at(-1)
        if (this.days) {
          this.currentDay = this.days.at(-1)
        }
      }
      this.changeDiagram()
    },
    changeCurrentMonth (month) {
      this.currentMonth = month
      if (this.days) {
        this.currentDay = this.days.at(-1)
      }
      this.changeDiagram()
    },
    changeCurrentDay (day) {
      this.currentDay = day
      this.changeDiagram()
    },
    changeDiagram () {
      if (this.checkValidDiagramData) {
        this.$emit('change-timeline-period', {
          year: this.currentYear,
          month: this.currentMonth?.month,
          day: this.currentDay,
          userId: this.userId
        })
      }
    },
    updateFilterHandler (event) {
      this.currentFilter = event
      if (this.currentYear !== this.lastYear) {
        this.changeCurrentYear(this.lastYear)
      }
      this.$store.dispatch('timelineCosts/getTimeline', {
        userId: this.userId,
        periodFilter: this.currentFilter.filterValue
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'vue-select/dist/vue-select.css';

.timeline-costs {
  &__head {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__line {
    display: flex;
    gap: 25px;
  }
}
</style>
