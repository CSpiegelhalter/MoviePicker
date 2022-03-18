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



exports.handler = async (event, context, callback) => {

  let service = event.queryStringParameters.service
  let genreList = event.queryStringParameters.genres

  const returnData = await db[service].findAll({
    limit: 10,
    where: {
      genres: db.sequelize.where(db.sequelize.fn('LOWER', db.sequelize.col('genres')), 'LIKE', '%' + genreList + '%')
    }
  })

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(returnData),
  };
};
