const { Router } = require('express');
const { check } = require('express-validator');
const { crearAsistente } = require('../controllers/asistentes.controller');
const { existeEvento } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/', [
  check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
  check('matricula', 'La Matrícula es obligatoria').not().isEmpty(),
  check('registro', 'La Fecha de registro es obligatoria').not().isEmpty(),
  check('evento', 'No es un ID válido').isMongoId(),
  check('evento').custom(existeEvento),
  validarCampos
], crearAsistente);


module.exports = router;