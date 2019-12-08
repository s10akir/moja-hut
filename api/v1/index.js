const Router = require('express').Router

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '/api/v1' })
})

module.exports = router
