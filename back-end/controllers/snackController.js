const express = require("express");
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks");

const { checkName, validateImageUrl } = require('../validations/checkSnacks')

snacks.get('/', async (req, res) => {
  const allSnacks = await getAllSnacks(); 
  if(allSnacks[0]) {
    res.status(200).json({payload :allSnacks, success:true })
  } else {
    res.status(500).json({payload: 'error', success:false,  error: 'Server Error!'})
  }
}); 

snacks.get('/:id', async (req, res) => {
  const { id } = req.params; 
  const snack = await getSnack(id); 
  if(snack){
    res.json({payload:snack, success:true})
  } else {
    res.status(404).json({payload: 'not found', success:false, error: "Snack not found"})
  }
}); 

snacks.post('/', checkName, validateImageUrl,  async (req, res) => {
  const createdSnack = await createSnack(req.body);
  if(createdSnack.id) {
    res.status(200).json({payload:createdSnack, success: true})
  } else {
    res.status(422).json({payload:"unprocessable entity", success: false, error: "unprocessable entity"})
  }
}); 

snacks.put('/:id', checkName, validateImageUrl, async (req, res) => {
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
    res.status(200).json({payload:deletedSnack, success:true})
  } else {
    res.status(404).json({payload: 'not found', success:false, error: "Snack not found"})
  }
}); 

module.exports = snacks; 