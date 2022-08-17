// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
const snacksController = require("./controllers/snacksController.js");


app.get('/', (req, res) => {
    res.send("Welcome to snack a log")
});

app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

// EXPORT
module.exports = app;
