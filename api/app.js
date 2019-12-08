const app = require('express')()

const router = require('./router')

app.use('/', router)

module.exports = {
  path: '/api',
  handler: app
}
