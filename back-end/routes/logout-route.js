const express = require('express')
    , router = express.Router()

module.exports = router.get('/logout', (req, res) => {

    return res
        .clearCookie('token')
        .status(200)
        .redirect('/')

})