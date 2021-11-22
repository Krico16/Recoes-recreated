const express = require('express');
const app = express();
const questionController = require('./question.controller');

app.post('/api/question', questionController.createQuestion)

app.get('/api/question', questionController.getAllQuestions)

app.get('/api/question/:id', questionController.getQuestion)

module.exports = app