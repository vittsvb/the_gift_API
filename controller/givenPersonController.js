var User = require('../models/user')
var GivenPerson = require('../models/givenPerson')

let registerGivenPerson = function (userId, type, age, profession, sex, hobbie, presentValue, occasion, likes, dislikes) {
    return new Promise(async function (resolve, reject) {
        try {
            //Cria o novo presenteado
            var newGivenPerson = new GivenPerson({
                type: type,
                age: age,
                profession: profession,
                sex: sex,
                hobbie: hobbie,
                presentValue: presentValue,
                occasion: occasion,
                likes: likes,
                dislikes: dislikes
            })

            newGivenPerson = await newGivenPerson.save()

            let updatedUser = await User.findByIdAndUpdate(userId, {
                $push: {
                    givenPersons: newGivenPerson._id
                }
            }, {
                new: true
            })

            return resolve(newGivenPerson)

        } catch (err) {
            return reject('Erro ao registrar presenteado: ' + err)
        }
    })

}

let deleteGivenPerson = function (givenPersonId) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = GivenPerson.findByIdAndDelete(givenPersonId)
            return resolve(givenPerson)
        } catch (err) {
            return reject('Erro ao deletar presenteado: ' + err)
        }
    })
}

let addLike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(givenPersonId, {
                $addToSet: {
                    likes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}

let removeLike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(givenPersonId, {
                $pull: {
                    likes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao remover Favorito: ' + err)
        }
    })
}

let addDislike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(givenPersonId, {
                $addToSet: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Rejeitado: ' + err)
        }
    })
}

let removeDislike = function (givenPersonId, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(givenPersonId, {
                $pull: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao remover Rejeitado: ' + err)
        }
    })
}


module.exports = {
    registerGivenPerson: registerGivenPerson,
    deleteGivenPerson: deleteGivenPerson,
    addLike: addLike,
    removeLike: removeLike,
    addDislike: addDislike,
    removeDislike: removeDislike
}