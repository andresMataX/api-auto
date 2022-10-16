const { response } = require('express');

const Evento = require('../models/evento');

const obtenerEventos = (req, res = response) => {
  res.json({
    msg: 'get - eventos'
  })
}


module.exports = {
  obtenerEventos
}