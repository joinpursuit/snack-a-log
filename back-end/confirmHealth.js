const confirmHealth = (snack) => {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snack;

    if (typeof fiber !== 'number' ||
        typeof protein !== 'number' ||
        typeof added_sugar !== 'number'
    ) {
        return null
    } else {
        if (fiber > 5 && added_sugar < 5 || 
            protein > 5 && added_sugar < 5 ||
            protein > 5 && fiber > 5 && added_sugar < 5
            ) {
            return true;
        } else if (fiber > 5 && added_sugar > 5 ||
            protein > 5 && added_sugar > 5 ||
            protein > 5 && fiber > 5 && added_sugar > 5
            ) {
            return false;
        }
    }
};


module.exports = confirmHealth;
