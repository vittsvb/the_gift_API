var mongoose = require('mongoose')

var givenPersonSchema = new mongoose.Schema({
    type: String,
    age: Number,
    profession: String,
    sex: String,
    hobbie: String,
    presentValue: Number,
    occasion: String,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'ramoAtividade'}],
    dislikes: [{type: mongoose.Schema.Types.ObjectId, ref: 'ramoAtividade'}]
})

module.exports = mongoose.model(process.env.GIVENPERSON_SCHEMA, givenPersonSchema, process.env.GIVENPERSON_SCHEMA)
