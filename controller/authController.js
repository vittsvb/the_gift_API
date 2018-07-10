var User = require('../models/user')
var bCrypt = require('bcrypt-nodejs')

let registerUser = function (name, email, password) {
    return new Promise(async function (resolve, reject) {
        try {
            //Verifica se o usuário já existe
            let usuario = await User.findOne({
                email: email
            })
            if (usuario) return reject('Email já cadastrado')

            //Cria e salva um novo usuário
            var newUser = new User({
                name: name,
                email: email,
                password: createHash(password)
            })
            return resolve(newUser.save())

        } catch (err) {
            return reject('Erro ao registrar usuário', err)
        }
    })
}

let loginUser = function (email, password) {
    return new Promise(async function (resolve, reject) {
        try {
            let usuario = await User.findOne({
                email: email
            })
            if (!usuario) return resolve(['Email não cadastrado', false])

            if (!isValidPassword(usuario, password)) {
                return resolve(['Senha incorreta', false])
            }
            
            resolve(['Senha correta', true])
        } catch (err) {
            reject('Erro no login do usuário', err)
        }
    })
}


// Gera um hash da senha usando o bCrypt
var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
}

// Valida senha com bCrypt
var isValidPassword = function (usuario, password) {
    return bCrypt.compareSync(password, usuario.password);
}

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser
}