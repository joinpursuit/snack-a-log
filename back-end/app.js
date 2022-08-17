// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLER
const snackController = require("./controllers/snackController")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/snacks", snackController);

app.get("/", (req, res) => {
    res.send("Get Snack'n at Snack-a-log!")
})

// EXPORT
module.exports = app;
