const express = require('express')
const router = express.Router()
const controller = require('../controller')

module.exports = router.post('/api', (req, res) => {

  // Só aceito os métodos GET e POST

  let payload = req.body.payload
    , erro = payload === ''

  if (erro) {

    res.json({ mensagem: 'Payload vazio' })

  } else {

    controller(payload, res)

  }

  /**
   * A estrutura das requisições devem ser:
   * 
   * A API aguarda um objeto chamado PAYLOAD E SÓ SUPORTA O MÉTODO POST
   * 
   * A rota trata PAYLOAD vazio ou ausente e retornar erro
   * 
   * O controller recebe o payload, chama o model, trata, e retornar para a rota tratar o res
   * 
   */

  /*

  payload = {
   
    entidade: "nome da entidade",
    cruds: "operação de cruds solicitada",
    data: {
    "campos da entidade tratadas na operação cruds"
    }
  
  }

  */

}

)