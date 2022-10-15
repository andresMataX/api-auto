require('dotenv').config();
const express = require('express')
const app = express()
// const Server = require('./models/server');

// const server = new Server();
// server.listen();
app.get('/', function (req, res) {
  res.json({
    msg: "Cheto Chilosou!!!"
  })
})

app.listen(8080)