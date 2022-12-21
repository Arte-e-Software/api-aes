module.exports = payload => {

    let data = payload.data
        , erro = data.id_assinante === '' || data.id_assinante === undefined || data.nome === '' || data.nome === undefined || data.cpf === '' || data.cpf === undefined || data.email === '' || data.email === undefined || data.celular === '' || data.celular === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível gravar usuário, dados incompletos.' as mensagem`

    if (!erro) {

        query = `

        BEGIN TRAN
        INSERT INTO USUARIO VALUES
        (
            ${data.id_assinante},
            '${data.nome}',
            '${data.cpf}',
            '${data.email}',
            '${data.celular}',
            GETDATE(),
            1
        )
        IF @@ERRO = 0
        BEGIN
            SELECT 
                0 AS erro,
                'Usuário cadastrado com sucesso' as mensagem,
                @@IDENTITY AS id_usuario,
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
                id_usuario = @@IDENTITY
            COMMIT TRAN
        END
        ELSE
        BEGIN
            SELECT 1 AS erro, 'Não foi possível cadastrar usuário, tente novamente' as mensagem
            ROLLBACK TRAN
        END

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