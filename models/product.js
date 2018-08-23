var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
    idade: Object,
    sexo: [String],
    profissao_hobbie: String,
    presenteado: [String],
    ocasiao: [String],
    descricao: String,
    imagens: [String]
})

module.exports = mongoose.model(process.env.PRODUCT_SCHEMA, productSchema, process.env.PRODUCT_SCHEMA)
