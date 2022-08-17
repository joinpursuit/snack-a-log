const checkName = (req, res, next) => {
  if (req.body.name && typeof req.body.name === "string") {
    next();
  } else {
    res.status(400).json({ error: "A valid snack name is required" });
  }
};

const checkFiber = (req, res, next) => {
  if (typeof req.body.fiber === "number") {
    next();
  } else {
    res.status(400).json({ error: "please enter a valid number" });
  }
};

const checkProtein = (req, res, next) => {
  if (typeof req.body.protein === "number") {
    next();
  } else {
    res.status(400).json({ error: "please enter a valid number" });
  }
};

const checkSugar = (req, res, next) => {
  if (typeof req.body.added_sugar === "number") {
    next();
  } else {
    res.status(400).json({ error: "please enter a valid number" });
  }
};

const checkIs_Healthy = (req, res, next) => {
  if (is_healthy === true || is_healthy === false || is_healthy === undefined) {
    next();
  } else {
    res.status(400).json({ error: "this value should be a boolean" });
  }
};

const validateImageUrl = (req, res, next) => {
  if (
    req.body.image.substring(0, 7) === "http://" ||
    req.body.image.substring(0, 8) === "https://"
  ) {
    next(); 
  } else {
    res.status(400).json({error: 'Please enter a valid URL for your image link'})
  }
};

module.exports = {
  checkName,
  checkFiber,
  checkProtein,
  checkSugar,
  checkIs_Healthy,
  validateImageUrl
};
