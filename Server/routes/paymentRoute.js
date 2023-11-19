const express = require("express");
const { createPayment, vnpReturn, vnpayIPN } = require('../controller/paymentController');
const Router = express.Router();
Router.post('/create-payment', createPayment);
Router.get('/vnpay_ipn', vnpayIPN);
Router.get('/vnpay_return', vnpReturn);

module.exports = Router;
