/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	database
	username
	password
	host
	port
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const Sequelize = require('sequelize');



 exports.handler = async (event) => {
     // console.log(`EVENT: ${JSON.stringify(event)}`);
     
 var sequelize = await new Sequelize('moivepicker-dev', 'admin', 'password', {
    host: 'moivepicker-dev.clgftnbfrrf4.us-east-1.rds.amazonaws.com',
    port: 3306,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
        ssl:'Amazon RDS',
        // ssl: { rejectUnauthorized: false }
    },
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000
    },
    language: 'en'
})
let db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.user = require("./rest/user")(sequelize, Sequelize);
// db.netflixMovies = require("./rest/netflixMovies")(sequelize, Sequelize);

await sequelize.authenticate().then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log('random log');
  console.log("Cannot connect to the database!", err);
  process.exit();
});


// sync
db.sequelize.sync()
     
 
 // module.exports = db;
 
 console.log("here perhaps?")
    //  db.netflixMovies.findAll({
    //     where: {
    //        Id: 2
    //       }
    //  })
    //      .then((data) => {
    //        console.log("HELOO??????")
    //        console.log(data)
    //          return {body: JSON.stringify(data)}
    //      }).catch(err => {
    //          console.log("WHOOPS", err);
    //      })
    //      console.log('fuckin here')
     // return {
     //     statusCode: 200,
     // //  Uncomment below to enable CORS requests
     // //  headers: {
     // //      "Access-Control-Allow-Origin": "*",
     // //      "Access-Control-Allow-Headers": "*"
     // //  }, 
     //     body: JSON.stringify('Hello from Lambda!'),
     // };
 };
 