// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  next();
});
// ROUTES
const snacksController = require("./controllers/snackController.js");

app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snacksController);

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT
module.exports = app;
