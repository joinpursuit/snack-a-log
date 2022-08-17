const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
    } catch (err) {
        return err;
    }
}

const getSnack = async (id) => {
    try {
        const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
        return oneSnack;
    } catch (err) {
        return err;
    }
}

const createSnack = async (snack) => {
    const {name, fiber, protein, added_sugar, is_healthy, image} = snack;
    // const capitalizeName = (name) => {
    //     return name 
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => {
    //         word.length > 3 ? word.charAt(0).toUpperCase() + word.slice(1) : null
    //     })
    //     .join(' ')
    // }
     name[0].length > 3 ? name.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()) : name
    
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [capitalizedName, fiber, protein, added_sugar, is_healthy, image]
        );
        return newSnack
    } catch (err) {
        return err
    }
}

const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", id);
        return deletedSnack
    } catch (err) {
        return err
    }
}

module.exports = {
    getAllSnacks,
    getSnack,
    createSnack,
    deleteSnack
};
