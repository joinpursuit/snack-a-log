const express = require('express');
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const { checkName, checkBoolean } = require('../validations/checkSnacks');

snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    if (allSnacks[0]) {
        res.status(200).json({
            success: true,
            payload: allSnacks
        });
    } else {
        res.status(500).json({ error: "server error" });
    }
});

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if (snack.id) {
        res.json({
            success: true,
            payload: snack
        });
    } else {
        res.status(404).json({ error: "snack not found" });
    }
});

snacks.post('/', checkBoolean, checkName, async (req, res) => {
    try {
        const snack = await createSnack(req.body);
        res.json(snack);
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json("Snack not found");
    }
});

snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(req.body, id);
    if (updatedSnack.id) {
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({ error: "Not found" })
    }
});

module.exports = snacks;