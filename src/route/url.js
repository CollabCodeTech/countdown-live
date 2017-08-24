const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log('body', req.body)
})

module.exports = router