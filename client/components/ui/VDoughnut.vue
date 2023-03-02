<template>
  <Doughnut :chart-data="chartData" />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'VDoughnut',
  components: { Doughnut },
  props: {
    chartData: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
