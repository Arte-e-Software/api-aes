const express = require('express')
  , router = express.Router()

module.exports = router.get('/', (req, res) => {

  let domain = req.rawHeaders[1]

  console.log(domain)

  if (domain === 'https://aes.tec.br') {

    res.render('pages/aes', { "title": 'Arte & Software Tecnologia', "req": req })

  } else {

    res.render('pages/home-view', { "title": 'Compra e venda de Aço', "req": req })

  }



})