const express = require('express');
const ProductController = require('./controllers/ProductController');
const routes = express.Router();

const ProductControler = require('./controllers/ProductController');

// Primeira Rota
routes.get('/products', ProductControler.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;