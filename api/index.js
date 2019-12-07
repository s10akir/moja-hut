const app = require('express')()

app.get('/', (req, res) => {
  res.json({ message: 'Hello Nuxt.js' })
})

module.exports = {
  path: '/api',
  handler: app
}
