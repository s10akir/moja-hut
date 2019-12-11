<template>
  <div class="container">
    <div>
      <logo />
      <h1>
        moja-hut
      </h1>
      <h3>
        meow meow, I'm a Cat.
      </h3>
      <p>
        temperature: {{ logs[0].temperature | round }} °C<br />
        humidity: {{ logs[0].humidity | round }} %
        <br />
        last updated: {{ logs[0].created_at }}
      </p>
      <a href="/api/v1/dht22/today" class="btn btn-primary">View Today Logs</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  filters: {
    round(value) {
      return Math.round(value * 10) / 10
    }
  },
  data() {
    return {
      // 初期データ
      logs: [
        {
          temperature: '-',
          humidity: '-'
        }
      ],
      timers: []
    }
  },
  mounted() {
    // DHT22
    this.getLastLogs()
    this.timers.push(setInterval(this.getLastLogs, 1000 * 60))
  },
  destroyed() {
    this.timers.forEach((timer) => {
      clearInterval(timer)
    })
  },
  methods: {
    getLastLogs() {
      axios.get('/api/v1/dht22').then((res) => {
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
