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
    let newSnackData;

    const nameLowerCase = name.toLowerCase().split(" ")
    const nameCorrected = nameLowerCase.map( word => (
        word.length > 2 ? word.replace(/^\w/, c => c.toUpperCase()) : word 
    )).join(" ")
    

    if(!image) {
        newSnackData = await db.one(
            "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [nameCorrected, fiber, protein, added_sugar, is_healthy, "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"]
        );
    } else {
        newSnackData = await db.one(
            "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [nameCorrected, fiber, protein, added_sugar, is_healthy, image]
        );
    }
    
    try {
        const newSnack = newSnackData
        return newSnack;
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

const updateSnack = async (snack, id) => {
    const {name, fiber, protein, added_sugar, is_healthy, image} = snack;
    try {
        const updatedSnack = await db.one("UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *", [name, fiber, protein, added_sugar, is_healthy, image, id]);
        return updatedSnack
    } catch (err) {
        return err
    }
}




module.exports = {
    getAllSnacks,
    getSnack,
    createSnack,
    deleteSnack,
    updateSnack
};
