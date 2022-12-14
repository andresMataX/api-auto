const { response } = require('express');

const Evento = require('../models/evento');

const obtenerEventos = async (req, res = response) => {

  const eventos = await Evento.find();

  res.json({ eventos });
}

const crearEvento = async (req, res = response) => {

  const nombre = req.body.nombre.toUpperCase();
  const fecha = req.body.fecha.toUpperCase();

  const eventoDB = await Evento.findOne({ nombre });

  if (eventoDB) {
    return res.status(400).json({
      msg: `El Evento ${eventoDB.nombre}, ya existe.`
    })
  }

  const data = {
    nombre,
    fecha
  }

  const evento = new Evento(data);

  await evento.save();

  res.status(201).json(evento);
}

const actualizarEvento = async (req, res = response) => {

  const id = req.params.id;

  let { asistencia, ...resto } = await Evento.findById(id);

  asistencia = asistencia + 1;

  const evento = await Evento.findByIdAndUpdate(id, { asistencia }, { new: true });

  res.json(evento);
}

module.exports = {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
}