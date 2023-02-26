<template>
  <div class="timeline-costs__head">
    <div class="timeline-costs__head-title">
      <h2 class="timeline-costs__head-title-text">
        Ваши графики расходов по
      </h2>
      <div class="timeline-costs__head-title-filter">
        <VSelect
          :items="filter"
          :items-label="'filterName'"
          :begin-selected="filter[1]"
          @select="updateFilterHandler($event)"
        />
      </div>
    </div>
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
      v-if="currentMonth"
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
    <div
      v-if="currentDay"
      class="timeline-costs__months"
    >
      <div
        v-for="(day, index) in days"
        :key="index"
        class="timeline-costs__month"
        :class="{'active': day === currentDay}"
        @click="changeCurrentDay(day)"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VSelect from '@/components/ui/VSelect'

export default {
  name: 'TimelineLine',
  components: { VSelect },
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
        return this.months.find((month) => {
          return month.month === this.currentMonth
        })?.days
      } else {
        return []
      }
    },
    checkValidDiagramData () {
      if (this.currentFilter.filterValue === 'years' && !!this.currentYear) {
        return true
      } else if (this.currentFilter.filterValue === 'months' && !!this.currentYear && !!this.currentMonth) {
        return true
      } else if (this.currentFilter.filterValue === 'days' && !!this.currentYear && !!this.currentMonth && !!this.currentDay) {
        return true
      } else {
        return false
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
    this.changeCurrentYear(this.lastYear)
    this.changeCurrentMonth(this.lastMonth)
    this.changeCurrentDay(this.lastDay)
  },
  methods: {
    changeCurrentYear (year) {
      if (this.currentYear !== year) {
        this.currentYear = year
        if (this.months) {
          this.currentMonth = this.months.at(-1)?.month
          if (this.days) {
            this.currentDay = this.days.at(-1)
          }
        }
        this.changeDiagram()
      }
    },
    changeCurrentMonth (month) {
      if (this.currentMonth !== month) {
        this.currentMonth = month
        if (this.days) {
          this.currentDay = this.days.at(-1)
        }
        this.changeDiagram()
      }
    },
    changeCurrentDay (day) {
      if (this.currentDay !== day) {
        this.currentDay = day
        this.changeDiagram()
      }
    },
    changeDiagram () {
      if (this.checkValidDiagramData) {
        this.$emit('change-timeline-period', {
          year: this.currentYear,
          month: this.currentMonth,
          day: this.currentDay,
          userId: this.userId
        })
      }
    },
    updateFilterHandler (event) {
      this.currentFilter = event
      this.$store.dispatch('timelineCosts/getTimeline', {
        userId: this.userId,
        periodFilter: this.currentFilter.filterValue
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-costs {
  &__head {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &-title {
      display: flex;
      align-items: center;
      gap: 20px;
      &-filter {
        width: 170px;
      }
    }
  }

  &__years, &__months {
    display: flex;
    gap: 15px;
  }

  &__year, &__month {
    background: $glass_bg;
    padding: 8px 15px;
    border-radius: 12px;
    color: $white;
    cursor: pointer;
    @include font(15px, 20px);

    &:hover:not(.active) {
      box-shadow: 0 0 0 1px $border_color;
    }

    &.active {
      background: $default-gradient;
    }
  }
}
</style>
