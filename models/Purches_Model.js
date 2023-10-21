const mongoose = require('mongoose');
const Registration = require('./Registration_Model');

const productSchema = new mongoose.Schema({
  name: String,
  purchaseDate: String,
  quantity: Number,
  brandName: String,
  amount: Number,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
  },
  // Other product-related fields
});

productSchema.pre('save', function (next) {
  if (this.purchaseDate) {
    // No need to use getDate() on a string date
    const originalDate = new Date(this.purchaseDate);
    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getFullYear().toString();
    this.purchaseDate = `${day}-${month}-${year}`;
  }
  next();
});

productSchema.pre('save', async function (next) {
  try {
    const registration = await Registration.findById(this.customer);
    registration.products.push(this._id);
    await registration.save();
  } catch (error) {
    next(error);
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
