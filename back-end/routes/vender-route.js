const express = require('express')
    , router = express.Router()

module.exports = router.get('/vender', (req, res) => {

    res.render('pages/vender-view', { "title": 'Compra e venda de Aço' })

})