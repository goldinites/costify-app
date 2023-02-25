<template>
  <div class="timeline-costs">
    <TimelineLine @change-timeline-period="updateTimelinePeriod($event)" />
    <div class="timeline-costs__body">
      <div class="timeline-costs__diagram">
        <VDoughnut :chart-data="diagram" />
      </div>
      <div class="timeline-costs__categories">
        <div
          v-for="(category,index) in categories"
          :key="index"
          class="timeline-costs__category-wrapper"
        >
          <TimelineCategory :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TimelineLine from '@/components/timeline/TimelineLine'
import TimelineCategory from '@/components/timeline/TimelineCategory'
import VDoughnut from '@/components/ui/VDoughnut'

export default {
  name: 'TimelineCosts',
  components: { VDoughnut, TimelineCategory, TimelineLine },
  data () {
    return {
      year: 0,
      month: 0
    }
  },
  computed: {
    ...mapGetters({
      categories: 'timelineCosts/categories',
      diagram: 'timelineCosts/diagram'
    })
  },
  methods: {
    updateTimelinePeriod (event) {
      this.year = event.year
      this.month = event.month
      this.$store.dispatch('timelineCosts/getCurrentPeriod', event)
    }
  }

}
</script>

<style lang="scss" scoped>
.timeline-costs {
  &__body {
    display: flex;
    margin-top: 40px;
  }
  &__diagram, &__categories {
    flex: 1;
  }
}
</style>
