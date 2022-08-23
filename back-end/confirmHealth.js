/** @format */

const confirmHealth = (snack) => {
	const { fiber, protein, added_sugar } = snack;
	let isHealthy = false;
	if ((protein > 5 || fiber > 5) && added_sugar < 5 && added_sugar >= 0) {
		isHealthy = true;
	} else {
		isHealthy = false;
	}
	return isHealthy;
};

module.exports = confirmHealth;
