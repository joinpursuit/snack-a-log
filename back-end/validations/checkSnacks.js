const checkName = (req, res, next) => {
    console.log('name is being checked');
    if (req.body.name) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkFiber = (req, res, next) => {
    console.log('fiber is being checked');
    if (req.body.fiber) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkProtein = (req, res, next) => {
    console.log('protein is being checked');
    if (req.body.protein) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };

  const checkAdded_sugar = (req, res, next) => {
    console.log('added_sugar is being checked');
    if (req.body.added_sugar) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };

  const checkIs_healthy = (req, res, next) => {
    console.log('is_healthy is being checked');
    if (req.body.is_healthy) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkImage = (req, res, next) => {
    console.log('image is being checked');
    if (req.body.image) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  module.exports = {checkName, checkFiber,  checkProtein , checkIs_healthy , checkImage}