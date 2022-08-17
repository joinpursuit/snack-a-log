const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

// const checkImage = (req, res, next) => {
//     if (req.body.image) {
//         next();
//     } else {
//         res.status(400).json({ error: "An image is required" });
//     }
// };

const checkBoolean = (req, res, next) => {
    if (req.body.is_healthy) {
        next();
    } else {
        res.status(400).json({ error: "is_healthy must be a boolean value" });
    }
};

module.exports = { checkName, checkBoolean };
