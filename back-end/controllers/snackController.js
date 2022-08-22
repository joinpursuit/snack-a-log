const express = require('express');
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const confirmHealth = require('../confirmHealth.js')
const validateSnackName = require('../validateSnackName.js')


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
        res.status(404).json({
            success: false,
            payload: '/not found/'
        });
    }
});

snacks.post("/", async (req, res) => {
    const { body } = req;
    body.is_healthy = confirmHealth(body);
    body.name = validateSnackName(body);
    try {
        const createdSnack = await createSnack(body)
        if (createdSnack.id) {
            res.status(200).json({ success: true, payload: createdSnack })
        } else {
            res.status(422).json({ success: false, payload: "Must include name field" })
        }
    } catch (err) {
        console.log(err)
    }
});

snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
        res.status(200).json({
            success: true,
            payload: deletedSnack
        });
    } else {
        res.status(404).json({
            success: false,
            payload: "Not found"
        });
    }
});

snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(req.body, id);
    if (updatedSnack.id) {
        res.status(200).json({
            success: true,
            payload: updatedSnack
        });
    } else {
        res.status(404).json({ error: "Not found" })
    }
});

module.exports = snacks;