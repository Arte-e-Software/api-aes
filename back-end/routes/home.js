const express = require('express')
  , router = express.Router()

module.exports = router.get('/', (req, res) => {

  console.log('req.baseUrl')
  console.log(req.headers.host)

  res.render('pages/home', { "title": 'Compra e venda de Aço', "req": req })

})