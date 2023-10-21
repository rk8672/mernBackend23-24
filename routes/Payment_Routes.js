const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/Payment_Controller');

// Create a new payment
router.post('/createPayment', paymentController.createPayment);

// Get a list of all payments
router.get('/', paymentController.getAllPayments);

// Get a specific payment by ID
router.get('/:id', paymentController.getPaymentById);

// Update a payment by ID
router.put('/:id', paymentController.updatePayment);

// Delete a payment by ID
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
