const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any(`SELECT * FROM snacks`);
    return allSnacks;
  } catch (err) {
    return err;
  }
};

const getSnack = async (id) => {
  try {
    const snack = await db.oneOrNone(`SELECT * FROM snacks WHERE id=$1`, id);
    return snack;
  } catch (err) {
    return err;
  }
};

const createSnack = async (snack) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy } = snack;
    const newSnack = await db.one(
      `INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, fiber, protein, added_sugar, is_healthy]
    );
    return newSnack;
  } catch (err) {
    return err;
  }
};

const updateSnack = async (snack, id) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy } = snack;
    const updatedSnack = await db.one(
      `UPDATE snacks SET name = $1, fiber = $2, protein = $3, added_sugar = $4, is_healthy = $5 WHERE id = $6 RETURNING *`,
      [name, fiber, protein, added_sugar, is_healthy]
    );
    return updatedSnack
  } catch (err) {
    return err;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(`DELETE FROM snacks WHERE id = $1 RETURNING *`, id)
    return deletedSnack
  } catch (err) {
    return err
  }
}

module.exports = { getAllSnacks, getSnack, createSnack, updateSnack, deleteSnack };
