const express = require('express')
const app = express()

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const omega = require('./routes/omega')
const mongoose  = require('mongoose')

//config
    //template engine

        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //Mongoose
        mongoose.connect('mongodb+srv://julio:passwordomega@cluster0.8eibu.mongodb.net/omega?retryWrites=true&w=majority')

    //Public
        app.use(express.static('public'));


//Rotas
    app.use('/omega', omega)

const PORT = process.env.PORT || 8080

app.listen(PORT, function(){

    console.log('Servidor rodando na url http://localhost:8080')

})