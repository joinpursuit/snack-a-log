// DEPENDENCIES
const express = require("express");
const cors = require('cors'); 
const snacksContoller = require("./controllers/snackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors()); 
app.use(express.json())
app.use('/snacks', snacksContoller)

// ROUTES
app.get('/', (req, res) => {
  res.send("Get Snack'n at Snack-a-log!")
})

app.get('*', (req, res) => {
  res.status(404).send('page not found')
})

// EXPORT
module.exports = app;
