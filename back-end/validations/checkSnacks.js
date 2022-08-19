const checkImage = (req, res, next) => {
  if (req.body.image) {
    next();
  } else {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    next();
  }
};
const checkName = (req, res, next) => {
  if (req.body.name) {
    let capName = req.body.name.split(" ");
    for (let i = 0; i < capName.length; i++) {
      if (capName[i].length > 3) {
        capName[i] = capName[i][0].toUpperCase() + capName[i].substr(1);
      }
    }

    req.body.name = capName.join(" ");
    next();
  } else {
    res.status(400).json({ error: "We need a name.." });
  }
};

module.exports = { checkImage, checkName };
