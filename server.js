const express = require('express');
const connectToDb = require('./config/connectToDb');
const cakesRouter = require('./routes/cakes');
const frozenCreamRouter = require('./routes/frozenCream');
const cookiesRouter = require('./routes/cookies');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectToDb();

// Routes
app.use('/cakes', cakesRouter);
app.use('/frozen-creams', frozenCreamRouter);
app.use('/cookies', cookiesRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

