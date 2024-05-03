// routes/cookies.js
const express = require('express');
const router = express.Router();
const Cookie = require('../models/cookie');

// GET all cookies
router.get('/', async (req, res) => {
  try {
    const cookies = await Cookie.find();
    res.json(cookies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new cookie
router.post('/', async (req, res) => {
  const cookie = new Cookie({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price
  });

  try {
    const newCookie = await cookie.save();
    res.status(201).json(newCookie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
