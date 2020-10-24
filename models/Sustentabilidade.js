mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb+srv://julio:passwordomega@cluster0.8eibu.mongodb.net/omega?retryWrites=true&w=majority')

const Sustentabilidade = new Schema({

    nome:{
        type: String,
        require: true
    },
    preco:{
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    }

})

mongoose.model('sustentabilidade', Sustentabilidade)



const novo = mongoose.model('sustentabilidade')

new novo({

    nome: 'sustentabilidade 1',
    preco: '32.30',
    img: 'images/serv9.jpg'

}).save()