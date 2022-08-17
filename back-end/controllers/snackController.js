const express = require("express");
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks");

const { checkName } = require('../validations/checkSnacks')

snacks.get('/', async (req, res) => {
  const allSnacks = await getAllSnacks(); 
  if(allSnacks[0]) {
    res.status(200).json(allSnacks)
  } else {
    res.status(500).json({error: 'Server Error!'})
  }
}); 

snacks.get('/:id', async (req, res) => {
  const { id } = req.params; 
  const snack = await getSnack(id); 
  if(snack){
    res.json(snack)
  } else {
    res.status(404).json({error: 'Snack Not Found'})
  }
}); 

snacks.post('/', checkName, async (req, res) => {
  const createdSnack = await createSnack(req.body);
  if(createdSnack.id) {
    res.status(200).json(createdSnack)
  } else {
    res.status(422).json({error: "unprocessable entity"})
  }
}); 

snacks.put('/:id', checkName, async (req, res) => {
  const { id } = req.params; 
  const updatedSnack = await updateSnack(req.body, id); 
  if(updatedSnack.id) {
    res.status(200).json(updatedSnack)
  } else {
    res.status(422).json({ error: "unprocessable entity"})
  }
});

snacks.delete('/:id', async (req, res) => {
  const { id } = req.params; 
  const deletedSnack = await deleteSnack(id); 
  if(deletedSnack.id) {
    res.status(200).json(deletedSnack)
  } else {
    res.status(404).json({ error: 'snack not found'})
  }
}); 

module.exports = snacks; 