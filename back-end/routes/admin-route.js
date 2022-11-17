const express = require('express')
  , router = express.Router()

module.exports = router.get('/admin', (req, res) => {

  res.render('pages/admin-view', { "title": 'Compra e venda de Aço', "req": req })

})