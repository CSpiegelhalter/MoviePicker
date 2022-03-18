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

const db = require('/opt/dbConnection')



exports.handler = async (event, context,  callback) => {
  console.log(event['queryStringParameters']);
    console.log(event.queryStringParameters);
    console.log(event);

  // module.exports = db;
//   const returnData = await db.netflixMovies.findAll({
//     attributes: [
//       [db.Sequelize.fn('DISTINCT', db.Sequelize.col('genres')), 'genres']
//   ]
//   })
//     .then((data) => {
//       console.log(JSON.stringify(data))
//       return data
//     }).catch(err => {
//       console.log("WHOOPS", err);
//     })


// // var databaseQuery = function()
//   //      console.log('fuckin here')
//   return {
//       statusCode: 200,
//   // //  Uncomment below to enable CORS requests
//    headers: {
//        "Access-Control-Allow-Origin": "*",
//        "Access-Control-Allow-Headers": "*"
//    }, 
//       body: JSON.stringify(returnData),
//   };
};
