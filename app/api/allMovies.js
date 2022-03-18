import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = async (services, genres) => {

    const returnData = await API.get('netflixmovies', `/netflixmovies?service=${services}&genres=${genres}`)
        
    return returnData
}


export default {
    allNetflix
}