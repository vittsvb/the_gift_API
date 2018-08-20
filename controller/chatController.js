var AssistantV1 = require('watson-developer-cloud/assistant/v1')

var assistant = new AssistantV1({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version: '2018-02-16'
})

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