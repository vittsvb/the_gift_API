var Product = require('../models/product')

let recomendProduct = function (caracteristicas) {
    return new Promise(async function (resolve, reject) {
        try {
            let products = await Product.find({pessoa: caracteristicas[0]})
            return resolve(products)
        } catch (err) {
            reject('Erro ao recomendar produto: ' + err)
        }
    })
}

module.exports = {
    recomendProduct: recomendProduct
}