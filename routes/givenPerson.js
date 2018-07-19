var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    type: String,
    age: Number,
    profession: String,
    sex: String,
    hobbie: [String],
    value:Number,
    occasion:String
})

module.exports = mongoose.model(process.env.USER_SCHEMA, userSchema, process.env.USER_SCHEMA)