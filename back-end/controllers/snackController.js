const express = require("express");
const snacks = express.Router();

const {
    getAllSnacks,
    getSnack,
    createSnack,
    deleteSnack
} = require("../queries/snacks");

const { checkName} = require("../validations/checkSnacks");


snacks.get("/", async (req,res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks[0]){
        res.status(200).json({payload: allSnacks,
                                success: true})
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
        res.status(404).json({ payload: "not found" , success: false })
    }
})

snacks.post("/", checkName, async (req, res) => {
    try {
        const newSnack = await createSnack(req.body);
        res.json({payload: newSnack,
            success: true})
    } catch (err) {
        return(err)
    }
})

snacks.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id){
        res.status(200).json({payload: deletedSnack,
            success: true})
    } else {
        res.status(404).json({ payload: "" , success: false })
    }
})


module.exports = snacks;