const { response } = require('express');

const Evento = require('../models/evento');

const obtenerEventos = async (req, res = response) => {

  const eventos = await Evento.find();

  res.json(eventos);
}


module.exports = {
  obtenerEventos
}