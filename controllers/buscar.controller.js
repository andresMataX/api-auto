const { response } = require("express");
const { ObjectId } = require("mongoose").Types;

const Evento = require('../models/evento');

const buscar = async (req, res = response) => {

  const { evento } = req.params;

  const regex = new RegExp(evento, 'i');

  const eventos = await Evento.find({ nombre: regex });

  let idEventos = []
  eventos.map((evento) => {
    idEventos.push(evento._id.toString());
  });
  console.log(idEventos);

  res.json({
    results_eventos: eventos,
    results_asistentes: eventos,
  })
}


module.exports = {
  buscar
};