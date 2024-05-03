// routes/cakes.js
const express = require('express');
const router = express.Router();
const Cake = require('../models/cake');

// GET all cakes
router.get('/', async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new cake
router.post('/', async (req, res) => {
  const cake = new Cake({
    name: req.body.name,
    flavor: req.body.flavor,
    price: req.body.price
  });

  try {
    const newCake = await cake.save();
    res.status(201).json(newCake);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
