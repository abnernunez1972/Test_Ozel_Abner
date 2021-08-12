//  Index.js
// TEst de Creacion de REST API FUL con CRUD
// Fecha : 11-08-21
// SOLICITANTE . EMPRESA OZE PRODCCIONES



// DECLARANDO REQUIERE DE EXPPRESS + MONGO DB
const express = require('express');
const mongoose = require('mongoose');

http = require('http');

// PARAMETROS GLOBALES O SETTINGS - DECLARACIO DE MODULES O MIDDLEWARE 
const hostname = 'ec2-18-116-85-186.us-east-2.compute.amazonaws.com';
const port = 3000;
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// VINCULACION O ACTIVACION DE MODULOS 
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


// DECLARACION DE RUTA PRIMARIA PARA MODULO SIGNUP
const signupRouter = require('./routes/signupRouter');
app.use('/signup', signupRouter);

// DECLARACION Y CREACIO DE SERVIDOR NODE.JS CON EXPRESS Y MONGO DB
const server = http.createServer(app);


// CONECTANDO CON MONGODB A TRAVES DE SERVICIO DE DB ATLAS MONGODB
mongoose
	.connect("mongodb+srv://abner:abner@cluster0.y9pjg.mongodb.net/ozelTest?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
    console.log("[db] connected");
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
		
	})
