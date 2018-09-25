const controller = require('../controller/givenPersonController')

let router = require('express').Router()

router.post('/register', (async (req, res, next) => {
    try {
        let result = await controller.registerGivenPerson(req.body.type, req.body.age, req.body.profession, req.body.sex, req.body.hobbie, req.body.presentValue, req.body.occasion, req.body.likes, req.body.dislikes)

        res.json({
            message: 'Presenteado cadastrado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))

router.post('/delete', (async (req, res, next) => {
    try {
        let result = await controller.deleteGivenPerson(req.body.givenPersonId)

        res.json({
            message: 'Presenteado deletado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))

router.post('/addLike', (async (req, res, next) => {
    try {

        let result = await controller.addLike(req.body.givenPersonId, req.body.prodid)

        res.json({
            message: 'Like cadastrado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))
router.post('/removeLike', (async (req, res, next) => {
    try {
        let result = await controller.removeLike(req.body.givenPersonId, req.body.prodid)

        res.json({
            message: 'Like deletado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))
router.post('/addDislike', (async (req, res, next) => {
    try {
        let result = await controller.addDislike(req.body.givenPersonId, req.body.prodid)

        res.json({
            message: 'Dislike cadastrado com sucesso',
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
            message: 'Dislike deletado com sucesso',
            data: result
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))
router.post('/getGivenPersonById', (async (req, res, next) => {
    try {
        let result = await controller.getGivenPersonById(req.body.givenPersonId)

        res.json({
            message: "Given Person retornados com sucesso",
            data: result
        })
    } catch (err) {
        return next({
            message: err
        })
    }
}))
module.exports = router
