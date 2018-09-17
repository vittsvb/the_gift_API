const controller = require('../controller/likesController')

let router = require('express').Router()

router.post('/addlike', (async (req, res, next) => {

    try {
        let result = await controller.addLike(req.body.givenPersonId, req.body.prodid)
        res.json({
            message: 'Favorito cadastrado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/removelike', (async (req, res, next) => {

    try {
        let result = await controller.removeLike(req.body.givenPersonId, req.body.prodid)
        res.json({
            message: 'Favorito removido com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/findAll', (async (req, res, next) => {

    try {
        let result = await controller.findAllLikesbyGivenPerson(req.body.givenPersonId)
        res.json({
            message: 'Favoritos recebidos com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }


}))


module.exports = router