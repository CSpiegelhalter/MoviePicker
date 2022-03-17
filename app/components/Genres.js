import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, TouchableHighlight } from 'react-native';
import CheckBox from 'react-native-check-box';
// import Button from '../components/Button';
import colors from '../config/colors';
import Amplify, { API } from 'aws-amplify';

import awsconfig from '../../src/aws-exports'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from './AppText';
Amplify.configure(awsconfig)
API.configure(awsconfig)




function Genres({ genreName, onPress }) {
    const navigation = useNavigation();

    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked)
        onPress()
    }

    return (
        <>
            <TouchableHighlight
                // underlayColor={'none'}
                onPress={handleClick}
                style={styles.container}
            >
                <View style={styles.genre}>
                    <CheckBox 
                    onClick={handleClick}
                    isChecked={isChecked}
                    />
                    <AppText >{genreName}</AppText>
                </View>
            </TouchableHighlight>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        // width: "100%",
        // flex: 1,
        // flex
    },
    genre: {
        width: '100%',
        // height: '100%',
        padding: 20,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: 'white'
    }
})

export default Genres;