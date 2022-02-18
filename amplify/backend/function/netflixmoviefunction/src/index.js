const db = require('../../../models/index')

exports.handler = async (event) => {
    // TODO implement
    db.netflixMovies.findAll()
  .then((data) => {
      return data;
    // data.forEach(element => {
    //   console.log(element.toJSON());
    });
//   }).catch(err => {
//     console.log("WHOOPS", err);
//   });

//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
};
