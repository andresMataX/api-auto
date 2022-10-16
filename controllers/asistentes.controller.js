const { response } = require('express');

const Asistente = require('../models/asistente');

const crearAsistente = async (req, res = response) => {

  const { nombre, matricula, evento } = req.body;

  const matriculaDB = await Asistente.findOne({ matricula });

  if (matriculaDB) {
    return res.status(400).json({
      msg: `La matrícula ${matriculaDB.matricula}, ya existe`
    })
  }

  const data = {
    nombre,
    matricula,
    registro: new Date(),
    evento
  }

  const asistente = new Asistente(data);

  await asistente.save();

  res.status(201).json(asistente);
}


module.exports = {
  crearAsistente,
}