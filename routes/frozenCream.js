const express = require('express');
const router = express.Router();
const FrozenCream = require('../models/iceCream');  

// GET all frozen creams
router.get('/', async (req, res) => {
  try {
    const frozenCreams = await FrozenCream.find();
    res.json(frozenCreams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new frozen cream
router.post('/', async (req, res) => {
  const frozenCream = new FrozenCream({
    name: req.body.name,
    flavor: req.body.flavor,
    price: req.body.price
  });

  try {
    const newFrozenCream = await frozenCream.save();
    res.status(201).json(newFrozenCream);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

