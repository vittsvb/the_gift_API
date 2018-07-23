const controller = require("../controller/dislikesController")

let router = require('express').Router()

router.post('/adddeslike', (async (req, res, next) => {

    try {

        let result = controller.addDeslike(req.body.userid, req.body.prodid)

        res.json({
            message: 'Favorito cadastrado com sucesso'
        }
        )


    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/removedeslike', (async (req, res, next) => {

    try {

        let result = controller.removeDeslike(req.body.userid, req.body.prodid)

        res.json({
            message: 'Favorito removido com sucesso'
        }
        )


    } catch (err) {
        return next({
            message: err
        })
    }


}))

router.post('/findalldeslikesbyuser', (async (req, res, next) => {

    try {

        let result = await controller.findAllDeslikesByUser(req.body.userid)

        res.json(result)


    } catch (err) {
        return next({
            message: err
        })
    }


}))


module.exports = router