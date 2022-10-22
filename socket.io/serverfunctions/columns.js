
const columns = block => {

  let field = block.field

    , translate = {
      js: ['String', 'Date', 'Boolean', 'Number'],
      sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
    }

    , arrColumns = field.map((field) => {

      // vou precisar desses valores para gravar a entidade na table block
      let name = field.name
        //, privacy = field.privacy
        , type = translate.sql[translate.js.indexOf(field.type)]
        , length = field.length
        , required = field.nullrequired
        //, shareable = field.shareable
        , isForeingKey = name.substring(0, 3) === 'id_'

      if (isForeingKey) { type = 'INT' }

      if (length) { length = `(${length})` } else { length = '' }

      if (required) { required = 'NULL' } else { required = 'NOT NULL' }

      return `${field.name} [${type}]${length} ${required}\n`

    })

  return arrColumns

}

module.exports = columns