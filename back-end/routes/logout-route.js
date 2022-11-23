const express = require('express')
    , router = express.Router()
    , jwt = require('jsonwebtoken')

module.exports = router.get('/logout', (req, res) => {

    return res
        .clearCookie('token')
        .status(200)
        .redirect('/')


})