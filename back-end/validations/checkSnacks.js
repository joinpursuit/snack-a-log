/** @format */

const checkName = (req, res, next) => {
	const { name } = req.body;
	if (name) {
		next();
	} else {
		res.status(400).json({ error: 'We need a name.' });
	}
};

const checkFiber = (req, res, next) => {
	const { fiber } = req.body;
	if (Number(fiber)) {
		next();
	} else {
		res.status(400).json({ error: 'We need fiber to be a number.' });
	}
};

const checkProtein = (req, res, next) => {
	const { protein } = req.body;
	if (Number(protein)) {
		next();
	} else {
		res.status(400).json({ error: 'We need protein to be a number.' });
	}
};

const checkAddedSugar = (req, res, next) => {
	const { added_sugar } = req.body;
	if (Number(added_sugar)) {
		next();
	} else {
		res.status(400).json({ error: 'We need added sugar to be a number.' });
	}
};

module.exports = {
	checkAddedSugar,
	checkFiber,
	checkName,
	checkProtein,
};
