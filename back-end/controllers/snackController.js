const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, deleteSnack } = require("../queries/snacks.js");
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.json({ payload: snack, success: true });
  } else {
    const error = "not found";
    res.status(404).json({ payload: error, success: false });
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deleteSnack.id) {
    res.status(200).json({ payload: deletedSnack, success: true });
  } else {
    res.status(404).json({ payload: "snack not found", success: false });
  }
});

module.exports = snacks;
