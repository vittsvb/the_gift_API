var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
})

module.exports = mongoose.model(process.env.USER_SCHEMA, userSchema, process.env.USER_SCHEMA)