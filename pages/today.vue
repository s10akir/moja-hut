<template>
  <div
    class="container text-center d-flex justify-content-center align-items-center"
  >
    <div class="w-100">
      <h1>Today's Logs</h1>
      <LineChart :chartData="logs | toChart" :options="chartOption" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import LineChart from '~/components/LineChart'

export default {
  components: {
    LineChart
  },
  filters: {
    toChart(logs) {
      const collection = {
        labels: [],
        datasets: []
      }

      const temperature = {
        label: 'temperature',
        borderColor: '#f0ad4e',
        data: [],
        radius: 0,
        fill: false
      }

      const humidity = {
        label: 'humidity',
        borderColor: '#1f9bcf',
        data: [],
        radius: 0,
        fill: false
      }

      logs.forEach((log) => {
        collection.labels.push(log.created_at.slice(11, 16))
        temperature.data.push(Math.round(log.temperature * 10) / 10)
        humidity.data.push(Math.round(log.humidity * 10) / 10)
      })

      const margin = 60 * 24 - logs.length
      for (let i = 0; i < margin; i++) {
        collection.labels.push('')
        temperature.data.push(null)
        humidity.data.push(null)
      }

      collection.datasets.push(temperature)
      collection.datasets.push(humidity)

      return collection
    }
  },
  data() {
    return {
      // 初期データ
      logs: [
        {
          created_at: '',
          temperature: 0,
          humidity: 0
        }
      ],
      timers: [],
      chartOption: {
        scales: {
          xAxes: [
            {
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                autoSkip: true,
                maxTicksLimit: 12
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    // DHT22
    this.getTodayLogs()
    this.timers.push(setInterval(this.getTodayLogs, 1000 * 60))
  },
  destroyed() {
    this.timers.forEach((timer) => {
      clearInterval(timer)
    })
  },
  methods: {
    getTodayLogs() {
      axios.get('/api/v1/dht22/today').then((res) => {
        this.logs = res.data
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
