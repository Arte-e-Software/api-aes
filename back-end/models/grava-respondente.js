module.exports = (nome, email, celular) => {

    let query = `

          EXEC GRAVA_RESPONDENTE '${nome}', '${email}', '${celular}'
    
    `
    return query

}