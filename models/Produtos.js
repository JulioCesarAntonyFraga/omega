mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb+srv://julio:passwordomega@cluster0.8eibu.mongodb.net/omega?retryWrites=true&w=majority')

const Produto = new Schema({

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

mongoose.model('produtos', Produto)

const novoProduto = mongoose.model('produtos')

new novoProduto({

    nome: 'novo produto',
    preco: '40.00',
    img: 'images/serv2.jpg'

}).save()