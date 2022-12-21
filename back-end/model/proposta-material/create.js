module.exports = paylod => {

    let data = paylod.data
        , erro = data.id_proposta === '' || data.id_proposta === undefined || data.id_codigo_material === '' || data.id_codigo_material === undefined || data.prazo_de_entrega === '' || data.prazo_de_entrega === undefined
        , query = `SELECT 1 AS erro, 'Não foi possível cadastrar proposta material. Dados incompletos' as mensagem`

    // só pra deixar a linha menor
    if (erro) {
        erro = data.preco === '' || data.preco === undefined || data.forma_de_pagamento === '' || data.forma_de_pagamento === undefined || data.icms === '' || data.icms === undefined || data.ipi === '' || data.ipi === undefined || data.preco_final === '' || data.preco_final === undefined || data.fob_cif === '' || DataTransfer.fob_cif === undefined
    }


    if (!erro) {

        query = `
        
            BEGIN TRAN

            INSERT INTO PROPOSTA_MATERIAL VALUES
            (
            ${id_proposta},
            ${id_codigo_material},
            '${prazo_de_entrega}',
            ${preco},
            '${forma_de_pagamento}',
            ${icms},
            ${ipi},
            ${preco_final},
            '${fob_cif}',
            GETDATE(),
            1
            )

            IF @@ERROR = 0 
            BEGIN

                SELECT 
                    0 AS erro,
                    'Proposta material cadastrada com sucesso.' as mensagem,
                    @@IDENTITY AS id_proposta_material,
                    id_proposta,
                    id_codigo_material,
                    prazo_de_entrega,
                    preco,
                    forma_de_pagamento,
                    icms,
                    ipi,
                    preco_final,
                    fob_cif,
                    crdate,
                    isactive
                FROM
                    PROPOSTA_MATERIAL
                WHERE
                    id_proposta_material = @@IDENTITY

                COMMIT TRAN
            END
            ELSE
            BEGIN

                SELECT 1 AS erro, 'Não foi possível cadadastrar proposta material, tente novamente.'    
                ROLLBACK TRAN

            END

        `

    }

    return query

}



/*
id_proposta_material
id_proposta
id_codigo_material
prazo_de_entrega
preco
forma_de_pagamento
icms
ipi
preco_final
fob_cif
crdate
isactive
*/
