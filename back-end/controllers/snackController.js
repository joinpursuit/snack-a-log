const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
  updateSnack,
} = require("../queries/snacks.js");

const {
  checkName,
  checkImage,
  checkHealth,
} = require("../validations/checkSnacks.js");

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({ payload: "server error!", success: false });
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

  if (deletedSnack.id) {
    res.status(200).json({ payload: deletedSnack, success: true });
  } else {
    res.status(404).json({ payload: "snack not found", success: false });
  }
});

snacks.post("/", checkName, checkImage, checkHealth, async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    res.status(200).json({ payload: snack, success: true });
  } catch (error) {
    return error;
  }
});
snacks.put("/:id", checkName, checkImage, checkHealth, async (req, res) => {
  const { id } = req.params;

  try {
    const updatedSnack = await updateSnack(req.body, id);
    res.status(200).json({ payload: updatedSnack, success: true });
  } catch (error) {
    res.status(404).json({ payload: "snack not updated", success: false });
  }
});

module.exports = snacks;
