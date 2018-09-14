const controller = require('../controller/givenPersonController')

let router = require('express').Router()

router.post('/register', (async (req, res, next) => {
    try {
        let result = await controller.registerGivenPerson(req.body.type, req.body.age, req.body.profession, req.body.sex, req.body.hobbie, req.body.presentValue, req.body.occasion,req.body.likes,req.body.dislikes)

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

router.post('/addlike', (async (req, res, next) => {
    try {
        
        let result = await controller.addLike(req.body._id,req.body.prodid)
        
        res.json({
            message: 'like recebidos com sucesso',
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
        let result = await controller.removeLike(req.body._id,req.body.prodid)
        
        res.json({
            message: 'like removid com sucesso',
            data: result
        })
        
    } catch (err) {
        return next({
            message: err
        })
    }
}))
router.post('/adddeslike', (async (req, res, next) => {
    try {
        let result = await controller.addDeslike(req.body._id,req.body.prodid)
        
        res.json({
            message: 'deslike recebidos com sucesso',
            data: result
        })
        
    } catch (err) {
        return next({
            message: err
        })
    }
}))
router.post('/removedeslike', (async (req, res, next) => {
    try {
        let result = await controller.removeDeslike(req.body._id,req.body.prodid)
        
        res.json({
            message: 'deslike removido com sucesso',
            data: result
        })
        
    } catch (err) {
        return next({
            message: err
        })
    }
}))

module.exports = router