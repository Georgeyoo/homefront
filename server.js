const config = require('./config')
const logger = require('morgan')(':method :url :status :res[content-length] - :response-time ms')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// middleware
app.use(logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// service adapters
const Hue = require('./lib/HueService')(config.hue)

require('./routes/lights')(app, Hue);

module.exports = app;