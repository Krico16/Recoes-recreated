const express = require('express')

const app = express()

app.use(require('./users/user.routes'))
app.use(require('./questions/question.routes'))
app.use(require('./options/options.routes'))
app.use(require('./answers/responses.routes'))

module.exports = app