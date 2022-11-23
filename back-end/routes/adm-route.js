const express = require('express')
    , router = express.Router()

module.exports = router.get('/adm', (req, res) => {

    res.render('pages/adm-view', { "title": 'Compra e venda de Aço' })

})