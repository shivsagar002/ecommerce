const paypal = require("paypal-rest-sdk");

require('dotenv').config();

paypal.configure({
  mode: process.env.mode,
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
});

module.exports = paypal;
