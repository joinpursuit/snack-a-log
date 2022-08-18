const db = require("../db/dbConfig.js");

// INDEX Route - DONE
const getAllSnacks = async () => {
  try{
    const allSnacks = await db.any("SELECT * FROM snacks");
    console.log(allSnacks)
    return allSnacks
  }catch(error){
    return error
  }
}

// SHOW Route - DONE 
const getSnack = async(id)=>{
  try{
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack
  }catch(error){
    return error;
  }
}

const createSnack = async(song)=>{
  const {name, fiber, protein, added_sugar, is_healthy, image} = snack

  try{
    const newSnack = await db.one("INSERT INTO snacks(name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *",[name, fiber, protein, added_sugar, is_healthy, image])
    return newSnack
  }catch(error){
    return error
  }
}

const deleteSnack = async(id)=>{
  try{
    const deletedSnack = await db.one("DELETE FROM snacks WHERE id-$1 RETURNING *",id)
    return deleteSnack
  }catch(error){
    return error
  }
}

const updateSnack = async(song,id)=>{
  const {name, fiber, protein, added_sugar, is_healthy, image} = snack
  try{
    const updatedSnack = await db.one("UPDATE snacks SET name = $1, fiber = $2, protein = $3, added_sugar = $4, is_healthy = $5, image = $6 RETURNING *",[name, fiber, protein, added_sugar, is_healthy, image])
    return updatedSnack
  }catch(error){
    return error
  };
}

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack
};
