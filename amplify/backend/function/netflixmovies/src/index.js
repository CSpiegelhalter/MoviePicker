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
  let movieDate = {}
  let service = event.queryStringParameters.service
  let genreList = event.queryStringParameters.genres
  service = service.split(',')
  genreList = genreList.split(',')
  console.log(typeof(genreList));
  console.log(genreList);
  console.log(typeof(service));
  console.log(service);

  for (let i = 0; i <= service.length - 1; i++) {
    for (let j = 0; j <= genreList.length - 1; j++) {
      let hold = service[i]
      const returnData = await db[hold].findAll({
        order: db.sequelize.random(),
        limit: 3,
        where: {
          genres: db.sequelize.where(db.sequelize.fn('LOWER', db.sequelize.col('genres')), 'LIKE', '%' + genreList[j] + '%')
        }
      })
      movieDate[genreList[j]] = returnData
    }
  }
  

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(movieDate),
  };
};
