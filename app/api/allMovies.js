import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = (services, genres) => {
    let returnData;
   return API.get('netflixmovies', `/netflixmovies?service=${services}&genres=${genres}`)
        .then((data) => {
            returnData = data
            // console.log(returnData);
            return data;
        })
        // console.log(returnData);
    // return returnData;
}


export default {
    allNetflix
}