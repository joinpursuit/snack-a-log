// DEPENDENCIES

const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

const snackController = require('./controllers/snackController.js')
// MIDDLEWARE
app.use(express.json())
app.use(cors());
app.use('/snacks', snackController);
// ROUTES
app.get('/', (req, res) => {
    res.send("Welcome to Snack a log")
})
app.get('*', (req, res) => {
    res.status(404).send('page not found')
})
// EXPORT
module.exports = app;
