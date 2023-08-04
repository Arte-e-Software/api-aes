const express = require('express')
    , router = express.Router()

module.exports = router.get('/api/v1/login', (req, res) => {

    let domain = req.get('origin')

    console.log(domain)

    if (domain === 'aes.tec.br') {

        res.render('pages/aes', { "title": 'API-AES - Login', "req": req })

    } else {

        res.render('pages/home-view', { "title": 'API-AES - Login', "req": req })

    }



})