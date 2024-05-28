const express=require("express")

const UserController = require("../controller/user.controller")
const UserRouter=express.Router()



// ####### User Created Here #########
UserRouter.post("/create",UserController.createUser)





module.exports=UserRouter