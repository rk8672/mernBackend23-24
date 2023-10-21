const express = require('express');
const router = express.Router();
const customerController = require('../controllers/Single_Customer_Controller');

// Get customer data, payments, and products
router.get('/:customerId', customerController.getCustomerData);

module.exports = router;
