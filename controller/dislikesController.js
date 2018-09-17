var GivenPerson = require('../models/givenPerson')

let addDislike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let updatedGivenPerson = await GivenPerson.findOneAndUpdate({
                _id: givenPersonId
            }, {
                $addToSet: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(updatedGivenPerson)
        } catch (err) {
            reject('Erro ao adicionar rejeitado: ' + err)
        }
    })
}

let removeDislike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            resolve(GivenPerson.findOneAndUpdate({
                _id: givenPersonId
            }, {
                $pull: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            }))
        } catch (err) {
            reject('Erro ao remover rejeitado: ' + err)
        }
    })
}

let findAllDislikesByUser = function (givenPersonId) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findById(givenPersonId)
            resolve(givenPerson.deslikes)
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