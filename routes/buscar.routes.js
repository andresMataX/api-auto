const { Router } = require('express');
const { buscar } = require('../controllers/buscar.controller');

const router = Router();

router.get('/:evento', buscar);


module.exports = router;