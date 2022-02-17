const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });
const mysql = require('mysql2')

const config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
};

module.exports= config;
