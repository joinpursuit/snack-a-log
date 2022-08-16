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
  const song = await getSnack(id);

  if(song.id){
    res.json(snack);
  }else{
    res.status(404).json({error:'not found (line28'})
  }
})

snacks.post('/',checkName,checkBooleen, validateImage, async(req,res)=>{

})

module.exports= snacks