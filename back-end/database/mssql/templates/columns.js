module.exports = block => {

  let translate = {
    js: ['String', 'Date', 'Boolean', 'Number'],
    sql: ['VARCHAR', 'DATETIME', 'BIT', 'Float']
  }
    , columns = block.field.map(field => {

      return field

    })

  return columns

}