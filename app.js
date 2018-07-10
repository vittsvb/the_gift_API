'use strict'
require('dotenv').config()
const express = require('express')
const cfenv = require('cfenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

let app = express()
let appEnv = cfenv.getAppEnv()

// Configuração Express
app.use(morgan('dev'))
// Declarando que as rotas receberão JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//Permitindo o uso de CORS para requisição em outro domínio.
app.use(cors())

// Conectar ao DB
mongoose.connect(process.env.MONGO_URL)

//Rotas principais
const authRoutes = require('./routes/authRoutes')
app.use('/auth', authRoutes)

const chatRoutes = require('./routes/chatRoutes')
app.use('/chat', chatRoutes)

//Middleware de erro, todo erro deve ser lançado aqui
app.use((error, req, res, next) => {
    return res.status(500).json(error)
})

app.listen(appEnv.port, '0.0.0.0', function () {
    console.log('server starting on ' + appEnv.url + ' this app is running on a ' + process.env.ENVIRONMENT + ' mode')
})

module.exports = app