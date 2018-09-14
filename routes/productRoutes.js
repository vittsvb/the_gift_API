const controller = require('../controller/productsController')

let router = require('express').Router()

router.post('/register', (async (req, res, next) => {
    try {
        let result = await controller.addProduct(req.body.products)
        res.json({
            message: 'Produtos cadastrado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))

module.exports = router