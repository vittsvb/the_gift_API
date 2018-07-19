var user = require('../models/user')
var givenPerson = require('../models/givenPerson')

let registerGivenPerson = function (userid, type, age, profession, sex, hobbie, value, occasion) {

    return new Promise(async function (resolve, reject) {
        try {
           
            
            //Cria o novo presenteado
            var newGivenPerson = new givenPerson({
                type = type,
                age = age,
                profession = profession,
                sex = sex,
                hobbie = hobbie,
                value = value,
                occasion = occasion
            })

            var insGivenPerson = await newGivenPerson.save()

            if (insGivenPerson){
                user.findByIdAndUpdate(userid,{$set: { givenPerson: insGivenPerson._id }})
            }
            
            return resolve('Salvo com sucesso',true)

        } catch (err) {
            return reject('Erro ao registrar presenteado', err)
        }
    })

}
