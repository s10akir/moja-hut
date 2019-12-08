const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({ message: '/api/v1' })
})

module.exports = router
