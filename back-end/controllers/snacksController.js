/** @format */

const express = require('express');
const snacks = express.Router();

const {
	createSnack,
	getAllSnacks,
	getSnack,
	updateSnack,
	deleteSnack,
} = require('../queries/snacks.js');

const {
	checkAddedSugar,
	checkFiber,
	checkName,
	checkProtein,
} = require('../validations/checkSnacks.js');

const confirmHealth = require('../confirmHealth');
const validName = require('../validations/validName');

// INDEX ROUTE
snacks.get('/', async (req, res) => {
	const allSnacks = await getAllSnacks();
	if (allSnacks[0]) {
		res.status(200).json(allSnacks);
	} else {
		res.status(500).json({ error: 'server error!' });
	}
});

// SHOW ROUTE
snacks.get('/:id', async (req, res) => {
	const { id } = req.params;
	const snack = await getSnack(id);
	if (snack.id) {
		res.json(snack);
	} else {
		res.status(404).json({ error: 'Not found' });
	}
});

// CREATE ROUTE
snacks.post(
	'/',
	checkAddedSugar,
	checkFiber,
	checkName,
	checkProtein,
	async (req, res) => {
		try {
			const isHealthy = confirmHealth(req.body);
			req.body.is_healthy = isHealthy;
			const validatedName = validName(req.body);
			req.body.name = validatedName;
			const snack = await createSnack(req.body);
			res.json(snack);
		} catch (error) {
			return error;
		}
	}
);

// UPDATE ROUTE
snacks.put(
	'/:id',
	checkAddedSugar,
	checkFiber,
	checkName,
	checkProtein,
	async (req, res) => {
		const { id } = req.params;
		const isHealthy = confirmHealth(req.body);
		req.body.is_healthy = isHealthy;
		const validatedName = validName(req.body);
		req.body.name = validatedName;
		const updatedSnack = await updateSnack(req.body, id);
		if (updatedSnack.id) {
			res.status(200).json(updatedSnack);
		} else {
			res.status(404).json({ error: 'Snack not updated.' });
		}
	}
);

// DESTROY ROUTE
snacks.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const deletedSnack = await deleteSnack(id);
	if (deletedSnack.id) {
		res.status(200).json(deletedSnack);
	} else {
		res.status(404).json('Snack not found.');
	}
});

module.exports = snacks;
