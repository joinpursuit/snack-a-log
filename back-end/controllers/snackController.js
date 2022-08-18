const express = require("express");
const snacks = express.Router();

const {
    getAllSnacks,
    getSnack,
    createSnack,
    deleteSnack,
    updateSnack
} = require("../queries/snacks");

const { checkName} = require("../validations/checkSnacks");

const confirmHealth = require("../confirmHealth");


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

snacks.post("/", async (req, res) => {
    let { name, fiber, protein, added_sugar, is_healthy, image } = req.body;
    try {
        const healthySnack = confirmHealth(req.body);
        const verifiedSnack = await createSnack({ name, fiber, protein, added_sugar, healthySnack, image })

        res.json({payload: verifiedSnack,
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

snacks.put("/:id", async (req,res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(req.body, id);
    if(updatedSnack.id) {
        res.status(200).json({ payload: updatedSnack, success: true })
    } else {
        res.status(422).json({ payload: "include all fields" , success: false })
    }
})


module.exports = snacks;