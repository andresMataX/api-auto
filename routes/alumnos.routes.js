const { Router, response } = require('express');

const router = Router();

router.get('/', (req, res = response) => {
  res.json({
    msg: 'get usuarios'
  })
})


module.exports = router;