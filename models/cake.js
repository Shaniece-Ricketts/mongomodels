const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Cake = mongoose.model('Cake', cakeSchema);

// Sample data
const sampleCakes = [
  {
    name: 'Chocolate Cake',
    flavor: 'Chocolate',
    price: 20
  },
  {
    name: 'Vanilla Cake',
    flavor: 'Vanilla',
    price: 18
  }
];

module.exports = {
  Cake,
  sampleCakes
};

