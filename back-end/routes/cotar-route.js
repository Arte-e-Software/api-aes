const express = require('express')
    , router = express.Router()

module.exports = router.get('/cotar', (req, res) => {

    res.render('pages/cotar-view', { "title": 'Compra e venda de Aço' })

})