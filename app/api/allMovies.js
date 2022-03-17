import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'
Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = () => {

 API.get('netflixmovies', '/netflixmovies')
            .then((data) => {
            console.log('hey bbbbbb');
            console.log(data)
            return(data)
            // data.forEach((element) => console.log(element))) 
            }).catch((err) => {
                console.log("Failed", err.response.message);
            })}


export default {
    allNetflix
}