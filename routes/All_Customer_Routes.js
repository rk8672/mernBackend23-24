const express = require('express');
const router = express.Router();
const customerController = require('../controllers/All_Customer_Controller');

// Get data for all customers, including payments and products
router.get('/', customerController.getAllCustomersData);

module.exports = router;
