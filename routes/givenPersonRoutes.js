const controller = require('../controller/givenPersonController')

let router = require('express').Router()

router.post('/registergivenperson', (async (req, res, next) => {
    
    try {
        
        let result = await controller.registerGivenPerson(req.body.userid, req.body.type, req.body.age, req.body.profession, req.body.sex, req.body.hobbie,req.body.presentValue, req.body.occasion)
        
        res.json({
            message: 'Presenteado cadastrado com sucesso'
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))

router.post('/deleteGivenPerson', (async (req, res, next) => {
    
    try {
        
        let result = await controller.deleteGivenPerson(req.body.givenPersonId)
        
        res.json({
            message: 'Presenteado deletado com sucesso'
        })

    } catch (err) {
        return next({
            message: err
        })
    }
}))





module.exports = router