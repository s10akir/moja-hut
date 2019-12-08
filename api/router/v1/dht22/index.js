const router = require('express').Router()

const dht22 = require('../../../controller/dht22')

router.get('/', dht22.last)
router.get('/today', dht22.today)

module.exports = router
