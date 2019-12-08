const router = require('express').Router()

const dht22 = require('../../../controller/dht22')

router.get('/', dht22.last)

module.exports = router
