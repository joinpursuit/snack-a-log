/** @format */

const checkName = (req, res, next) => {
	const { name } = req.body;
	if (name) {
		next();
	} else {
		res.status(400).json({ error: 'We need a name.' });
	}
};

const checkBoolean = (req, res, next) => {
	const { is_healthy } = req.body;
	if (
		is_healthy === 'true' ||
		is_healthy === 'false' ||
		is_healthy === true ||
		is_healthy === false ||
		is_healthy === undefined
	) {
		next();
	} else {
		res.status(400).json({ error: 'is_favorite should be a boolean.' });
	}
};

const validateImageUrl = (req, res, next) => {
	const { image_url } = req.body;
	if (
		image_url.substring(0, 7) === 'http://' ||
		image_url.substring(0, 8) === 'https://'
	) {
		next();
	} else {
		res
			.status(400)
			.json({ error: 'URL does not match "http://" or "https://" ' });
	}
};

module.exports = { checkBoolean, checkName, validateImageUrl };
