/** @format */

const db = require('../db/dbConfig.js');

const getAllSnacks = async () => {
	try {
		const allSnacks = await db.any('SELECT * FROM snacks');
		return allSnacks;
	} catch (error) {
		return error;
	}
};

const getSnack = async (id) => {
	try {
		const oneSnack = await db.one('SELECT * FROM snacks WHERE id=$1', id);
		return oneSnack;
	} catch (error) {
		return error;
	}
};

const createSnack = async (snack) => {
	try {
		const { name, fiber, protein, added_sugar, is_healthy, image_url } = snack;
		const newSnack = await db.one(
			'INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[name, fiber, protein, added_sugar, is_healthy, image_url]
		);
		return newSnack;
	} catch (error) {
		return error;
	}
};

const updateSnack = async (snack, id) => {
	try {
		const { name, fiber, protein, added_sugar, is_healthy, image_url } = snack;
		const updatedSnack = await db.one(
			'UPDATE snacks SET name = $1, fiber = $2, protein = $3, added_sugar = $4, is_healthy = $5, image_url = $6 WHERE id = $7 RETURNING *',
			[name, fiber, protein, added_sugar, is_healthy, image_url, id]
		);
		return updatedSnack;
	} catch (error) {
		return error;
	}
};

const deleteSnack = async (id) => {
	try {
		const deletedSnack = await db.one(
			'DELETE FROM snacks WHERE id = $1 RETURNING *',
			id
		);
		return deletedSnack;
	} catch (error) {
		return error;
	}
};

module.exports = {
	createSnack,
	deleteSnack,
	getAllSnacks,
	getSnack,
	updateSnack,
};
