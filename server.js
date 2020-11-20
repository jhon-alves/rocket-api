const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  'mongodb+srv://root:root@cluster0.khuwt.mongodb.net/products?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);