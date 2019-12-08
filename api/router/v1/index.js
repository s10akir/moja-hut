const router = require('express').Router()

const dht22Router = require('./dht22')

router.get('/', (req, res) => {
  res.json({ message: '/api/v1' })
})

router.use('/dht22', dht22Router)

module.exports = router
