var user = require("../models/user")


let addLike = function(userid, prodId){

    return new Promise(async function(resolve,reject){

        try{

            resolve(user.findOneAndUpdate({
                _id: userid
            }, {
                $push: {
                    likes: prodId
                }
            }, {
                fields: {
                    password: 0,
                    __v: 0
                }
            }))


        } catch(err){
            reject("Erro ao adicionar Favorito",err)
        }


    })

}

let removeLike = function(userid, prodId){

    return new Promise(async function(resolve,reject){

        try{

            resolve(user.findOneAndUpdate({
                _id: userid
            }, {
                $pull: {
                    likes: prodId
                }
            }, {
                fields: {
                    password: 0,
                    __v: 0
                }
            }))


        } catch(err){
            reject("Erro ao remover Favorito",err)
        }


    })

}

let findAllLikesbyUser = function(userid){

    return new Promise(async function(resolve,reject){

        try{
            
            user = await user.findById(userid)
            
            resolve(user.likes)


        } catch(err){
            reject("Erro ao buscar Favoritos",err)
        }


    })

}


module.exports = {
    addLike : addLike,
    removeLike : removeLike,
    findAllLikesbyUser : findAllLikesbyUser
}