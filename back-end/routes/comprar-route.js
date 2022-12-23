const express = require('express')
    , router = express.Router()

module.exports = router.get('/comprar', (req, res) => {

    res.render('pages/comprar-view', { "title": 'Compra e venda de Aço' })

})