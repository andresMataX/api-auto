const { Router, response } = require('express');
const { obtenerEventos } = require('../controllers/eventos.controller');

const router = Router();

router.get('/', obtenerEventos);


module.exports = router;