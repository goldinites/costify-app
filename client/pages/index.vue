<template>
  <div class="period">
    <div class="period__years">
      <div
        v-for="(year, key) in years"
        :key="key"
        class="period__years-item glass-item"
        :class="{'active-year': key === activeYear}"
        @click="setYear(key)"
      >
        {{ year }}
      </div>
    </div>
    <div class="period__months">
      <div
        v-for="(month, key) in months"
        :key="key"
        class="period__months-item glass-item"
        :class="{'active-month': key === activeMonth}"
        @click="setMonth(key)"
      >
        {{ month }}
      </div>
    </div>
    <VDoughnut />
  </div>
</template>

<script>
import VDoughnut from '@/components/ui/VDoughnut'
export default {
  name: 'IndexPage',
  components: { VDoughnut },
  data () {
    return {
      years: ['2020', '2021', '2022'],
      months: ['Январь', 'Февраль', 'Март'],
      activeYear: 0,
      activeMonth: 0
    }
  },
  methods: {
    setYear (key) {
      this.activeYear = key
    },
    setMonth (key) {
      this.activeMonth = key
    }
  }

}
</script>

<style lang="scss" scoped>
.period {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.period__years, .period__months {
  display: flex;
  gap: 15px;
}
.period__years-item, .period__months-item {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 15px;

  &.active-month, &.active-year {
    background: $default-gradient;
    color: $white;
    box-shadow: none;
  }
}
</style>
