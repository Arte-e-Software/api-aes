const express = require('express'),
    router = express.Router()

module.exports = router.get('/foc/boleto', (req, res) => {

    res.render('pages/foc/boleto', { "title": 'Grupo Tree - Advocacia | Serviços Imobiliários | Tecnologia ', "req": req })

})