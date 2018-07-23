const controller = require("../controller/likesController")

let router = require('express').Router()

router.post('/addlike', (async (req, res, next) => {

    try {

        let result = controller.addLike(req.body.userid, req.body.prodid)

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

router.post('/removelike', (async (req, res, next) => {

    try {

        let result = controller.removeLike(req.body.userid, req.body.prodid)

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

router.post('/findalllikesbyuser', (async (req, res, next) => {

    try {

        let result = await controller.findAllLikesbyUser(req.body.userid)

        res.json(result)


    } catch (err) {
        return next({
            message: err
        })
    }


}))


module.exports = router