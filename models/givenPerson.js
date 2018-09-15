var mongoose = require('mongoose')

var givenPersonSchema = new mongoose.Schema({
    type: String,
    age: Number,
    profession: String,
    sex: String,
    hobbie: String,
    presentValue: Number,
    occasion: String,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: process.env.PRODUCT_SCHEMA}],
    dislikes: [{type: mongoose.Schema.Types.ObjectId, ref: process.env.PRODUCT_SCHEMA}]
})

module.exports = mongoose.model(process.env.GIVENPERSON_SCHEMA, givenPersonSchema, process.env.GIVENPERSON_SCHEMA)
