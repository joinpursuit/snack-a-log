const express = require("express");
const snacks = express.Router();

//QUERIES
const { getAllSnacks, getSnack, createSnack, updateSnack, deleteSnack } = require("../queries/snacks");

//VALIDATIONS
// const { checkImage } = require("../validations/checkPost");

snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks[0]){
        res.status(200).json({payload: allSnacks, success: true});
    }else{
        res.status(500).json({error: "server error"});
    };
});

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if(snack.id){
        res.json({payload: snack, success: true});
    }else{
        res.status(404).json({payload: "not found", success: false});
    };
});

snacks.post("/", async (req, res) => {
    try{
        const snack = await createSnack(req.body);
        res.json({payload: snack, success: true});
    }catch(err){
        return err;
    };
});

snacks.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(req.body, id);
    if(updatedSnack.id){
        res.status(200).json({payload: updatedSnack, success: true});
    }else{
        res.status(400).json({payload: "bad request", success: false});
    };
});

snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id){
        res.status(200).json({payload: deletedSnack, success: true});
    }else{
        res.status(404).json({payload: "not found", success: false});
    }
})

module.exports = snacks;
