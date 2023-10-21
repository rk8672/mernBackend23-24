const mongoose = require('mongoose');
const Registration = require('./Registration_Model'); // Import the Registration model

const paymentSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
  },
  amount: Number,
  date: {
    type: String,
  },
  // Other payment-related fields
});

// Before saving to the database, format the date as "DDMMYYYY"
paymentSchema.pre('save', function (next) {
  if (this.date) {
    const originalDate = new Date(this.date);
    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getFullYear().toString();
    this.date = `${day}-${month}-${year}`;
  }
  next();
});

paymentSchema.pre('save', async function (next) {
  // Update the Registration model's 'payments' field
  try {
    const registration = await Registration.findById(this.customerId);
    registration.payments.push(this._id);
    await registration.save();
  } catch (error) {
    next(error);
  }
  next();
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
