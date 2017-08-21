const nunjucks = require('nunjucks')
const express = require('express')
const app = express()

const index = require('../route/index')

nunjucks.configure('view', {
  autoescape: true,
  express: app
})

app.use(express.static('./asset'))

app.use('/', index)

module.exports = app