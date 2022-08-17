const express = require("express");
const snacks = express.Router();

const {
    getAllSnacks,
    getSnack
} = require("../queries/snacks")


snacks.get("/", async (req,res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks[0]){
        res.status(200).json(allSnacks)
    } else {
        res.status(500).json({ error: "server error" })
    }
})

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if(snack.id){
        res.status(200).json(snack);
    } else {
        res.status(404).json({ error: "can't find snack" })
    }
})

module.exports = snacks;