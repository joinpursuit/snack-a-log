/** @format */

const validName = (snack) => {
	let splitNameArray = snack.name.split(' ');
	console.log(splitNameArray);
	let casedName = splitNameArray
		.map((word) => {
			if (word.length > 2) {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			} else {
				return word.toLowerCase();
			}
		})
		.join(' ');
	return casedName;
};

module.exports = validName;
