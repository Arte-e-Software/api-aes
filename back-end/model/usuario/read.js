module.exports = payload => {

    let data = payload.data
        , erro = data.id_usuario === '' || data.id_usuario === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível ler USUARIO, dados incompletos' as mensagem`

    if (!erro) {

        // pensar em trabalhar o EOF aqui #issue

        query = `
        
        SELECT
            0 as erro,
            'USUARIO localizado com sucesso.' as mensagem,
            id_usuario,
            id_assinante,
            nome,
            cpf,
            email,
            celular,
            crdate,
            isactive            
        FROM
            USUARIO
        WHERE
            id_usuario = ${data.id_usuario}

`

    }

    return query

}

/*
id_usuario
id_assinante
nome
cpf
email
celular
crdate
isactive
*/