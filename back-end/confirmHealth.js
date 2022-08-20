const confirmHealth = (snack) => {
  const { protein, fiber, added_sugar } = snack;
  if (added_sugar >= 5) {
    return false;
  } else if (protein < 5 && fiber < 5 && added_sugar < 5) {
    return false;
  } else if (protein >= 5 || fiber >= 5) {
    return true;
  } else {
    return null;
  }
};

module.exports = confirmHealth;
