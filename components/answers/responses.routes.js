const express = require('express')
const app = express();

const ResponseController = require('./responses.controller')

app.post('/api/responses',ResponseController.submitResponse)

module.exports = app