const nunjucks = require('nunjucks')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const index = require('../route/index')
const url = require('../route/url')

nunjucks.configure('view', {
  autoescape: true,
  express: app
})

app.use(express.static('./asset'))
app.use(bodyParser.json())

app.use('/', index)
app.use('/url/', url)

module.exports = app