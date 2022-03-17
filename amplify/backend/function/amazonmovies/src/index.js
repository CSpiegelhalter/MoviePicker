

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const db = require('/opt/dbConnection')

exports.handler = async (event) => {
    const returnData = await db.amazonMovies.findAll({
        attributes: [
          [db.Sequelize.fn('DISTINCT', db.Sequelize.col('genres')), 'genres']
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
