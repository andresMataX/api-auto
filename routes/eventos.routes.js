const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerEventos, crearEvento, actualizarEvento } = require('../controllers/eventos.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', obtenerEventos);

router.post('/', [
  check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
  check('fecha', 'La Fecha es obligatoria').not().isEmpty(),
  validarCampos
], crearEvento);

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  // TODO: Custom
  check('asistencia', 'El número actualizado de asistentes es obligatorio.'),
  validarCampos
], actualizarEvento);


module.exports = router;