const express = require('express')
const app = express()

app.get('/gadgets', (request, response) => {
  app.sendFile('./gadgets.html', {root: __dirname})
})

module.exports = app
