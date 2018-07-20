var mongoose = require('mongoose')

var givenPersonSchema = new mongoose.Schema({
    type: String,
    age: Number,
    profession: String,
    sex: String,
    hobbie: String,
    presentValue: Number,
    occasion: String
})

module.exports = mongoose.model(process.env.GIVENPERSON_SCHEMA, givenPersonSchema, process.env.GIVENPERSON_SCHEMA)