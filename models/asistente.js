const { Schema, model } = require('mongoose');

const AsistenteSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  matricula: {
    type: Number,
    unique: true,
    required: [true, 'La matrícula es obligatorio'],
  },
  registro: {
    type: Date,
    required: [true, 'La hora de registro es obligatoria'],
  }
})


module.exports = model('Asistente', AsistenteSchema);