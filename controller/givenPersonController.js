var User = require('../models/user')
var GivenPerson = require('../models/givenPerson')

let registerGivenPerson = function (userid, type, age, profession, sex, hobbie, presentValue, occasion) {
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
                occasion: occasion
            })

            newGivenPerson = await newGivenPerson.save()

            let updatedUser = User.findByIdAndUpdate(userid, {
                $push: {
                    givenPersons: newGivenPerson._id
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(updatedUser)

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

let findallGivenPersonByUser = function (userid) {
    return new Promise(async function (resolve, reject) {
        try {

            let newUser = await User.findById(userid)
            let givenPersons = await GivenPerson.find({
                _id: {
                    $in: newUser.givenPersons
                }
            })
            
            return resolve(givenPersons)

        } catch (err) {
            return reject('Erro ao selecionar presenteados: ' + err)
        }
    })
}



module.exports = {
    registerGivenPerson: registerGivenPerson,
    deleteGivenPerson: deleteGivenPerson,
    findallGivenPersonByUser: findallGivenPersonByUser
}