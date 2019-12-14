const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');


//Inicializa o app
const app = express();
app.use(express.json()); // Permite o uso de get e post com JSON
app.use(cors()); //Libera acesso publico a API

//inicializa o DB
mongoose.connect('mongodb://localhost:27017/nodeapi');

//carrega models
requireDir('./src/models');

//Primeira requisicao
app.use('/api', require('./src/routes'));

app.listen(3001);  