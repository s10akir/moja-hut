const app = require('express')()

const v1Router = require('./v1')

app.get('/', (req, res) => {
  res.json({ message: 'Hello Nuxt.js' })
})

app.use('/v1', v1Router)

module.exports = {
  path: '/api',
  handler: app
}
