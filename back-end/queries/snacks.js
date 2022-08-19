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
  } catch (err) {
    return err;
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
  try {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};
const updateSnack = async (snack, id) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6  WHERE id = $7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, id]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  updateSnack,
  deleteSnack,
};
