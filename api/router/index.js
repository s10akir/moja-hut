const router = require('express').Router()

const v1Router = require('./v1/index.js')

router.get('/', (req, res) => {
  res.json({ message: 'Hello Nuxt.js' })
})

router.use('/v1', v1Router)

module.exports = router
