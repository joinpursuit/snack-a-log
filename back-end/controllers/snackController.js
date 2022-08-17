const { response } = require('express');
const express = require('express')
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack
} = require('../queries/snacks.js');

const {
  checkName,
  checkBooleen,
  validateImage
} = require ('../validations/checkSnacks.js')

snacks.get('/', async(req,res)=>{
  const allSnacks = await getAllSnacks();
  if(allSnacks[0]){
    res.status(200).json(allSnacks);
  }else{
    res.status(500).json({error: 'server error (line 18)! Snack Controller'})
  }
})

snacks.get('/:id', async(req,res)=>{
  const {id} = res.params
  const snack = await getSnack(id);

  if(snack.id){
    res.json(snack);
  }else{
    res.status(404).json({error:'not found (line28'})
  }
})

snacks.post('/',checkName,checkBooleen, validateImage, async(req,res)=>{
  try{
    const snack = await createSnack(req.body)
    res.json(snack)
  }catch(error){
    return error;
  }
})

snacks.delete('/:id', async(req,res)=>{
  const {id} = req.params;
  const deletedSnack = await deleteSnack(id)

  if(deletedSnack.id){
    res.status(200).json(deleteSnack)
  }else{
    res.status(404).json('Snack not found')
  }
})

snacks.put('/:id', validatedImage, checkBooleen, checkName, async(req,res)=>{
  const {id} = req.params

  const updatedSnack = await updatedSnack(res.body, id);
  if(updateSnack.id){
    res.status(200).json(updatedSnack);
  }else{
    res.status(404).json({error:'Snack not updated (line59)'})
  }
})

module.exports = snacks