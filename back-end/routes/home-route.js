const express = require('express')
  , router = express.Router()

module.exports = router.get('/', (req, res) => {

  res.render('pages/home-view', { "title": 'Compra e venda de Aço', "req": req })

})