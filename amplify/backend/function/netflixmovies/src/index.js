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



exports.handler = async (event, context,  callback) => {

  var sequelize = await new Sequelize('moivepicker-dev', 'admin', 'password', {
    host: 'moivepicker-dev.clgftnbfrrf4.us-east-1.rds.amazonaws.com',
    port: 3306,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
      ssl: 'Amazon RDS',
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

  db.user = require("./rest/user")(sequelize, Sequelize);
  db.netflixMovies = require("./rest/netflixMovies")(sequelize, Sequelize);

  await db.sequelize.authenticate().then(() => {
    console.log("Connected to the database!");
  })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });


  // sync
  db.sequelize.sync()


  // module.exports = db;
  const returnData = await db.netflixMovies.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('genres')), 'genres']
  ]
  })
    .then((data) => {
      console.log(JSON.stringify(data))
      return data
    }).catch(err => {
      console.log("WHOOPS", err);
    })


// var databaseQuery = function()
  //      console.log('fuckin here')
  return {
      statusCode: 200,
  // //  Uncomment below to enable CORS requests
   headers: {
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Headers": "*"
   }, 
      body: JSON.stringify(returnData),
  };
};
