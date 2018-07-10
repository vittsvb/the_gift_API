const controller = require('../controller/chatController')
let router = require('express').Router()

router.post('/talk', async (req, res, next) => {
    try {
        let result = await controller.watsonTalk(req.body.text, req.body.context)
        res.json({
            message: 'Resposta do Watson recebida com sucesso',
            data: result
        })
    } catch (err) {
        return next({
            message: err
        })
    }
})

module.exports = router