var user = require("../models/user")


let addDeslike = function(userid, prodId){

    return new Promise(async function(resolve,reject){

        try{

            resolve(user.findOneAndUpdate({
                _id: userid
            }, {
                $push: {
                    deslikes: prodId
                }
            }, {
                fields: {
                    password: 0,
                    __v: 0
                }
            }))


        } catch(err){
            reject("Erro ao adicionar não favorito",err)
        }


    })

}

let removeDeslike = function(userid, prodId){

    return new Promise(async function(resolve,reject){

        try{

            resolve(user.findOneAndUpdate({
                _id: userid
            }, {
                $pull: {
                    deslikes: prodId
                }
            }, {
                fields: {
                    password: 0,
                    __v: 0
                }
            }))


        } catch(err){
            reject("Erro ao remover não Favorito",err)
        }


    })

}


module.exports = {
    addDeslike : addDeslike,
    removeDeslike : removeDeslike
}