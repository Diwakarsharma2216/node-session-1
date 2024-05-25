const { Sequelize } = require("sequelize");
require("dotenv").config();

const db=new Sequelize("node-session","root",process.env.MYSQL_PASS,{
    host: "localhost",
    dialect:'mysql'
})

module.exports =db