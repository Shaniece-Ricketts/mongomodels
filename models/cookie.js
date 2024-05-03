// models/cookie.js
const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Cookie = mongoose.model('Cookie', cookieSchema);

// Sample data
const sampleCookies = [
  {
    name: 'Chocolate Chip Cookie',
    type: 'Chocolate Chip',
    price: 2
  },
  {
    name: 'Sugar Cookie',
    type: 'Sugar',
    price: 1.5
  }
];

module.exports = {
  Cookie,
  sampleCookies
};
