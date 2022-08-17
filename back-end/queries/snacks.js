const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const getAllSnacks = await db.any("SELECT * FROM snacks");
        return getAllSnacks;
    } catch (err) {
        return err;
    }
};

const getSnacks = async (id) => {
    try {
        
    }
}

module.exports = {};
