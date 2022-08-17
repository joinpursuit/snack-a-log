const checkName = (req, res, next) => {
    console.log("checking name")
    if(req.body.name){
        console.log("name found");
        next();
    } else {
        res.status(400).json({error: "name needed"})
    }
}



module.exports = {checkName, checkImg}