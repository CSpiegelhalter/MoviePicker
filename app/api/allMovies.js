import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = (services, genres) => {

    return API.get('netflixmovies', `/netflixmovies?service=${services}&genres=${genres}`)
        .then((data) => {
            return data;
        })
}


export default {
    allNetflix
}