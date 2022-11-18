const islogged = require('./auth-islogged')
    , login = require('./auth-login')
    , logout = require('./auth-logout')

auth = {
    islogged: islogged,
    login: login,
    logout: logout
}

module.exports = auth