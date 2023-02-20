<template>
  <Doughnut :chart-data="chartDataDemo" />
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
      required: true
    }
  },
  data () {
    return {
      chartDataDemo: {
        labels: ['Тест 1', 'Тест 2', 'Тест 3'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['violet', 'royalblue', 'darkcyan'],
            data: [33, 33, 33]
          }
        ]
      }
    }
  }
}
</script>
