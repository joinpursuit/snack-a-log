const checkName = (req, res, next) => {
    console.log("checking name")
    if(req.body.name){
        console.log("name found");
        next();
    } else {
        res.status(400).json({error: "name needed"})
    }
}

// const checkImage = (req, res, next) => {
//     const validExtensions = ['jpg','png', 'gif', 'bmp'];
//     const image = req.body.image
//     console.log(image.substring(image.length-3))
// }

module.exports = {checkName}