// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

//CONTROLLER
const snacksController = require("./controllers/snackController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/snacks", snacksController)


// ROUTES
app.get("/", (req, res) => {
    res.send("Get Snack'n at Snack-a-log!")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "not found"})
});


// EXPORT
module.exports = app;
