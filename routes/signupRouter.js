//  SIGNUPROUTER.js
// TEst de Creacion de REST API FUL con CRUD
// Fecha : 11-08-21
// SOLICITANTE . EMPRESA OZE PRODCCIONES
// AUTOR : ABNER DAVID NUÑEZ

// DECLARANDO REQUIERE DE EXPPRESS + MONGO DB
const express = require('express');
const bodyParser = require('body-parser');
const signupRouter = express.Router();
const User = require('../model/model');

signupRouter.use(bodyParser.json());

signupRouter.route('/')

.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //res.end('Will send all the signup to you!');
    User.find()
    .then(list => {
        res.json(list);
    });
})
.post((req, res, next) => {
    
    res.setHeader('Content-Type', 'application/json');
    //res.end('Will add the signup: ' + req.body.name + ' with details: ' + req.body.description);
    const userData = req.body;
    console.log("*********   *", userData);

    const newUser = new User(req.body);
    res.statusCode = 201;
    
    newUser.save()
    .then(data => {
        res.json(data);
    });
})

// DEFINICION DE CRUD `REST API PARA _ID
signupRouter.route('/:_Id')

.all(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    //res.writeHead(200, {'Content-Type': 'application/json'});
    next();
})
.get(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
      
    const id = req.params._Id;
    User.findOne({ _id: id })
    .then(data => {
        res.json(data);
    });
})


.patch(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const id = req.params._Id;
    User.findOneAndUpdate({ _id: id }, req.body, {new: true})
    .then(data => {
        res.json(data);
    });
    
})
.delete(function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const id = req.params._Id;
    User.deleteOne({ _id: id })
    .then(data => {
        res.json(data);
    });
});
  
  

module.exports = signupRouter;