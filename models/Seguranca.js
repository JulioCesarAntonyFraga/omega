mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb+srv://julio:passwordomega@cluster0.8eibu.mongodb.net/omega?retryWrites=true&w=majority')

const Seguranca = new Schema({

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

mongoose.model('seguranca', Seguranca)

