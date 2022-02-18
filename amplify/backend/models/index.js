require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const mysql = require('mysql2')
// const config = require('../config/config.js');
const config = require('../config/config')

 var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: 3306,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
        ssl:'Amazon RDS',
        ssl: { rejectUnauthorized: false }
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
})
let db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./rest/user")(sequelize, Sequelize);
db.netflixMovies = require("./rest/netflixMovies")(sequelize, Sequelize);

db.sequelize.authenticate().then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});


// sync
db.sequelize.sync()
module.exports = db;






// const databases = Object.keys(config.databases);

// for (let i = 0; i < databases.length; i++) {
//   let database = databases[i];
  
//   let dbPath = config.databases[database];
  
//   db[database] = new Sequelize(
//     dbPath.database,
//     dbPath.username,
//     dbPath.password,
//     dbPath
//   );
// //   console.log(db[database]);
//   db[database].authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// }

// /**Add the Database Models**/
// fs.readdirSync(__dirname + '/rest')
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach((file) => {
//     var model = require(`./rest/${file}`);
    
//     // console.log('hehehee');
//     db[model.name] = model;
//     // console.log(db[model.name]);
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });