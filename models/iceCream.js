const mongoose = require('mongoose');

const iceCreamSchema = new mongoose.Schema({
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

const FrozenCream = mongoose.model('FrozenCream', iceCreamSchema);

// Sample data
const sampleFrozenCreams = [
  {
    name: 'Vanilla Ice Cream',
    flavor: 'Vanilla',
    price: 5
  },
  {
    name: 'Chocolate Ice Cream',
    flavor: 'Chocolate',
    price: 6
  }
];

module.exports = {
  FrozenCream,
  sampleFrozenCreams
};
