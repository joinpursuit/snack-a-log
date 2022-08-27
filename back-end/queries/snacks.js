const db = require("../db/dbConfig.js");

// INDEX Route - DONE
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    console.log(allSnacks);
    return allSnacks;
  } catch (error) {
    return error;
  }
};

// SHOW Route - DONE
const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

// CREATE Route - DONE
const createSnack = async (snack) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;

  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    console.log("create successful");
    return newSnack;
  } catch (error) {
    console.log("create unsuccessful", error);
    return error;
  }
};

// UPDATE Route - DONE
const updateSnack = async (snack, id) => {
  // const {name, fiber, protein, added_sugar, is_healthy, image} = snack
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6  WHERE id=$7 RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.image,
        id,
      ]
    );
    console.log(updatedSnack, "!!!!!!!!!!!!!!!!!!!!!!!!!");
    return updatedSnack;
  } catch (error) {
    console.log("NO UPDATE");

    return error;
  }
};
// DELETE Route - DONE
const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
