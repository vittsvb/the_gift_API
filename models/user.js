var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    givenPersons: [{type: mongoose.Schema.Types.ObjectId, ref: process.env.GIVENPERSON_SCHEMA}]
})

module.exports = mongoose.model(process.env.USER_SCHEMA, userSchema, process.env.USER_SCHEMA)
