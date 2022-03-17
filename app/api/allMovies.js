import Amplify, { API } from 'aws-amplify';

Amplify.configure(awsconfig)
API.configure(awsconfig)



const allNetflix = API.get('netflixmovies', '/netflixmovies')
            .then((data) => {
            console.log('hey bbbbbb');
            console.log(data)
            
            // data.forEach((element) => console.log(element))) 
            }).catch((err) => {
                console.log("Failed", err.response.message);
            })