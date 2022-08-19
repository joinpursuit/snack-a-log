const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");

const { checkImage, checkName } = require("../validations/checkSnacks.js");

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.status(200).json({ payload: snack, success: true });
  } else {
    res.status(404).json({ payload: "Snack not found", success: false });
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSnack = await updateSnack(req.body, id);
  if (updatedSnack.id) {
    res.status(200).json({ payload: updatedSnack, success: true });
  } else {
    res.status(404).json("Error : Snack not updated");
  }
});

snacks.post("/", checkImage, checkName, async (req, res) => {
  const snack = await createSnack(req.body);
  if (snack.id) {
    res.status(200).json({ payload: snack, success: true });
  } else {
    res.status(404).json({ payload: "Snack not created", success: false });
  }
});
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ payload: deletedSnack, success: true });
  } else {
    res.status(404).json({ payload: "Snack not found!", success: false });
  }
});

module.exports = snacks;
