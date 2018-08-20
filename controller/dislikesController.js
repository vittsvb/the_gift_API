var User = require('../models/user')

let addDislike = function (userid, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let newUser = User.findOneAndUpdate({
                _id: userid
            }, {
                $addToSet: {
                    deslikes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })
            
            return resolve(newUser)
        } catch (err) {
            reject('Erro ao adicionar rejeitado: ' + err)
        }
    })
}

let removeDislike = function (userid, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            resolve(User.findOneAndUpdate({
                _id: userid
            }, {
                $pull: {
                    deslikes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            }))
        } catch (err) {
            reject('Erro ao remover rejeitado: ' + err)
        }
    })
}

let findAllDislikesByUser = function (userid) {
    return new Promise(async function (resolve, reject) {
        try {
            let newUser = await User.findById(userid)
            resolve(newUser.deslikes)
        } catch (err) {
            reject('Erro ao buscar não Favorito: ' + err)
        }
    })
}

module.exports = {
    addDislike: addDislike,
    removeDislike: removeDislike,
    findAllDislikesByUser: findAllDislikesByUser
}