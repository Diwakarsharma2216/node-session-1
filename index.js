const express=require("express")
const db = require("./config/db")
const UserRouter = require("./routes/User.routes")
require("dotenv").config()
const app=express()

app.use(express.json())

app.use("/user",UserRouter)





app.listen(process.env.PORT,async()=>{
    try {
        await db.sync()
    } catch (error) {
        console.log(error.message)
    }
})