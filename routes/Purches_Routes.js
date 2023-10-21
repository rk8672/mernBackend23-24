const express = require('express');
const router = express.Router();
const productController = require('../controllers/Purches_Controller');

// Create a new product
router.post('/createPurches', productController.createProduct);

// Get a list of all products
router.get('/', productController.getAllProducts);

// Get a specific product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
