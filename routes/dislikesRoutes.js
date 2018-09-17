const controller = require("../controller/dislikesController")

let router = require('express').Router()

router.post('/addDislike', (async (req, res, next) => {

    try {
        let result = await controller.addDislike(req.body.givenPersonId, req.body.prodid)
        res.json({
            message: 'Rejeitado cadastrado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/removeDislike', (async (req, res, next) => {

    try {
        let result = await controller.removeDislike(req.body.givenPersonId, req.body.prodid)
        res.json({
            message: 'Rejeitado removido com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/findall', (async (req, res, next) => {

    try {
        let result = await controller.findAllDislikesByUser(req.body.givenPersonId)
        res.json({
            message: 'Rejeitado listado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))


module.exports = router