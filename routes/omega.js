const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/Eletrica')
const Eletrica = mongoose.model('eletrica')

require('../models/Hidraulica')
const Hidraulica = mongoose.model('hidraulica')

require('../models/Seguranca')
const Seguranca = mongoose.model('seguranca')

require('../models/Sustentabilidade')
const Sustentabilidade = mongoose.model('sustentabilidade')


router.get('/', function(req, res){

    res.render('omega/home',{

        style: 'home.css'

    })

})

router.get('/produtos', function(req, res){

    res.render('omega/produtos', {

        style: 'produtos.css'

    })

})

router.get('/servicos', function(req, res){

    res.render('omega/servicos',{

        style: 'servicos.css'

    })

})


router.get('/produtos/eletrica', function(req, res){

    Eletrica.find().lean().then(function(eletrica){

        res.render('omega/eletrica', {

            eletrica:eletrica,
            style: 'produtos.css'
        
        })

    })

})

router.get('/produtos/hidraulica', function(req, res){

    Hidraulica.find().lean().then(function(hidraulica){

        res.render('omega/hidraulica', {

            hidraulica:hidraulica,
            style: 'produtos.css'
        
        })

    })

})

router.get('/produtos/seguranca', function(req, res){

    Seguranca.find().lean().then(function(seguranca){

        res.render('omega/seguranca', {

            seguranca:seguranca,
            style: 'produtos.css'
        
        })

    })

})

router.get('/produtos/sustentabilidade', function(req, res){

    Sustentabilidade.find().lean().then(function(sustentabilidade){

        res.render('omega/sustentabilidade', {

            sustentabilidade:sustentabilidade,
            style: 'produtos.css'
        
        })

    })

})


module.exports = router