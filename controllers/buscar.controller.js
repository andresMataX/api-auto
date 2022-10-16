const { response } = require("express");
const Asistente = require("../models/asistente");

const Evento = require('../models/evento');

const buscar = async (req, res = response) => {

  const { evento } = req.params;

  const regex = new RegExp(evento, 'i');

  const eventos = await Evento.find({ nombre: regex });

  let idEventos = [];
  eventos.map((evento) => {
    idEventos.push(evento._id.toString());
  });
  console.log(idEventos);

  const asistentes = await Asistente.find({ evento: idEventos[0] });

  res.json({
    results_eventos: eventos,
    results_asistentes: asistentes,
  })
}


module.exports = {
  buscar
};