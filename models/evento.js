const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  fecha: {
    type: String,
    required: [true, 'La fecha del evento es obligatoria'],
  },
  asistencia: {
    type: Number,
    default: 0
  }
})


module.exports = model('Evento', EventoSchema);