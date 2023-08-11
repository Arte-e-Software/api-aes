module.exports = (id_respondente, id_pergunta, resposta) => {

    let query = `

          EXEC GRAVA_resposta ${id_respondente}, ${id_pergunta}, '${resposta}'
    
    `

    return query

}