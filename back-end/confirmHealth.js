const confirmHealth = (snack) => {
  console.log(snack)
  if(snack.protein > 5  && snack.added_sugar < 5){
    return true
  }
};

module.exports = confirmHealth;
