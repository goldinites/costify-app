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
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
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
