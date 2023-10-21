const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  lambit_matra: {
    type: String,
    required: true,
  },
  satyapit_matra: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
}, { timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;