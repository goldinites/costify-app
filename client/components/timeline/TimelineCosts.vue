<template>
  <div class="timeline-costs">
    <TimelineLine @change-timeline-period="updateTimelinePeriod($event)" />
    <div class="timeline-costs__body">
      <div class="timeline-costs__diagram">
        <VDoughnut :chart-data="diagram" />
      </div>
      <div class="timeline-costs__categories">
        <TimelineCategoriesList :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TimelineLine from '@/components/timeline/TimelineLine'
import VDoughnut from '@/components/ui/VDoughnut'
import TimelineCategoriesList from '@/components/timeline/TimelineCategoriesList'

export default {
  name: 'TimelineCosts',
  components: {
    TimelineCategoriesList,
    VDoughnut,
    TimelineLine
  },
  computed: {
    ...mapGetters({
      categories: 'timelineCosts/categories',
      diagram: 'timelineCosts/diagram'
    })
  },
  methods: {
    updateTimelinePeriod (event) {
      this.$store.dispatch('timelineCosts/getCurrentPeriod', event)
    }
  }

}
</script>

<style lang="scss" scoped>
.timeline-costs {
  &__body {
    display: flex;
    gap: 70px;
    margin-top: 40px;
  }

  &__diagram, &__categories {
    flex: 1;
  }
}
</style>
