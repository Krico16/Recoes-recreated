const express = require('express')
const app = express();
const UserController = require('./user.controller')

app.post('/api/user', UserController.createAlumn)

app.get('/api/user', UserController.authenticate)

app.get('/api/test', async (req, res) => {
    res.json({ done: true, message: "Bienvenido" })
})

module.exports = app