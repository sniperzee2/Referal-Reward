const User = require("../models/User");

const referal = async (req,res) => {
    try{
        const id = req.body.userId
        const user = await User.findOneAndUpdate({
            _id: id
        },{
            isPaymentMade: true
        },{new: true});
        console.log(user);
        const referalUser = user.RefferedUser;
        if(!referalUser){
            return res.status(200).json({
                status: "success",
                data: user
            });
        }
        const referedReward = await User.findById(referalUser);
        referedReward.TotalEarning += 10;
        referedReward.save()

        console.log("Refered User",referedReward);

        res.status(200).json({
            status: "success",
            data: {
                referedUser: referedReward,
                user:user
            }
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
    referal
}
