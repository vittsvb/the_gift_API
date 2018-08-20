var User = require('../models/user')

let addLike = function (userid, prodid) {
    return new Promise(async function (resolve, reject) {
        try {
            let updatedUser = await User.findByIdAndUpdate(userid, {
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

            return resolve(updatedUser)
        } catch (err) {
            reject('Erro ao adicionar Favorito: ' + err)
        }
    })
}

let removeLike = function (userid, prodId) {
    return new Promise(async function (resolve, reject) {
        try {
            resolve(User.findOneAndUpdate({
                _id: userid
            }, {
                $pull: {
                    likes: prodId
                }
            }, {
                new: true,
                fields: {
                    password: 0,
                    __v: 0
                }
            }))
        } catch (err) {
            reject('Erro ao remover Favorito: ' + err)
        }
    })
}

let findAllLikesbyUser = function (userid) {
    return new Promise(async function (resolve, reject) {
        try {
            let user = await User.findById(userid)
            resolve(user.likes)
        } catch (err) {
            reject('Erro ao buscar Favoritos: ' + err)
        }
    })
}


module.exports = {
    addLike: addLike,
    removeLike: removeLike,
    findAllLikesbyUser: findAllLikesbyUser
}