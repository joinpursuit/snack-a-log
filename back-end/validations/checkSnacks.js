const confirmHealth = require("../confirmHealth");
const checkName = (req, res, next) => {
  if (req.body.name) {
    const capitalizedName = req.body.name.toLowerCase().split(" ");
    for (let i = 0; i < capitalizedName.length; i++) {
      if (capitalizedName[i].length > 2) {
        capitalizedName[i] =
          capitalizedName[i][0].toUpperCase() + capitalizedName[i].substr(1);
      }
    }
    req.body.name = capitalizedName.join(" ");
    next();
  } else {
    res.status(400).json({ error: "Please enter a name.." });
  }
};
const checkImage = (req, res, next) => {
  if (req.body.image) {
    next();
  } else {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    next();
  }
};

const checkHealth = (req, res, next) => {
  if (req.body) {
    req.body.is_healthy = confirmHealth(req.body);
    next();
  }
};
module.exports = { checkName, checkImage, checkHealth };
