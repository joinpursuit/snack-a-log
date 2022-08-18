/** @format */

// DEPENDENCIES
const express = require('express');
const cors = require('cors');

// CONFIGURATION
const app = express();

// CONTROLLERS
const snacksController = require('./controllers/snacksController.js');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/snacks', snacksController);

// ROUTES
app.get('/', (req, res) => {
	res.send("Welcome to M & J's Snack-a-Log Backend!");
});

// 404
app.get('*', (req, res) => {
	res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
