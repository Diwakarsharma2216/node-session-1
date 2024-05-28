const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

const UserModel=db.define("User",{
    username:STRING,
    email:STRING,
    password:STRING,
    number:STRING
})

module.exports=UserModel