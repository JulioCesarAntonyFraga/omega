const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Produtos')
const Produtos = mongoose.model('produtos')

router.get('/', function(req, res){

    res.render('omega/home',{

        style: 'home.css'

    })

})

router.get('/produtos', function(req, res){

    Produtos.find().lean().then(function(produtos){

        res.render('omega/produtos', {

            produtos:produtos,
            style: 'produtos.css'
        
        })

    })

})

router.get('/servicos', function(req, res){

    res.render('omega/servicos',{

        style: 'servicos.css'

    })

})


module.exports = router