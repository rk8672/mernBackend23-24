const Payment = require('../models/Payment_Model');

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const { customerId, amount, date } = req.body;

    const payment = new Payment({
      customerId,
      amount,
      date,
    });

    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment' });
  }
};

// Get a list of all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payments' });
  }
};

// Get a specific payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payment' });
  }
};

// Update a payment by ID
exports.updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, req.body, {
      new: true,
    });
    if (!updatedPayment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(updatedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating payment' });
  }
};

// Delete a payment by ID
exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const deletedPayment = await Payment.findByIdAndRemove(paymentId);
    if (!deletedPayment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(deletedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting payment' });
  }
};
