var GivenPerson = require('../models/givenPerson')

let addLike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let updatedGivenPerson = await GivenPerson.findByIdAndUpdate(givenPersonId, {
                $addToSet: {
                    likes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(updatedGivenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}

let removeLike = function (givenPersonId, prodId) {
    return new Promise(async function (resolve, reject) {
        try {
            let updatedGivenPerson = await GivenPerson.findOneAndUpdate({
                _id: givenPersonId
            }, {
                $pull: {
                    likes: prodId
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })
            
            resolve(updatedGivenPerson)
        } catch (err) {
            reject('Erro ao remover Favorito: ' + err)
        }
    })
}

let findAllLikesbyGivenPerson = function (givenPersonId) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findById(givenPersonId)
            resolve(givenPerson.likes)
        } catch (err) {
            reject('Erro ao buscar Favoritos: ' + err)
        }
    })
}


module.exports = {
    addLike: addLike,
    removeLike: removeLike,
    findAllLikesbyGivenPerson: findAllLikesbyGivenPerson
}