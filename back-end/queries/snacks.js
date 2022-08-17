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
    const splitWord = name.toLowerCase().split(" ")
    const correctedWord = splitWord.map( word => (
        word.length > 2 ? word.replace(/^\w/, c => c.toUpperCase()) : word 
    )).join(" ")
    
    // const dummyImg = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"

    // if(!image) {
    //     image = dummyImg
    //     return image
    // }
    
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [correctedWord, fiber, protein, added_sugar, is_healthy, image]
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
