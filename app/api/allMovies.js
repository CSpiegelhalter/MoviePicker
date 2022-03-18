import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = async (services, genres) => {
    var returnData = []
    for (let i = 0; i <= services.length() - 1; i++) {
        await API.get('netflixmovies', `/netflixmovies?service=${services[i]}&genres=${genres}`)
            .then((data) => {
                console.log('hey bbbbbb');
                console.log(data)
                returnData.append(data)
                // data.forEach((element) => console.log(element))) 
            }).catch((err) => {
                console.log("Failed", err.response.message);
            })
    }
    return returnData;
}
export default {
    allNetflix
}