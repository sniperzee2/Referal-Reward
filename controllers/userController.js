const User = require("../models/User");

const createUser = async (req,res) => {
    try{
        const user = await User.create(req.body);
        console.log(user);
        res.status(200).json({
            status: "success",
            data: user
        });
    }catch(err){
        console.log("Error",err);
        res.status(500).json({
            status: "error",
            message: err.message
        })
    }
}


module.exports = {
    createUser
}
