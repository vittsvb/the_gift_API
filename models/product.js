var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
    idade: Object,
    sexo: [String],
    profis_hobbie: String,
    pessoa: [String],
    ocasiao: [String],
    descricao: String,
    imagens: [String]
})

module.exports = mongoose.model(process.env.PRODUCT_SCHEMA, productSchema, process.env.PRODUCT_SCHEMA)
