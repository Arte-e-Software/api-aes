const create = (block) => {

  let columns = require('./columns')(block)

  return `
    
    IF OBJECT_ID('${block.name}', 'U') IS NOT NULL;
    DROP TABLE ${block.name};
    CREATE TABLE ${block.name}
    (
    id_${block.name} INT IDENTITY(1,1) NOT NULL PRIMARY KEY
    ,${columns});
    `

}

module.exports = create