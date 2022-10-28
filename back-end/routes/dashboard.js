const express = require('express')
  , router = express.Router()

module.exports = router.get('/dashboard', (req, res) => {

  res.render('pages/dashboard', { "title": 'Compra e venda de Aço', "req": req })

})