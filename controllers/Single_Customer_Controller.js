const Customer = require('../models/Registration_Model');
const Payment = require('../models/Payment_Model');
const Product = require('../models/Purches_Model');

// Get customer, payments, and products associated with the customer
exports.getCustomerData = async (req, res) => {
  try {
    const customerId = req.params.customerId; // Assuming you pass the customer ID as a parameter

    // Find the customer by ID
    const customer = await Customer.findById(customerId);
    
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Find all payments associated with the customer
    const payments = await Payment.find({ customerId: customerId });

    // Find all products associated with the customer
    const products = await Product.find({ customer: customerId });

    // Return the customer, payments, and products data
    res.json({
      customer: customer,
      payments: payments,
      products: products,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error fetching customer data' });
  }
};
