var Product = require('../models/product')

let recommendProduct = function (caracteristicas) {
    return new Promise(async function (resolve, reject) {
        try {
            let query = {}
            if (caracteristicas.sexo) query.sexo = caracteristicas.sexo
            if (caracteristicas.presenteado) query.presenteado = caracteristicas.presenteado
            if (caracteristicas.idade) {
                query['idade.max'] = {
                    $gte: parseInt(caracteristicas.idade),
                }
                query['idade.min'] = {
                    $lte: parseInt(caracteristicas.idade),
                }
            }
            if (caracteristicas.profissao && caracteristicas.hobbie) {
                query['$or'] = [{
                    profissao_hobbie: caracteristicas.profissao
                    }, {
                    profissao_hobbie: caracteristicas.hobbie
                }]
            } else if (caracteristicas.profissao) {
                query.profissao_hobbie = caracteristicas.profissao
            } else if (caracteristicas.hobbie) {
                query.profissao_hobbie = caracteristicas.hobbie
            }
            if (caracteristicas.valor) {
                query.valor = {
                    $lte: parseInt(caracteristicas.valor)
                }
            }
            if (caracteristicas.ocasiao) query.ocasiao = caracteristicas.ocasiao

            console.log(query)

            let products = await Product.find(query, {
                presenteado: 0,
                idade: 0,
                sexo: 0,
                profis_hobbie: 0,
                ocasiao: 0
            })

            products.sort(function () {
                return 0.5 - Math.random()
            })

            return resolve(products)
        } catch (err) {
            reject('Erro ao recomendar produto: ' + err)
        }
    })
}

let addProduct = function (products) {
    return new Promise(async function (resolve, reject) {
        try {
            //Cria o novo presenteado
            let newProducts = await Product.insertMany(products)

            return resolve(products)
        } catch (err) {
            reject('Erro ao recomendar produto: ' + err)
        }
    })
}
module.exports = {
    recommendProduct: recommendProduct,
    addProduct: addProduct
}