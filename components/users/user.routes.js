const express = require('express')
const app = express();
const UserController = require('./user.controller')

app.post('/api/user/register', UserController.createAlumn)

app.post('/api/user/login', UserController.authenticate)

app.get('/api/test', async (req, res) => {
    res.json({ done: true, message: "Bienvenido" })
})

module.exports = app