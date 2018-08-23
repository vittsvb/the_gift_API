var AssistantV1 = require('watson-developer-cloud/assistant/v1')

var assistant = new AssistantV1({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version: '2018-02-16'
})

const productsController = require('./productsController')

let watsonTalk = function (text, context) {
    return new Promise(function (resolve, reject) {
        try {
            var payload = {
                workspace_id: process.env.WATSON_WORKSPACE,
                input: {},
                context: {}
            }
            if (text) {
                payload.input = {
                    text: text
                }
            }
            if (context) payload.context = context

            assistant.message(payload, async function (err, response) {
                if (err) {
                    reject(new Error(err))
                } else {
                    //TODO: Fazer condição para o "GENERO"
                    //if(response.context.presenteado && response.context.caracteristicas.indexOf(response.context.presenteado) === -1) response.context.caracteristicas.push(response.context.presenteado)

                    if (response.context.presenteado && !response.context.caracteristicas.presenteado) response.context.caracteristicas.presenteado = response.context.presenteado

                    if (response.context.idade && !response.context.caracteristicas.idade) response.context.caracteristicas.idade = response.context.idade

                    if (response.context.profissao && !response.context.caracteristicas.profissao) response.context.caracteristicas.profissao = response.context.profissao

                    if (response.context.hobbie && !response.context.caracteristicas.hobbie) response.context.caracteristicas.hobbie = response.context.hobbie

                    if (response.context.valor && !response.context.caracteristicas.valor) response.context.caracteristicas.valor = response.context.valor

                    if (response.context.ocasiao && !response.context.caracteristicas.ocasiao) response.context.caracteristicas.ocasiao = response.context.ocasiao

                    if (Object.keys(response.context.caracteristicas).length >= 1) {
                        let products = await productsController.recommendProduct(response.context.caracteristicas)
                        response.products = products
                    }

                    resolve(response)
                }
            })
        } catch (err) {
            reject('Erro no watson assistant: ' + err)
        }
    })
}

module.exports = {
    watsonTalk: watsonTalk
}