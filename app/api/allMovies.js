import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = async (services, genres) => {
    var returnData = {}

        // for (let i = 0; i <= services.length - 1; i++) {
        //     for (let j = 0; j <= genres.length - 1; j++) {
                await API.get('netflixmovies', `/netflixmovies?service=${services}&genres=${genres}`)
                .then((data) => {
                    returnData = data
                })
        //     }
        // }
    
    // for (let i = 0; i <= services.length - 1; i++) {
    //     for ()
    //     API.get('netflixmovies', `/netflixmovies?service=${services[i]}&genres=${genres}`)
    //         .then((data) => {
    //             console.log('hey bbbbbb');
    //             console.log(data)
    //             returnData.push(data)
    //             // data.forEach((element) => console.log(element))) 
    //         })
    // }
    // const results = await Promise.all(promises)
    console.log(returnData);
    return returnData
}
export default {
    allNetflix
}