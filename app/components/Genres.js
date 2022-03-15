import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, TouchableHighlight } from 'react-native';
// import Button from '../components/Button';
import colors from '../config/colors';
import Amplify, { API } from 'aws-amplify';

import awsconfig from '../../src/aws-exports'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from './AppText';
Amplify.configure(awsconfig)
API.configure(awsconfig)




function Genres({ genreName }) {
    const navigation = useNavigation();

    // onPress = () => {
    //     API.get('netflixmovies', '/netflixmovies')
    //         .then((data) => {
    //         console.log('hey bbbbbb');
    //         console.log(data)
    //         // data.forEach((element) => console.log(element))) 
    //         }).catch((err) => {
    //             console.log("Failed", err.response.message);
    //         })}

    return (
        <>
            <TouchableHighlight
                underlayColor={'none'}
                // onPress={changeStyle}
                style={styles.container}
            >
                <Text >{ genreName }</Text>
            </TouchableHighlight>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Genres;