const express = require('express')
  , router = express.Router()

module.exports = router.get('/login', (req, res) => {

  res.render('pages/login-view', { "title": 'Compra e venda de Aço' })

})