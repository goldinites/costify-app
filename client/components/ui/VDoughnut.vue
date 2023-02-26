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
  },
  data () {
    return {
      chartDataDemo: {
        data: {
          labels: ['Тест 1', 'Тест 2', 'Тест 3'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['violet', 'royalblue', 'darkcyan'],
              data: [33, 33, 33]
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
            }
          }
        }
      }
    }
  }
}
</script>
