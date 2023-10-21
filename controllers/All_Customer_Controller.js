const Registration = require('../models/Registration_Model');// Import the Registration model

exports.getAllCustomersData = async (req, res) => {
  try {
    // Use Mongoose's populate to fetch all customers with associated payments and products
    const customers = await Registration.find()
    .populate('payments') // Use the actual field name from your Registration schema
    .populate('products');

    if (!customers) {
      return res.status(404).json({ error: 'No customers found' });
    }

    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching customer data' });
  }
};
