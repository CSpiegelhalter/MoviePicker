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

  console.log(event.queryStringParameters.service);

  console.log(event.queryStringParameters.genres);
  let service = event.queryStringParameters.service
  let genreList = event.queryStringParameters.genres

  const returnData = await db[service].findAll({
    where: {
      genres: {
        [db.Sequelize.contains]: [genreList]
      }
    }
  })
    .then((data) => {
      console.log(JSON.stringify(data))
      return data
    }).catch(err => {
      console.log("WHOOPS", err);
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
