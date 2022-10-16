const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerEventos, crearEvento } = require('../controllers/eventos.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', obtenerEventos);

router.post('/', [
  check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
  check('fecha', 'La Fecha es obligatoria').not().isEmpty(),
  validarCampos
], crearEvento);


module.exports = router;