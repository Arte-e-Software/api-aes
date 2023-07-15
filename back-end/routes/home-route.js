const express = require('express')
  , router = express.Router()

module.exports = router.get('/', (req, res) => {

  let domain = req.rawHeaders[1]

  console.log(domain)

  if (domain === 'aes.tec.br') {

    res.render('pages/aes', { "title": 'API-AES - Login', "req": req })

  } else {

    res.render('pages/home-view', { "title": 'API-AES - Login', "req": req })

  }



})