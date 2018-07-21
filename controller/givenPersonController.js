var user = require('../models/user')
var givenPerson = require('../models/givenPerson')

let registerGivenPerson = function (userid, type, age, profession, sex, hobbie, presentValue, occasion) {

    return new Promise(async function (resolve, reject) {

        try {
            //Cria o novo presenteado
            var newGivenPerson = new givenPerson({
                type: type,
                age: age,
                profession: profession,
                sex: sex,
                hobbie: hobbie,
                presentValue: presentValue,
                occasion: occasion
            })

            newGivenPerson = await newGivenPerson.save()

            let updatedUser = user.findOneAndUpdate({
                _id: userid
            }, {
                $push: {
                    givenPersons: newGivenPerson._id
                }
            }, {
                fields: {
                    password: 0,
                    __v: 0
                }
            })

            return resolve(updatedUser)

        } catch (err) {
            return reject('Erro ao registrar presenteado', err)
        }
    })

}

let deleteGivenPerson = function (givenPersonid) {
    return new Promise(async function (resolve, reject) {
        try {

            return resolve(givenPerson.findByIdAndRemove(givenPersonid))

        } catch (err) {
            
            return reject('Erro ao deletar presenteado', err)
        }
    })

}
let findallGivenPersonByUser = function (userid) {
    return new Promise(async function (resolve, reject) {
        try {
            
            let newUser =  await user.findById(userid)
            let givenPersons = await givenPerson.find({ _id: {$in :[newUser.givenPersons]}})
            

            return resolve(givenPersons)

        } catch (err) {
            
            return reject('Erro ao selecionar presenteados', err)
        }
    })

}



module.exports = {
    registerGivenPerson: registerGivenPerson,
    deleteGivenPerson: deleteGivenPerson,
    findallGivenPersonByUser:findallGivenPersonByUser
}
