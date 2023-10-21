const express = require("express");

const route = express.Router();



const cmr = require("./Registration_routes.js");

const thumb = require("./Thumb_Routes.js");

route.use('/registration',cmr);
route.use('/thumb',thumb);


const productRoutes = require('./Purches_Routes.js');
const paymentRoutes = require('./Payment_Routes.js');

route.use('/products', productRoutes);
route.use('/payments', paymentRoutes);

const SingleCustomer = require('./Single_Customer_Routes.js');
route.use('/SingleCustomer', SingleCustomer);

const AllCustomer = require('./All_Customer_Routes.js');
route.use('/allCustomer', AllCustomer);

const Login = require('./Login_Routes.js');
route.use('/login', Login);


module.exports = route;