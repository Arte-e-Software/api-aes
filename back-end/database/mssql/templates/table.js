const fs = require('fs')
const package = require('../../../../socket.io/package')
const table = (socket, method, module, block) => {

  let columns = require('./columns')(block)
    , name = block.name

  let template = false

  switch (module) {

    case 'create':
      template = require(`../templates/${module}-table`)(name, columns)
      break;

    default:
      template = false
      break;

  }

  if (template) {

    let file = `./back-end/blocks/${name}/.mssql/${module}-table.js`

    try {

      fs.writeFile(file, template, err => {

        if (err) {

          socket.emit('call', package(method, err, true))

        }

        socket.emit('call', package(method, file, false))

      })

    } catch (err) {

      socket.emit('call', package(method, err, true))

    }

  } else {

    let err = `template vazio: ${module}-table(${name})`
    socket.emit('call', package(method, err, true))

  }

}

module.exports = table