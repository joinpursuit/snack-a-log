const snacks = require("../controllers/snackController.js");
const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const getAllSnacks = await db.any("SELECT * FROM snacks");
    return getAllSnacks;
  } catch (err) {
    return err;
  }
};

const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (err) {
    return err;
  }
};
 
const createSnack = async (snack) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image)VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
};
