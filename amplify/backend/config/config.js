require('dotenv').config();
const mysql = require('mysql2')



module.exports = {


            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: 'mysql',


}