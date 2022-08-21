const express = require("express");
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");

const {
  checkName,
  checkBooleen
} = require("../validations/checkSnacks.js");

// INDEX Route - DONE
snacks.get("/", async (request, response) => {
  const allSnacks = await getAllSnacks();
  console.log(allSnacks);
  if (allSnacks[0]) {
    response.status(200).json(allSnacks);
  } else {
    response
      .status(500)
      .json({ error: "server error (line 18)! Snack Controller" });
  }
});

// SHOW Route - DONE
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.json(snack);
  } else {
    res.status(404).json({ error: "not found (line28" });
  }
});

// NEW Route - DONE
snacks.post("/", checkName, checkBooleen, async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    if (snack.id) {
      res.status(200).json({
        sucess: true,
        payload: snack,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include name field",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(422).json("Snack not found");
  }
});

snacks.put("/:id", checkBooleen, checkName, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body, "********************");
  const updatedSnack = await updateSnack(req.body, id);
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(422).json({ error: "Snack not updated (line62)" });
  }
});

module.exports = snacks;
