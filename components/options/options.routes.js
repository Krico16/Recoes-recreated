const express = require('express')
const app = express();
const optionController = require('./options.controller')

app.post('/api/option', optionController.createOption)

app.post('/api/option/:id', optionController.getOptionByQuestionId)

module.exports = app