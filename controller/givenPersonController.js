var User = require('../models/user')
var GivenPerson = require('../models/givenPerson')

let registerGivenPerson = function (type, age, profession, sex, hobbie, presentValue, occasion, likes, dislikes) {
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

            return resolve(newGivenPerson.save())

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
let addLike = function (id, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(id, {
                $addToSet: {
                    likes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}
let removeLike = function (id, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(id, {
                $pull: {
                    likes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}
let addDislike = function (id, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(id, {
                $addToSet: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}
let removeDislike = function (id, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let givenPerson = await GivenPerson.findByIdAndUpdate(id, {
                $pull: {
                    dislikes: prodid
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(givenPerson)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
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