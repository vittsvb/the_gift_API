const controller = require('../controller/authController')

let router = require('express').Router()

router.post('/register', (async (req, res, next) => {
    try {
        let result = await controller.registerUser(req.body.name, req.body.email, req.body.password)
        res.json({
            message: 'Usuário cadastrado com sucesso',
            data: {
                id: result._id,
                name: result.name,
                email: result.email
            }
        })
    } catch (err) {
        return next({
            message: err
        })
    }
}))

router.post('/login', (async (req, res, next) => {
    try {
        let result = await controller.loginUser(req.body.email, req.body.password)
        res.json({
            message: result[0],
            autenticado: result[1]
        })
    } catch (err) {
        return next({
            message: err
        })
    }
}))

module.exports = router