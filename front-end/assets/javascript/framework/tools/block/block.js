let block = (name, namespace, field) => {
    return {
        name: name,
        namespace: namespace,
        field: field
    }
}
const field = (index, name, required, unique, shareable, type, privacy, hashable) => {
    return {
        "index": index,
        "name": name,
        "settings": {
            "required": required,
            "unique": unique,
            "shareable": shareable,
            "type": type,
            "privacy": privacy,
            "hashable": hashable
        }
    }
}
const settings = namespace => {
    namespace = namespace.map(field => { return field.trim() })
    let settings = []
    for (let index in namespace) {
        settings.push(`<tr>
                            <td>
                                <input class="form-control bg-transparent is-valid" type="text" id="${namespace[index]}-name-input" value="${namespace[index]}" readonly>
                            </td>
                            <td class="text-center">
                                <select id="required-${index}" class="form-control form-select bg-transparent is-valid true-or-false select-required true-or-false" aria-label="This index is Required" type="checkbox">
                                    <option value="true" selected>Sim</option>
                                    <option value="false">Não</option>
                                </select>    
                            </td>
                            <td class="text-center">
                                <select id="unique-${index}" class="form-control form-select bg-transparent is-valid true-or-false select-unique true-or-false" aria-label="unique" aria-label="This index is Unique" type="checkbox">
                                    <option value="true" selected>Sim</option>
                                    <option value="false">Não</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <select id="shareable-${index}" class="form-control form-select bg-transparent is-valid true-or-false select-shareable true-or-false" aria-label="This index is shareable" type="checkbox">
                                    <option value="true" selected>Sim</option>
                                    <option value="false">Não</option>
                                </select>       
                            </td>
                            <td class="text-center">
                                <select id="type-${index}" class="form-control form-select bg-transparent is-valid select-type" aria-label="This index Datatype" index type="checkbox">
                                    <option value="string">Texto</option>    
                                    <option value="number">Número</option>
                                    <option value="date">Data</option>
                                    <option value="boolean">Sim ou Não</option>
                                    <option value="array">Lista</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <select id="privacy-${index}" class="form-control form-select bg-transparent is-valid select-privacy" aria-label="This index Privacy" type="checkbox">
                                    <option value="personal">Pessoal</option>
                                    <option value="commercial">Comercial</option>
                                    <option value="sensitive" selected>Sensível</option>
                                    <option value="public">Público</option>
                                    <option value="anonymized">Anonimizado</option>
                                </select>
                            </td>
                            <td class="text-left">
                                <select id="hashable-${index}" class="form-control form-select bg-transparent is-valid true-or-false select-hashable true-or-false" aria-label="This index is Hashable" type="checkbox">
                                    <option value="true">Sim</option>
                                    <option value="false" selected>Não</option>
                                </select>
                            </td>
                        </tr>`)
    }

    return `
            <div class="table-responsive mt-2 mb-0">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Propriedade</th>
                        <th>Obrigatório</th>
                        <th>Único</th>
                        <th>Compartilhável</th>
                        <th>Tipo</th>
                        <th>Privacidade</th>
                        <th>Criptografado</th>
                        </th>
                    </tr>
                </thead>
                <tbody>${settings.join('')}</tbody>
            </table>
            </div>
            `
}
/**
 * block-sql
 * 
 * block | sql, json
 * ======
 * id_entity
 * name
 * namespace
 * crdate
 * isactive
 * 
 * 
 * index
 * =====
 * id_entity | sql, json
 * index_index
 * name
 * required
 * unique
 * hashable
 * shareable
 * listable
 * type []
 * crdate
 * isactive
 * 
 * 
 * form | sql, json
 * ====
 * id_form
 * id_entity
 * index_index
 * lable
 * placeholder 
 * tag
 * component
 * style
 * readonly
 * filter
 * crdate
 * isactive
 * 
 * 
 * value | sql
 * =====
 * id_value
 * id_entity
 * index_index
 * value
 * crdate
 * isactive
 * 
 * // Todo nome de campo iniciado com id_ é entendido como chave extrangeira
 * // Caso a entidade mãe não exista, é criado como nullable
 * // Caso a entidade exista, o comando READ e SEARCH retornam os campos do JOIN
 * // Caso a relação seja de 1:N, os comandos READ e SEARCH retornam um array
 * 
 * #issue: não pensei direito nisso ainda 15/10/2021 - Pedro Silva
 * // Num formuário, um campo configurado como LISTABLE
 * 
 * 
 * ___________ COMANDO block-SQL _____________________
 * 
 * INFO [block]
 * // retorna json da block além do total de registros
 * 
 * NAMESPACE [block]
 * // retorna um array com namespace do objeto block
 * 
 * indexS [block]
 * // retorna um array de objetos index da block
 * 
 * FORM [block]
 * // retorna, em HTML, o código e a view, de todos os indexs da block
 * 
 *  
 * SELECT [apelido.campo, ...]
 * FROM [entidade][AS apelido] 
 * [JOIN entidade AS apelido ON [apelido.block-left-index] = [apelido.block-right-index]] // retorna registro todos os registros que atendam à pesquisa
 * [LEFT JOIN entidade AS apelido ON [apelido.block-left-index] = [apelido.block-right-index]] // retorna todos da esquerda, mesmo não havendo na direita
 * WHERE
 * [apelido.index] = '[value]' 
 * AND [apelido.index] = [value]
 * ORDER BY
 * [apelido.index [ASC/DESC], ...]
 * => json
 * OR
 * => csv
 * OR
 * => table
 * OR
 * => view [NAME]
 * OR
 * => app [NAME]
 *  
 */