const package = require('./package')

function api(socket, received) {

    /*

    let resource = received.resource
        , payload = received.payload
        , resource = payload.resource
        , workflow = payload.workflow
        , block = payload.block
        , module = payload.module
        , object = payload.object
        , template = `../back-end/${resource}/${workflow}/templates/${object}`

    try {

        let build = require(template)
        build(socket, method, module, block)

    } catch (err) {

        socket.emit('call', package(method, err, true))

    }
    */

}
module.exports = api