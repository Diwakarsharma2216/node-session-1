const UserModel = require("../model/User.model")

const UserController={

    // ####### User Created Here #########
    createUser:async(req,res)=>{
        try {
        
            await UserModel.create({...req.body})
            res.status(200).json({message:"User Created Succesfully"})
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }

}



module.exports=UserController