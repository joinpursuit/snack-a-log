const express = require('express');
const snacks = express.Router();
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack,} = require('../queries/snacks.js')

snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks) {
        res.status(200).json(allSnacks);

    } else {
        res.status(500).json ({error: 'server error'});
    }
});
snacks.get('/:id', async (req, res) => {
    const{id} = req.params
    const snack = await getSnack(id);
    if(snack.id) {
        res.json(snack)
    } else {
        res.status(404).json({error: 'not found'})
    }
})
// Add checkName and stuffs here
snacks.post('/', async (req, res) => {
    try{
        const snack = await createSnack(req.body);
        res.json(snack);

    } catch (error) {
        return error;
    }
} )

snacks.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const snack = await deleteSnack(id);
    if(snack.id) {
        res.json(snack);
    } else {
        res.status(404).json({error: 'not found'})
    }
})

snacks.put('/:id', async (req, res) => {
    const {id} = req.params;
    const snack = await updateSnack(req.body, id);
    if(snack.id) {
        res.json(snack);
    } else {
        res.status(404).json({error: 'not found'})
    }
}) 

module.exports = snacks;